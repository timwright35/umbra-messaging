/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ToastRef } from '../classes/toast-ref';
import { defaultToastConfig, ToastData } from '../classes/toast-config';
import { UmbraToastComponent } from '../../umbra-toast/umbra-toast.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class UmbraToastService {
    /**
     * @param {?} overlay
     * @param {?} parentInjector
     */
    constructor(overlay, parentInjector) {
        this.overlay = overlay;
        this.parentInjector = parentInjector;
    }
    /**
     * @param {?} toastConfig
     * @return {?}
     */
    showToast(toastConfig) {
        console.log('Config', toastConfig);
        if (toastConfig === null || toastConfig === undefined) {
            this.toastConfig = defaultToastConfig;
        }
        /** @type {?} */
        const positionStrategy = this.getPositionStrategy();
        /** @type {?} */
        const overlayRef = this.overlay.create({ positionStrategy });
        /** @type {?} */
        const toastRef = new ToastRef(overlayRef);
        /** @type {?} */
        const injector = this.getInjector(toastConfig.toastData, toastRef, this.parentInjector);
        /** @type {?} */
        const toastPortal = new ComponentPortal(UmbraToastComponent, null, injector);
        overlayRef.attach(toastPortal);
        return toastRef;
    }
    /**
     * @return {?}
     */
    getPositionStrategy() {
        return this.overlay.position()
            .global()
            .top(this.getPosition())
            .right(this.toastConfig.position.right + 'px');
    }
    /**
     * @return {?}
     */
    getPosition() {
        /** @type {?} */
        const lastToastIsVisible = this.lastToast && this.lastToast.isVisible();
        /** @type {?} */
        const position = lastToastIsVisible
            ? this.lastToast.getPosition().bottom
            : this.toastConfig.position.top;
        return position + 'px';
    }
    /**
     * @param {?} data
     * @param {?} toastRef
     * @param {?} parentInjector
     * @return {?}
     */
    getInjector(data, toastRef, parentInjector) {
        /** @type {?} */
        const tokens = new WeakMap();
        tokens.set(ToastData, data);
        tokens.set(ToastRef, toastRef);
        return new PortalInjector(parentInjector, tokens);
    }
}
UmbraToastService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UmbraToastService.ctorParameters = () => [
    { type: Overlay },
    { type: Injector }
];
/** @nocollapse */ UmbraToastService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UmbraToastService_Factory() { return new UmbraToastService(i0.ɵɵinject(i1.Overlay), i0.ɵɵinject(i0.INJECTOR)); }, token: UmbraToastService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    UmbraToastService.prototype.lastToast;
    /**
     * @type {?}
     * @private
     */
    UmbraToastService.prototype.toastConfig;
    /**
     * @type {?}
     * @private
     */
    UmbraToastService.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    UmbraToastService.prototype.parentInjector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW1icmEtdG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VtYnJhLW1lc3NhZ2luZy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2VydmljZXMvdW1icmEtdG9hc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVILFVBQVUsRUFDVixRQUFRLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFDSCxlQUFlLEVBQ2YsY0FBYyxFQUNqQixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQ0gsa0JBQWtCLEVBQ2xCLFNBQVMsRUFDWixNQUFNLHlCQUF5QixDQUFDO0FBRWpDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7QUFLOUUsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFJMUIsWUFDWSxPQUFnQixFQUNoQixjQUF3QjtRQUR4QixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLG1CQUFjLEdBQWQsY0FBYyxDQUFVO0lBQ2pDLENBQUM7Ozs7O0lBRUosU0FBUyxDQUFDLFdBQWlDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ25DLElBQUksV0FBVyxLQUFLLElBQUksSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUM7U0FDekM7O2NBRUssZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFOztjQUM3QyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDOztjQUVwRCxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDOztjQUVuQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFDN0QsSUFBSSxDQUFDLGNBQWMsQ0FBQzs7Y0FDbEIsV0FBVyxHQUFHLElBQUksZUFBZSxDQUFDLG1CQUFtQixFQUFFLElBQUksRUFBRSxRQUFRLENBQUM7UUFFNUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUvQixPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTthQUN6QixNQUFNLEVBQUU7YUFDUixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELFdBQVc7O2NBQ0Qsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTs7Y0FDakUsUUFBUSxHQUFHLGtCQUFrQjtZQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNO1lBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHO1FBRW5DLE9BQU8sUUFBUSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDOzs7Ozs7O0lBRUQsV0FBVyxDQUFDLElBQWUsRUFBRSxRQUFrQixFQUFFLGNBQXdCOztjQUMvRCxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7UUFFNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFL0IsT0FBTyxJQUFJLGNBQWMsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7O1lBdkRKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7OztZQWZRLE9BQU87WUFGWixRQUFROzs7Ozs7OztJQW1CUixzQ0FBNEI7Ozs7O0lBQzVCLHdDQUEwQzs7Ozs7SUFHdEMsb0NBQXdCOzs7OztJQUN4QiwyQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgSW5qZWN0LFxyXG4gICAgSW5qZWN0YWJsZSxcclxuICAgIEluamVjdG9yXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7XHJcbiAgICBDb21wb25lbnRQb3J0YWwsXHJcbiAgICBQb3J0YWxJbmplY3RvclxyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBUb2FzdFJlZiB9IGZyb20gJy4uL2NsYXNzZXMvdG9hc3QtcmVmJztcclxuaW1wb3J0IHtcclxuICAgIGRlZmF1bHRUb2FzdENvbmZpZyxcclxuICAgIFRvYXN0RGF0YVxyXG59IGZyb20gJy4uL2NsYXNzZXMvdG9hc3QtY29uZmlnJztcclxuaW1wb3J0IHsgVG9hc3RDb25maWdJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3RvYXN0LWNvbmZpZy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBVbWJyYVRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdW1icmEtdG9hc3QvdW1icmEtdG9hc3QuY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVW1icmFUb2FzdFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBsYXN0VG9hc3Q6IFRvYXN0UmVmO1xyXG4gICAgcHJpdmF0ZSB0b2FzdENvbmZpZzogVG9hc3RDb25maWdJbnRlcmZhY2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgICAgIHByaXZhdGUgcGFyZW50SW5qZWN0b3I6IEluamVjdG9yXHJcbiAgICApIHt9XHJcblxyXG4gICAgc2hvd1RvYXN0KHRvYXN0Q29uZmlnOiBUb2FzdENvbmZpZ0ludGVyZmFjZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDb25maWcnLCB0b2FzdENvbmZpZyk7XHJcbiAgICAgICAgaWYgKHRvYXN0Q29uZmlnID09PSBudWxsIHx8IHRvYXN0Q29uZmlnID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy50b2FzdENvbmZpZyA9IGRlZmF1bHRUb2FzdENvbmZpZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLmdldFBvc2l0aW9uU3RyYXRlZ3koKTtcclxuICAgICAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh7cG9zaXRpb25TdHJhdGVneX0pO1xyXG5cclxuICAgICAgICBjb25zdCB0b2FzdFJlZiA9IG5ldyBUb2FzdFJlZihvdmVybGF5UmVmKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5qZWN0b3IgPSB0aGlzLmdldEluamVjdG9yKHRvYXN0Q29uZmlnLnRvYXN0RGF0YSwgdG9hc3RSZWYsXHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50SW5qZWN0b3IpO1xyXG4gICAgICAgIGNvbnN0IHRvYXN0UG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChVbWJyYVRvYXN0Q29tcG9uZW50LCBudWxsLCBpbmplY3Rvcik7XHJcblxyXG4gICAgICAgIG92ZXJsYXlSZWYuYXR0YWNoKHRvYXN0UG9ydGFsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRvYXN0UmVmO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvc2l0aW9uU3RyYXRlZ3koKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheS5wb3NpdGlvbigpXHJcbiAgICAgICAgICAgIC5nbG9iYWwoKVxyXG4gICAgICAgICAgICAudG9wKHRoaXMuZ2V0UG9zaXRpb24oKSlcclxuICAgICAgICAgICAgLnJpZ2h0KHRoaXMudG9hc3RDb25maWcucG9zaXRpb24ucmlnaHQgKyAncHgnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb3NpdGlvbigpIHtcclxuICAgICAgICBjb25zdCBsYXN0VG9hc3RJc1Zpc2libGUgPSB0aGlzLmxhc3RUb2FzdCAmJiB0aGlzLmxhc3RUb2FzdC5pc1Zpc2libGUoKTtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGxhc3RUb2FzdElzVmlzaWJsZVxyXG4gICAgICAgICAgICA/IHRoaXMubGFzdFRvYXN0LmdldFBvc2l0aW9uKCkuYm90dG9tXHJcbiAgICAgICAgICAgIDogdGhpcy50b2FzdENvbmZpZy5wb3NpdGlvbi50b3A7XHJcblxyXG4gICAgICAgIHJldHVybiBwb3NpdGlvbiArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5qZWN0b3IoZGF0YTogVG9hc3REYXRhLCB0b2FzdFJlZjogVG9hc3RSZWYsIHBhcmVudEluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gICAgICAgIGNvbnN0IHRva2VucyA9IG5ldyBXZWFrTWFwKCk7XHJcblxyXG4gICAgICAgIHRva2Vucy5zZXQoVG9hc3REYXRhLCBkYXRhKTtcclxuICAgICAgICB0b2tlbnMuc2V0KFRvYXN0UmVmLCB0b2FzdFJlZik7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUG9ydGFsSW5qZWN0b3IocGFyZW50SW5qZWN0b3IsIHRva2Vucyk7XHJcbiAgICB9XHJcbn1cclxuIl19