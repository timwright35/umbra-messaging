import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ToastRef } from '../classes/toast-ref';
import { DEFAULT_MARGIN, defaultToastConfig, ToastConfig } from '../classes/toast-config';
import { UmbraToastComponent } from '../../umbra-toast/umbra-toast.component';
import { isDefAndNotNull } from '../classes/common-functions';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
var UmbraToastService = /** @class */ (function () {
    function UmbraToastService(overlay, parentInjector) {
        this.overlay = overlay;
        this.parentInjector = parentInjector;
        this.openTopToasts = [];
        this.openBottomToasts = [];
    }
    UmbraToastService.prototype.showToast = function (toastConfig) {
        if (toastConfig === null || toastConfig === undefined) {
            toastConfig = defaultToastConfig;
        }
        var overlayPosition = this.getOverlayPosition(toastConfig);
        var overlayRef = this.overlay.create({ positionStrategy: overlayPosition });
        var toastRef = new ToastRef(overlayRef);
        if (toastConfig.verticalPosition === 'top') {
            this.openTopToasts.push(toastRef);
        }
        if (toastConfig.verticalPosition === 'bottom') {
            this.openBottomToasts.push(toastRef);
        }
        var injector = this.getInjector(toastConfig, toastRef, this.parentInjector);
        var toastPortal = new ComponentPortal(UmbraToastComponent, null, injector);
        overlayRef.attach(toastPortal);
        return toastRef;
    };
    UmbraToastService.prototype.closeToast = function (toastRef) {
        this.openTopToasts = this.openTopToasts.filter(function (openToast) {
            if (openToast !== toastRef) {
                return openToast;
            }
        });
        this.openBottomToasts = this.openBottomToasts.filter(function (openToast) {
            if (openToast !== toastRef) {
                return openToast;
            }
        });
        toastRef.close();
    };
    UmbraToastService.prototype.closeAllToasts = function () {
        tslib_1.__spread(this.openTopToasts, this.openBottomToasts).forEach(function (toastRef) {
            toastRef.close();
        });
        this.openBottomToasts = [];
        this.openTopToasts = [];
    };
    UmbraToastService.prototype.getInjector = function (data, toastRef, parentInjector) {
        var tokens = new WeakMap();
        tokens.set(ToastConfig, data);
        tokens.set(ToastRef, toastRef);
        return new PortalInjector(parentInjector, tokens);
    };
    UmbraToastService.prototype.getOverlayPosition = function (toastConfig) {
        var overlayPosition = this.overlay.position().global();
        if (toastConfig.verticalPosition === 'center') {
            overlayPosition.centerVertically();
        }
        else {
            if (toastConfig.verticalPosition === 'top') {
                var lastTopToastHeight = 0;
                var lastTopToast = void 0;
                if (this.openTopToasts.length > 0) {
                    lastTopToast = this.openTopToasts[this.openTopToasts.length - 1];
                }
                if (isDefAndNotNull(lastTopToast)) {
                    lastTopToastHeight = lastTopToast.getPosition().height;
                }
                var calculatedPosition = void 0;
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
                var lastBottomToastHeight = 0;
                var lastBottomToast = void 0;
                if (this.openBottomToasts.length > 0) {
                    lastBottomToast = this.openBottomToasts[this.openBottomToasts.length - 1];
                }
                if (isDefAndNotNull(lastBottomToast)) {
                    lastBottomToastHeight = lastBottomToast.getPosition().height;
                }
                var calculatedPosition = void 0;
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
    };
    /** @nocollapse */ UmbraToastService.ngInjectableDef = i0.ɵɵdefineInjectable({ token: UmbraToastService, factory: function UmbraToastService_Factory(t) { return new (t || UmbraToastService)(i0.ɵɵinject(i1.Overlay), i0.ɵɵinject(i0.Injector)); }, providedIn: null });
    return UmbraToastService;
}());
export { UmbraToastService };
/*@__PURE__*/ i0.ɵsetClassMetadata(UmbraToastService, [{
        type: Injectable
    }], function () { return [{ type: i1.Overlay }, { type: i0.Injector }]; }, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW1icmEtdG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VtYnJhLW1lc3NhZ2luZy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2VydmljZXMvdW1icmEtdG9hc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFVBQVUsRUFDVixRQUFRLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFDSCxlQUFlLEVBQ2YsY0FBYyxFQUNqQixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQ0gsY0FBYyxFQUNkLGtCQUFrQixFQUNsQixXQUFXLEVBQ2QsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7OztBQUU5RDtJQUtJLDJCQUFvQixPQUFnQixFQUNoQixjQUF3QjtRQUR4QixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLG1CQUFjLEdBQWQsY0FBYyxDQUFVO1FBSnBDLGtCQUFhLEdBQW9CLEVBQUUsQ0FBQztRQUNwQyxxQkFBZ0IsR0FBb0IsRUFBRSxDQUFDO0lBR0EsQ0FBQztJQUVoRCxxQ0FBUyxHQUFULFVBQVUsV0FBd0I7UUFDOUIsSUFBSSxXQUFXLEtBQUssSUFBSSxJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDbkQsV0FBVyxHQUFHLGtCQUFrQixDQUFDO1NBQ3BDO1FBRUQsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdELElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUMsZ0JBQWdCLEVB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dGFibGUsXHJcbiAgICBJbmplY3RvclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50UG9ydGFsLFxyXG4gICAgUG9ydGFsSW5qZWN0b3JcclxufSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgVG9hc3RSZWYgfSBmcm9tICcuLi9jbGFzc2VzL3RvYXN0LXJlZic7XHJcbmltcG9ydCB7XHJcbiAgICBERUZBVUxUX01BUkdJTixcclxuICAgIGRlZmF1bHRUb2FzdENvbmZpZyxcclxuICAgIFRvYXN0Q29uZmlnXHJcbn0gZnJvbSAnLi4vY2xhc3Nlcy90b2FzdC1jb25maWcnO1xyXG5pbXBvcnQgeyBVbWJyYVRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdW1icmEtdG9hc3QvdW1icmEtdG9hc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgaXNEZWZBbmROb3ROdWxsIH0gZnJvbSAnLi4vY2xhc3Nlcy9jb21tb24tZnVuY3Rpb25zJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVtYnJhVG9hc3RTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgb3BlblRvcFRvYXN0czogQXJyYXk8VG9hc3RSZWY+ID0gW107XHJcbiAgICBwcml2YXRlIG9wZW5Cb3R0b21Ub2FzdHM6IEFycmF5PFRvYXN0UmVmPiA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFyZW50SW5qZWN0b3I6IEluamVjdG9yKSB7fVxyXG5cclxuICAgIHNob3dUb2FzdCh0b2FzdENvbmZpZzogVG9hc3RDb25maWcpIHtcclxuICAgICAgICBpZiAodG9hc3RDb25maWcgPT09IG51bGwgfHwgdG9hc3RDb25maWcgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0b2FzdENvbmZpZyA9IGRlZmF1bHRUb2FzdENvbmZpZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG92ZXJsYXlQb3NpdGlvbiA9IHRoaXMuZ2V0T3ZlcmxheVBvc2l0aW9uKHRvYXN0Q29uZmlnKTtcclxuICAgICAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh7cG9zaXRpb25TdHJhdGVneTogb3ZlcmxheVBvc2l0aW9ufSk7XHJcbiAgICAgICAgY29uc3QgdG9hc3RSZWYgPSBuZXcgVG9hc3RSZWYob3ZlcmxheVJlZik7XHJcblxyXG4gICAgICAgIGlmICh0b2FzdENvbmZpZy52ZXJ0aWNhbFBvc2l0aW9uID09PSAndG9wJykge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5Ub3BUb2FzdHMucHVzaCh0b2FzdFJlZik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodG9hc3RDb25maWcudmVydGljYWxQb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuQm90dG9tVG9hc3RzLnB1c2godG9hc3RSZWYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW5qZWN0b3IgPSB0aGlzLmdldEluamVjdG9yKHRvYXN0Q29uZmlnLCB0b2FzdFJlZixcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRJbmplY3Rvcik7XHJcbiAgICAgICAgY29uc3QgdG9hc3RQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKFVtYnJhVG9hc3RDb21wb25lbnQsIG51bGwsIGluamVjdG9yKTtcclxuXHJcbiAgICAgICAgb3ZlcmxheVJlZi5hdHRhY2godG9hc3RQb3J0YWwpO1xyXG5cclxuICAgICAgICByZXR1cm4gdG9hc3RSZWY7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VUb2FzdCh0b2FzdFJlZjogVG9hc3RSZWYpIHtcclxuICAgICAgICB0aGlzLm9wZW5Ub3BUb2FzdHMgPSB0aGlzLm9wZW5Ub3BUb2FzdHMuZmlsdGVyKChvcGVuVG9hc3Q6IFRvYXN0UmVmKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcGVuVG9hc3QgIT09IHRvYXN0UmVmKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3BlblRvYXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vcGVuQm90dG9tVG9hc3RzID0gdGhpcy5vcGVuQm90dG9tVG9hc3RzLmZpbHRlcigob3BlblRvYXN0OiBUb2FzdFJlZikgPT4ge1xyXG4gICAgICAgICAgICBpZiAob3BlblRvYXN0ICE9PSB0b2FzdFJlZikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wZW5Ub2FzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRvYXN0UmVmLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VBbGxUb2FzdHMoKSB7XHJcbiAgICAgICAgWy4uLnRoaXMub3BlblRvcFRvYXN0cywgLi4udGhpcy5vcGVuQm90dG9tVG9hc3RzXS5mb3JFYWNoKCh0b2FzdFJlZjogVG9hc3RSZWYpID0+IHtcclxuICAgICAgICAgICAgdG9hc3RSZWYuY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9wZW5Cb3R0b21Ub2FzdHMgPSBbXTtcclxuICAgICAgICB0aGlzLm9wZW5Ub3BUb2FzdHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEluamVjdG9yKGRhdGE6IFRvYXN0Q29uZmlnLCB0b2FzdFJlZjogVG9hc3RSZWYsIHBhcmVudEluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gICAgICAgIGNvbnN0IHRva2VucyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICAgICAgdG9rZW5zLnNldChUb2FzdENvbmZpZywgZGF0YSk7XHJcbiAgICAgICAgdG9rZW5zLnNldChUb2FzdFJlZiwgdG9hc3RSZWYpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUG9ydGFsSW5qZWN0b3IocGFyZW50SW5qZWN0b3IsIHRva2Vucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRPdmVybGF5UG9zaXRpb24odG9hc3RDb25maWc6IFRvYXN0Q29uZmlnKSB7XHJcbiAgICAgICAgY29uc3Qgb3ZlcmxheVBvc2l0aW9uID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKCkuZ2xvYmFsKCk7XHJcbiAgICAgICAgaWYgKHRvYXN0Q29uZmlnLnZlcnRpY2FsUG9zaXRpb24gPT09ICdjZW50ZXInKSB7XHJcbiAgICAgICAgICAgIG92ZXJsYXlQb3NpdGlvbi5jZW50ZXJWZXJ0aWNhbGx5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRvYXN0Q29uZmlnLnZlcnRpY2FsUG9zaXRpb24gPT09ICd0b3AnKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGFzdFRvcFRvYXN0SGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgIGxldCBsYXN0VG9wVG9hc3Q6IFRvYXN0UmVmO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3BlblRvcFRvYXN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFRvcFRvYXN0ID0gdGhpcy5vcGVuVG9wVG9hc3RzW3RoaXMub3BlblRvcFRvYXN0cy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpc0RlZkFuZE5vdE51bGwobGFzdFRvcFRvYXN0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RUb3BUb2FzdEhlaWdodCA9IGxhc3RUb3BUb2FzdC5nZXRQb3NpdGlvbigpLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBjYWxjdWxhdGVkUG9zaXRpb246IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIGlmICh0b2FzdENvbmZpZy5wb3NpdGlvbi50b3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVkUG9zaXRpb24gPSAodGhpcy5vcGVuVG9wVG9hc3RzLmxlbmd0aCAqIGxhc3RUb3BUb2FzdEhlaWdodCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdENvbmZpZy5wb3NpdGlvbi50b3A7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZWRQb3NpdGlvbiA9ICh0aGlzLm9wZW5Ub3BUb2FzdHMubGVuZ3RoICogbGFzdFRvcFRvYXN0SGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG92ZXJsYXlQb3NpdGlvbi50b3AoY2FsY3VsYXRlZFBvc2l0aW9uICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0b2FzdENvbmZpZy52ZXJ0aWNhbFBvc2l0aW9uID09PSAnYm90dG9tJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhc3RCb3R0b21Ub2FzdEhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGFzdEJvdHRvbVRvYXN0OiBUb2FzdFJlZjtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wZW5Cb3R0b21Ub2FzdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RCb3R0b21Ub2FzdCA9IHRoaXMub3BlbkJvdHRvbVRvYXN0c1t0aGlzLm9wZW5Cb3R0b21Ub2FzdHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNEZWZBbmROb3ROdWxsKGxhc3RCb3R0b21Ub2FzdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0Qm90dG9tVG9hc3RIZWlnaHQgPSBsYXN0Qm90dG9tVG9hc3QuZ2V0UG9zaXRpb24oKS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FsY3VsYXRlZFBvc2l0aW9uOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9hc3RDb25maWcucG9zaXRpb24uYm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRlZFBvc2l0aW9uID0gKHRoaXMub3BlbkJvdHRvbVRvYXN0cy5sZW5ndGggKiBsYXN0Qm90dG9tVG9hc3RIZWlnaHQpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RDb25maWcucG9zaXRpb24uYm90dG9tO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVkUG9zaXRpb24gPSAodGhpcy5vcGVuQm90dG9tVG9hc3RzLmxlbmd0aCAqIGxhc3RCb3R0b21Ub2FzdEhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5UG9zaXRpb24uYm90dG9tKGNhbGN1bGF0ZWRQb3NpdGlvbiArICdweCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodG9hc3RDb25maWcuaG9yaXpvbnRhbFBvc2l0aW9uID09PSAnY2VudGVyJykge1xyXG4gICAgICAgICAgICBvdmVybGF5UG9zaXRpb24uY2VudGVySG9yaXpvbnRhbGx5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRvYXN0Q29uZmlnLmhvcml6b250YWxQb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRvYXN0Q29uZmlnLnBvc2l0aW9uLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheVBvc2l0aW9uLnJpZ2h0KHRvYXN0Q29uZmlnLnBvc2l0aW9uLnJpZ2h0ICsgJ3B4Jyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXlQb3NpdGlvbi5yaWdodChERUZBVUxUX01BUkdJTiArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodG9hc3RDb25maWcuaG9yaXpvbnRhbFBvc2l0aW9uID09PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0b2FzdENvbmZpZy5wb3NpdGlvbi5sZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheVBvc2l0aW9uLmxlZnQodG9hc3RDb25maWcucG9zaXRpb24ubGVmdCArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5UG9zaXRpb24ubGVmdChERUZBVUxUX01BUkdJTiArICdweCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb3ZlcmxheVBvc2l0aW9uO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==