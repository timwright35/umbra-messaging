import {
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
    ToastConfig
} from '../classes/toast-config';
import { UmbraToastComponent } from '../../umbra-toast/umbra-toast.component';
import { isDefAndNotNull } from '../classes/common-functions';

@Injectable()
export class UmbraToastService {
    private openTopToasts: Array<ToastRef> = [];
    private openBottomToasts: Array<ToastRef> = [];

    constructor(private overlay: Overlay,
                private parentInjector: Injector) {}

    showToast(toastConfig: ToastConfig) {
        if (toastConfig === null || toastConfig === undefined) {
            toastConfig = defaultToastConfig;
        }

        const overlayPosition = this.getOverlayPosition(toastConfig);
        const overlayRef = this.overlay.create({positionStrategy: overlayPosition});
        const toastRef = new ToastRef(overlayRef);

        if (toastConfig.verticalPosition === 'top') {
            this.openTopToasts.push(toastRef);
        }

        if (toastConfig.verticalPosition === 'bottom') {
            this.openBottomToasts.push(toastRef);
        }

        const injector = this.getInjector(toastConfig, toastRef,
            this.parentInjector);
        const toastPortal = new ComponentPortal(UmbraToastComponent, null, injector);

        overlayRef.attach(toastPortal);

        return toastRef;
    }

    closeToast(toastRef: ToastRef) {
        this.openTopToasts = this.openTopToasts.filter((openToast: ToastRef) => {
            if (openToast !== toastRef) {
                return openToast;
            }
        });
        this.openBottomToasts = this.openBottomToasts.filter((openToast: ToastRef) => {
            if (openToast !== toastRef) {
                return openToast;
            }
        });
        toastRef.close();
    }

    closeAllToasts() {
        [...this.openTopToasts, ...this.openBottomToasts].forEach((toastRef: ToastRef) => {
            toastRef.close();
        });
        this.openBottomToasts = [];
        this.openTopToasts = [];
    }

    private getInjector(data: ToastConfig, toastRef: ToastRef, parentInjector: Injector) {
        const tokens = new WeakMap();
        tokens.set(ToastConfig, data);
        tokens.set(ToastRef, toastRef);
        return new PortalInjector(parentInjector, tokens);
    }

    private getOverlayPosition(toastConfig: ToastConfig) {
        const overlayPosition = this.overlay.position().global();
        if (toastConfig.verticalPosition === 'center') {
            overlayPosition.centerVertically();
        } else {
            if (toastConfig.verticalPosition === 'top') {
                let lastTopToastHeight = 0;
                let lastTopToast: ToastRef;
                if (this.openTopToasts.length > 0) {
                    lastTopToast = this.openTopToasts[this.openTopToasts.length - 1];
                }
                if (isDefAndNotNull(lastTopToast)) {
                    lastTopToastHeight = lastTopToast.getPosition().height;
                }
                let calculatedPosition: number;
                if (toastConfig.position.top) {
                    calculatedPosition = (this.openTopToasts.length * lastTopToastHeight) +
                        toastConfig.position.top;
                } else {
                    calculatedPosition = (this.openTopToasts.length * lastTopToastHeight);
                }
                overlayPosition.top(calculatedPosition + 'px');
            }

            if (toastConfig.verticalPosition === 'bottom') {
                let lastBottomToastHeight = 0;
                let lastBottomToast: ToastRef;
                if (this.openBottomToasts.length > 0) {
                    lastBottomToast = this.openBottomToasts[this.openBottomToasts.length - 1];
                }
                if (isDefAndNotNull(lastBottomToast)) {
                    lastBottomToastHeight = lastBottomToast.getPosition().height;
                }
                let calculatedPosition: number;
                if (toastConfig.position.bottom) {
                    calculatedPosition = (this.openBottomToasts.length * lastBottomToastHeight) +
                        toastConfig.position.bottom;
                } else {
                    calculatedPosition = (this.openBottomToasts.length * lastBottomToastHeight);
                }
                overlayPosition.bottom(calculatedPosition + 'px');
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

        return overlayPosition;
    }
}
