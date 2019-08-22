import {
  Inject,
  Injectable,
  Injector
} from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import {
  ComponentPortal,
  PortalInjector
} from '@angular/cdk/portal';
import { ToastRef } from '../classes/toast-ref';
import {
  defaultToastConfig,
  TOAST_CONFIG_TOKEN,
  ToastData
} from '../classes/toast-config';
import { ToastConfigInterface } from '../interfaces/toast-config.interface';
import { UmbraToastComponent } from '../../umbra-toast/umbra-toast.component';

@Injectable({
  providedIn: 'root'
})
export class UmbraToastService {
  private lastToast: ToastRef;
  private toastConfig: ToastConfigInterface;

  constructor(
      private overlay: Overlay,
      private parentInjector: Injector
  ) {}

  showToast(toastData: ToastData, toastConfig?: ToastConfigInterface) {
    if (toastConfig === null || toastConfig === undefined) {
      this.toastConfig = defaultToastConfig;
    }

    const positionStrategy = this.getPositionStrategy();
    const overlayRef = this.overlay.create({ positionStrategy });

    const toastRef = new ToastRef(overlayRef);

    const injector = this.getInjector(toastData, toastRef, this.parentInjector);
    const toastPortal = new ComponentPortal(UmbraToastComponent, null, injector);

    overlayRef.attach(toastPortal);

    return toastRef;
  }

  getPositionStrategy() {
    return this.overlay.position()
        .global()
        .top(this.getPosition())
        .right(this.toastConfig.position.right + 'px');
  }

  getPosition() {
    const lastToastIsVisible = this.lastToast && this.lastToast.isVisible();
    const position = lastToastIsVisible
        ? this.lastToast.getPosition().bottom
        : this.toastConfig.position.top;

    return position + 'px';
  }

  getInjector(data: ToastData, toastRef: ToastRef, parentInjector: Injector) {
    const tokens = new WeakMap();

    tokens.set(ToastData, data);
    tokens.set(ToastRef, toastRef);

    return new PortalInjector(parentInjector, tokens);
  }
}
