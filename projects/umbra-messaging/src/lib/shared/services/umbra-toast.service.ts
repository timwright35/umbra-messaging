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
    DEFAULT_MARGIN,
    defaultToastConfig,
    ToastData
} from '../classes/toast-config';
import { ToastConfigInterface } from '../interfaces/toast-config.interface';
import { UmbraToastComponent } from '../../umbra-toast/umbra-toast.component';

@Injectable()
export class UmbraToastService {
    constructor(
        private overlay: Overlay,
        private parentInjector: Injector
    ) {}

    showToast(toastConfig: ToastConfigInterface) {
        if (toastConfig === null || toastConfig === undefined) {
            toastConfig = defaultToastConfig;
        }

        const overlayPosition = this.overlay.position().global();
        if (toastConfig.verticalPosition === 'center') {
            overlayPosition.centerVertically();
        } else {
            if (toastConfig.verticalPosition === 'top') {
                if (toastConfig.position.top) {
                    overlayPosition.top(toastConfig.position.top + 'px');
                } else {
                    overlayPosition.top(DEFAULT_MARGIN + 'px');
                }
            }

            if (toastConfig.verticalPosition === 'bottom') {
                if (toastConfig.position.bottom) {
                    overlayPosition.bottom(toastConfig.position.bottom + 'px');
                } else {
                    overlayPosition.bottom(DEFAULT_MARGIN + 'px');
                }
            }
        }

        if (toastConfig.horizontalPosition === 'center') {
            overlayPosition.centerHorizontally();
        } else {
            if (toastConfig.horizontalPosition === 'right') {
                if (toastConfig.position.right) {
                    overlayPosition.right(toastConfig.position.right + 'px');
                } else {
                    overlayPosition.right(DEFAULT_MARGIN + 'px');
                }
            }

            if (toastConfig.horizontalPosition === 'left') {
                if (toastConfig.position.left) {
                    overlayPosition.left(toastConfig.position.left + 'px');
                } else {
                    overlayPosition.left(DEFAULT_MARGIN + 'px');
                }
            }
        }

        const overlayRef = this.overlay.create({positionStrategy: overlayPosition});
        const toastRef = new ToastRef(overlayRef);

        const injector = this.getInjector(toastConfig.toastData, toastRef,
            this.parentInjector);
        const toastPortal = new ComponentPortal(UmbraToastComponent, null, injector);

        overlayRef.attach(toastPortal);

        return toastRef;
    }

    getInjector(data: ToastData, toastRef: ToastRef, parentInjector: Injector) {
        const tokens = new WeakMap();

        tokens.set(ToastData, data);
        tokens.set(ToastRef, toastRef);

        return new PortalInjector(parentInjector, tokens);
    }
}
