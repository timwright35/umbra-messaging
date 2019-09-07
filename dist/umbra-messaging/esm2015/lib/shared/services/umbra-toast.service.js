import { Injectable, Injector } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ToastRef } from '../classes/toast-ref';
import { DEFAULT_MARGIN, defaultToastConfig, ToastConfig } from '../classes/toast-config';
import { UmbraToastComponent } from '../../umbra-toast/umbra-toast.component';
import { isDefAndNotNull } from '../classes/common-functions';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class UmbraToastService {
    constructor(overlay, parentInjector) {
        this.overlay = overlay;
        this.parentInjector = parentInjector;
        this.openTopToasts = [];
        this.openBottomToasts = [];
    }
    showToast(toastConfig) {
        if (toastConfig === null || toastConfig === undefined) {
            toastConfig = defaultToastConfig;
        }
        const overlayPosition = this.getOverlayPosition(toastConfig);
        const overlayRef = this.overlay.create({ positionStrategy: overlayPosition });
        const toastRef = new ToastRef(overlayRef);
        if (toastConfig.verticalPosition === 'top') {
            this.openTopToasts.push(toastRef);
        }
        if (toastConfig.verticalPosition === 'bottom') {
            this.openBottomToasts.push(toastRef);
        }
        const injector = this.getInjector(toastConfig, toastRef, this.parentInjector);
        const toastPortal = new ComponentPortal(UmbraToastComponent, null, injector);
        overlayRef.attach(toastPortal);
        return toastRef;
    }
    closeToast(toastRef) {
        this.openTopToasts = this.openTopToasts.filter((openToast) => {
            if (openToast !== toastRef) {
                return openToast;
            }
        });
        this.openBottomToasts = this.openBottomToasts.filter((openToast) => {
            if (openToast !== toastRef) {
                return openToast;
            }
        });
        toastRef.close();
    }
    closeAllToasts() {
        [...this.openTopToasts, ...this.openBottomToasts].forEach((toastRef) => {
            toastRef.close();
        });
        this.openBottomToasts = [];
        this.openTopToasts = [];
    }
    getInjector(data, toastRef, parentInjector) {
        const tokens = new WeakMap();
        tokens.set(ToastConfig, data);
        tokens.set(ToastRef, toastRef);
        return new PortalInjector(parentInjector, tokens);
    }
    getOverlayPosition(toastConfig) {
        const overlayPosition = this.overlay.position().global();
        if (toastConfig.verticalPosition === 'center') {
            overlayPosition.centerVertically();
        }
        else {
            if (toastConfig.verticalPosition === 'top') {
                let lastTopToastHeight = 0;
                let lastTopToast;
                if (this.openTopToasts.length > 0) {
                    lastTopToast = this.openTopToasts[this.openTopToasts.length - 1];
                }
                if (isDefAndNotNull(lastTopToast)) {
                    lastTopToastHeight = lastTopToast.getPosition().height;
                }
                let calculatedPosition;
                if (toastConfig.position.top) {
                    calculatedPosition = (this.openTopToasts.length * lastTopToastHeight) +
                        toastConfig.position.top;
                }
                else {
                    calculatedPosition = (this.openTopToasts.length * lastTopToastHeight);
                }
                overlayPosition.top(calculatedPosition + 'px');
            }
            if (toastConfig.verticalPosition === 'bottom') {
                let lastBottomToastHeight = 0;
                let lastBottomToast;
                if (this.openBottomToasts.length > 0) {
                    lastBottomToast = this.openBottomToasts[this.openBottomToasts.length - 1];
                }
                if (isDefAndNotNull(lastBottomToast)) {
                    lastBottomToastHeight = lastBottomToast.getPosition().height;
                }
                let calculatedPosition;
                if (toastConfig.position.bottom) {
                    calculatedPosition = (this.openBottomToasts.length * lastBottomToastHeight) +
                        toastConfig.position.bottom;
                }
                else {
                    calculatedPosition = (this.openBottomToasts.length * lastBottomToastHeight);
                }
                overlayPosition.bottom(calculatedPosition + 'px');
            }
        }
        if (toastConfig.horizontalPosition === 'center') {
            overlayPosition.centerHorizontally();
        }
        else {
            if (toastConfig.horizontalPosition === 'right') {
                if (toastConfig.position.right) {
                    overlayPosition.right(toastConfig.position.right + 'px');
                }
                else {
                    overlayPosition.right(DEFAULT_MARGIN + 'px');
                }
            }
            if (toastConfig.horizontalPosition === 'left') {
                if (toastConfig.position.left) {
                    overlayPosition.left(toastConfig.position.left + 'px');
                }
                else {
                    overlayPosition.left(DEFAULT_MARGIN + 'px');
                }
            }
        }
        return overlayPosition;
    }
}
/** @nocollapse */ UmbraToastService.ngInjectableDef = i0.ɵɵdefineInjectable({ token: UmbraToastService, factory: function UmbraToastService_Factory(t) { return new (t || UmbraToastService)(i0.ɵɵinject(i1.Overlay), i0.ɵɵinject(i0.Injector)); }, providedIn: null });
/*@__PURE__*/ i0.ɵsetClassMetadata(UmbraToastService, [{
        type: Injectable
    }], function () { return [{ type: i1.Overlay }, { type: i0.Injector }]; }, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW1icmEtdG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VtYnJhLW1lc3NhZ2luZy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2VydmljZXMvdW1icmEtdG9hc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsVUFBVSxFQUNWLFFBQVEsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUNILGVBQWUsRUFDZixjQUFjLEVBQ2pCLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFDSCxjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLFdBQVcsRUFDZCxNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7O0FBRzlELE1BQU0sT0FBTyxpQkFBaUI7SUFJMUIsWUFBb0IsT0FBZ0IsRUFDaEIsY0FBd0I7UUFEeEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixtQkFBYyxHQUFkLGNBQWMsQ0FBVTtRQUpwQyxrQkFBYSxHQUFvQixFQUFFLENBQUM7UUFDcEMscUJBQWdCLEdBQW9CLEVBQUUsQ0FBQztJQUdBLENBQUM7SUFFaEQsU0FBUyxDQUFDLFdBQXdCO1FBQzlCLElBQUksV0FBVyxLQUFLLElBQUksSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQ25ELFdBQVcsR0FBRyxrQkFBa0IsQ0FBQztTQUNwQztRQUVELE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3RCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFD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Q3ZFLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2lCQUNuQztxQkFBTTtvQkFDSCxrQkFBa0IsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcscUJBQXFCLENBQUMsQ0FBQztpQkFDL0U7Z0JBQ0QsZUFBZSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUNyRDtTQUNKO1FBRUQsSUFBSSxXQUFXLENBQUMsa0JBQWtCLEtBQUssUUFBUSxFQUFFO1lBQzdDLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQ3hDO2FBQU07WUFDSCxJQUFJLFdBQVcsQ0FBQyxrQkFBa0IsS0FBSyxPQUFPLEVBQUU7Z0JBQzVDLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7b0JBQzVCLGVBQWUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7aUJBQzVEO3FCQUFNO29CQUNILGVBQWUsQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxDQUFDO2lCQUNoRDthQUNKO1lBRUQsSUFBSSxXQUFXLENBQUMsa0JBQWtCLEtBQUssTUFBTSxFQUFFO2dCQUMzQyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFO29CQUMzQixlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO2lCQUMxRDtxQkFBTTtvQkFDSCxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQztpQkFDL0M7YUFDSjtTQUNKO1FBRUQsT0FBTyxlQUFlLENBQUM7SUFDM0IsQ0FBQzs7bUVBL0hRLGlCQUFpQixvRUFBakIsaUJBQWlCO21DQUFqQixpQkFBaUI7Y0FEN0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBJbmplY3RhYmxlLFxyXG4gICAgSW5qZWN0b3JcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudFBvcnRhbCxcclxuICAgIFBvcnRhbEluamVjdG9yXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IFRvYXN0UmVmIH0gZnJvbSAnLi4vY2xhc3Nlcy90b2FzdC1yZWYnO1xyXG5pbXBvcnQge1xyXG4gICAgREVGQVVMVF9NQVJHSU4sXHJcbiAgICBkZWZhdWx0VG9hc3RDb25maWcsXHJcbiAgICBUb2FzdENvbmZpZ1xyXG59IGZyb20gJy4uL2NsYXNzZXMvdG9hc3QtY29uZmlnJztcclxuaW1wb3J0IHsgVW1icmFUb2FzdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL3VtYnJhLXRvYXN0L3VtYnJhLXRvYXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGlzRGVmQW5kTm90TnVsbCB9IGZyb20gJy4uL2NsYXNzZXMvY29tbW9uLWZ1bmN0aW9ucyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVbWJyYVRvYXN0U2VydmljZSB7XHJcbiAgICBwcml2YXRlIG9wZW5Ub3BUb2FzdHM6IEFycmF5PFRvYXN0UmVmPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBvcGVuQm90dG9tVG9hc3RzOiBBcnJheTxUb2FzdFJlZj4gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhcmVudEluamVjdG9yOiBJbmplY3Rvcikge31cclxuXHJcbiAgICBzaG93VG9hc3QodG9hc3RDb25maWc6IFRvYXN0Q29uZmlnKSB7XHJcbiAgICAgICAgaWYgKHRvYXN0Q29uZmlnID09PSBudWxsIHx8IHRvYXN0Q29uZmlnID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdG9hc3RDb25maWcgPSBkZWZhdWx0VG9hc3RDb25maWc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvdmVybGF5UG9zaXRpb24gPSB0aGlzLmdldE92ZXJsYXlQb3NpdGlvbih0b2FzdENvbmZpZyk7XHJcbiAgICAgICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe3Bvc2l0aW9uU3RyYXRlZ3k6IG92ZXJsYXlQb3NpdGlvbn0pO1xyXG4gICAgICAgIGNvbnN0IHRvYXN0UmVmID0gbmV3IFRvYXN0UmVmKG92ZXJsYXlSZWYpO1xyXG5cclxuICAgICAgICBpZiAodG9hc3RDb25maWcudmVydGljYWxQb3NpdGlvbiA9PT0gJ3RvcCcpIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuVG9wVG9hc3RzLnB1c2godG9hc3RSZWYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRvYXN0Q29uZmlnLnZlcnRpY2FsUG9zaXRpb24gPT09ICdib3R0b20nKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbkJvdHRvbVRvYXN0cy5wdXNoKHRvYXN0UmVmKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGluamVjdG9yID0gdGhpcy5nZXRJbmplY3Rvcih0b2FzdENvbmZpZywgdG9hc3RSZWYsXHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50SW5qZWN0b3IpO1xyXG4gICAgICAgIGNvbnN0IHRvYXN0UG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChVbWJyYVRvYXN0Q29tcG9uZW50LCBudWxsLCBpbmplY3Rvcik7XHJcblxyXG4gICAgICAgIG92ZXJsYXlSZWYuYXR0YWNoKHRvYXN0UG9ydGFsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRvYXN0UmVmO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlVG9hc3QodG9hc3RSZWY6IFRvYXN0UmVmKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuVG9wVG9hc3RzID0gdGhpcy5vcGVuVG9wVG9hc3RzLmZpbHRlcigob3BlblRvYXN0OiBUb2FzdFJlZikgPT4ge1xyXG4gICAgICAgICAgICBpZiAob3BlblRvYXN0ICE9PSB0b2FzdFJlZikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wZW5Ub2FzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub3BlbkJvdHRvbVRvYXN0cyA9IHRoaXMub3BlbkJvdHRvbVRvYXN0cy5maWx0ZXIoKG9wZW5Ub2FzdDogVG9hc3RSZWYpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wZW5Ub2FzdCAhPT0gdG9hc3RSZWYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcGVuVG9hc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0b2FzdFJlZi5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlQWxsVG9hc3RzKCkge1xyXG4gICAgICAgIFsuLi50aGlzLm9wZW5Ub3BUb2FzdHMsIC4uLnRoaXMub3BlbkJvdHRvbVRvYXN0c10uZm9yRWFjaCgodG9hc3RSZWY6IFRvYXN0UmVmKSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0UmVmLmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vcGVuQm90dG9tVG9hc3RzID0gW107XHJcbiAgICAgICAgdGhpcy5vcGVuVG9wVG9hc3RzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRJbmplY3RvcihkYXRhOiBUb2FzdENvbmZpZywgdG9hc3RSZWY6IFRvYXN0UmVmLCBwYXJlbnRJbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgICAgICBjb25zdCB0b2tlbnMgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgICAgIHRva2Vucy5zZXQoVG9hc3RDb25maWcsIGRhdGEpO1xyXG4gICAgICAgIHRva2Vucy5zZXQoVG9hc3RSZWYsIHRvYXN0UmVmKTtcclxuICAgICAgICByZXR1cm4gbmV3IFBvcnRhbEluamVjdG9yKHBhcmVudEluamVjdG9yLCB0b2tlbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0T3ZlcmxheVBvc2l0aW9uKHRvYXN0Q29uZmlnOiBUb2FzdENvbmZpZykge1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXlQb3NpdGlvbiA9IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpLmdsb2JhbCgpO1xyXG4gICAgICAgIGlmICh0b2FzdENvbmZpZy52ZXJ0aWNhbFBvc2l0aW9uID09PSAnY2VudGVyJykge1xyXG4gICAgICAgICAgICBvdmVybGF5UG9zaXRpb24uY2VudGVyVmVydGljYWxseSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0b2FzdENvbmZpZy52ZXJ0aWNhbFBvc2l0aW9uID09PSAndG9wJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhc3RUb3BUb2FzdEhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGFzdFRvcFRvYXN0OiBUb2FzdFJlZjtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wZW5Ub3BUb2FzdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RUb3BUb2FzdCA9IHRoaXMub3BlblRvcFRvYXN0c1t0aGlzLm9wZW5Ub3BUb2FzdHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNEZWZBbmROb3ROdWxsKGxhc3RUb3BUb2FzdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0VG9wVG9hc3RIZWlnaHQgPSBsYXN0VG9wVG9hc3QuZ2V0UG9zaXRpb24oKS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FsY3VsYXRlZFBvc2l0aW9uOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9hc3RDb25maWcucG9zaXRpb24udG9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRlZFBvc2l0aW9uID0gKHRoaXMub3BlblRvcFRvYXN0cy5sZW5ndGggKiBsYXN0VG9wVG9hc3RIZWlnaHQpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RDb25maWcucG9zaXRpb24udG9wO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVkUG9zaXRpb24gPSAodGhpcy5vcGVuVG9wVG9hc3RzLmxlbmd0aCAqIGxhc3RUb3BUb2FzdEhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5UG9zaXRpb24udG9wKGNhbGN1bGF0ZWRQb3NpdGlvbiArICdweCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodG9hc3RDb25maWcudmVydGljYWxQb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsYXN0Qm90dG9tVG9hc3RIZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhc3RCb3R0b21Ub2FzdDogVG9hc3RSZWY7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcGVuQm90dG9tVG9hc3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0Qm90dG9tVG9hc3QgPSB0aGlzLm9wZW5Cb3R0b21Ub2FzdHNbdGhpcy5vcGVuQm90dG9tVG9hc3RzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzRGVmQW5kTm90TnVsbChsYXN0Qm90dG9tVG9hc3QpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdEJvdHRvbVRvYXN0SGVpZ2h0ID0gbGFzdEJvdHRvbVRvYXN0LmdldFBvc2l0aW9uKCkuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGNhbGN1bGF0ZWRQb3NpdGlvbjogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRvYXN0Q29uZmlnLnBvc2l0aW9uLmJvdHRvbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZWRQb3NpdGlvbiA9ICh0aGlzLm9wZW5Cb3R0b21Ub2FzdHMubGVuZ3RoICogbGFzdEJvdHRvbVRvYXN0SGVpZ2h0KSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0Q29uZmlnLnBvc2l0aW9uLmJvdHRvbTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRlZFBvc2l0aW9uID0gKHRoaXMub3BlbkJvdHRvbVRvYXN0cy5sZW5ndGggKiBsYXN0Qm90dG9tVG9hc3RIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb3ZlcmxheVBvc2l0aW9uLmJvdHRvbShjYWxjdWxhdGVkUG9zaXRpb24gKyAncHgnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRvYXN0Q29uZmlnLmhvcml6b250YWxQb3NpdGlvbiA9PT0gJ2NlbnRlcicpIHtcclxuICAgICAgICAgICAgb3ZlcmxheVBvc2l0aW9uLmNlbnRlckhvcml6b250YWxseSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0b2FzdENvbmZpZy5ob3Jpem9udGFsUG9zaXRpb24gPT09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0b2FzdENvbmZpZy5wb3NpdGlvbi5yaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXlQb3NpdGlvbi5yaWdodCh0b2FzdENvbmZpZy5wb3NpdGlvbi5yaWdodCArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5UG9zaXRpb24ucmlnaHQoREVGQVVMVF9NQVJHSU4gKyAncHgnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRvYXN0Q29uZmlnLmhvcml6b250YWxQb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9hc3RDb25maWcucG9zaXRpb24ubGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXlQb3NpdGlvbi5sZWZ0KHRvYXN0Q29uZmlnLnBvc2l0aW9uLmxlZnQgKyAncHgnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheVBvc2l0aW9uLmxlZnQoREVGQVVMVF9NQVJHSU4gKyAncHgnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG92ZXJsYXlQb3NpdGlvbjtcclxuICAgIH1cclxufVxyXG4iXX0=