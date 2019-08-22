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
var UmbraToastService = /** @class */ (function () {
    function UmbraToastService(overlay, parentInjector) {
        this.overlay = overlay;
        this.parentInjector = parentInjector;
    }
    /**
     * @param {?} toastData
     * @param {?=} toastConfig
     * @return {?}
     */
    UmbraToastService.prototype.showToast = /**
     * @param {?} toastData
     * @param {?=} toastConfig
     * @return {?}
     */
    function (toastData, toastConfig) {
        if (toastConfig === null || toastConfig === undefined) {
            this.toastConfig = defaultToastConfig;
        }
        /** @type {?} */
        var positionStrategy = this.getPositionStrategy();
        /** @type {?} */
        var overlayRef = this.overlay.create({ positionStrategy: positionStrategy });
        /** @type {?} */
        var toastRef = new ToastRef(overlayRef);
        /** @type {?} */
        var injector = this.getInjector(toastData, toastRef, this.parentInjector);
        /** @type {?} */
        var toastPortal = new ComponentPortal(UmbraToastComponent, null, injector);
        overlayRef.attach(toastPortal);
        return toastRef;
    };
    /**
     * @return {?}
     */
    UmbraToastService.prototype.getPositionStrategy = /**
     * @return {?}
     */
    function () {
        return this.overlay.position()
            .global()
            .top(this.getPosition())
            .right(this.toastConfig.position.right + 'px');
    };
    /**
     * @return {?}
     */
    UmbraToastService.prototype.getPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var lastToastIsVisible = this.lastToast && this.lastToast.isVisible();
        /** @type {?} */
        var position = lastToastIsVisible
            ? this.lastToast.getPosition().bottom
            : this.toastConfig.position.top;
        return position + 'px';
    };
    /**
     * @param {?} data
     * @param {?} toastRef
     * @param {?} parentInjector
     * @return {?}
     */
    UmbraToastService.prototype.getInjector = /**
     * @param {?} data
     * @param {?} toastRef
     * @param {?} parentInjector
     * @return {?}
     */
    function (data, toastRef, parentInjector) {
        /** @type {?} */
        var tokens = new WeakMap();
        tokens.set(ToastData, data);
        tokens.set(ToastRef, toastRef);
        return new PortalInjector(parentInjector, tokens);
    };
    UmbraToastService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UmbraToastService.ctorParameters = function () { return [
        { type: Overlay },
        { type: Injector }
    ]; };
    /** @nocollapse */ UmbraToastService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UmbraToastService_Factory() { return new UmbraToastService(i0.ɵɵinject(i1.Overlay), i0.ɵɵinject(i0.INJECTOR)); }, token: UmbraToastService, providedIn: "root" });
    return UmbraToastService;
}());
export { UmbraToastService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW1icmEtdG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VtYnJhLW1lc3NhZ2luZy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2VydmljZXMvdW1icmEtdG9hc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFVBQVUsRUFDVixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxlQUFlLEVBQ2YsY0FBYyxFQUNmLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFDTCxrQkFBa0IsRUFFbEIsU0FBUyxFQUNWLE1BQU0seUJBQXlCLENBQUM7QUFFakMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7OztBQUU5RTtJQU9FLDJCQUNZLE9BQWdCLEVBQ2hCLGNBQXdCO1FBRHhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsbUJBQWMsR0FBZCxjQUFjLENBQVU7SUFDakMsQ0FBQzs7Ozs7O0lBRUoscUNBQVM7Ozs7O0lBQVQsVUFBVSxTQUFvQixFQUFFLFdBQWtDO1FBQ2hFLElBQUksV0FBVyxLQUFLLElBQUksSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUM7U0FDdkM7O1lBRUssZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFOztZQUM3QyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxnQkFBZ0Isa0JBQUEsRUFBRSxDQUFDOztZQUV0RCxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDOztZQUVuQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUM7O1lBQ3JFLFdBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDO1FBRTVFLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFL0IsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELCtDQUFtQjs7O0lBQW5CO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTthQUN6QixNQUFNLEVBQUU7YUFDUixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7OztJQUVELHVDQUFXOzs7SUFBWDs7WUFDUSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFOztZQUNqRSxRQUFRLEdBQUcsa0JBQWtCO1lBQy9CLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU07WUFDckMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUc7UUFFbkMsT0FBTyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7Ozs7Ozs7SUFFRCx1Q0FBVzs7Ozs7O0lBQVgsVUFBWSxJQUFlLEVBQUUsUUFBa0IsRUFBRSxjQUF3Qjs7WUFDakUsTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFO1FBRTVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRS9CLE9BQU8sSUFBSSxjQUFjLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELENBQUM7O2dCQXJERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWhCUSxPQUFPO2dCQUZkLFFBQVE7Ozs0QkFIVjtDQXlFQyxBQXRERCxJQXNEQztTQW5EWSxpQkFBaUI7Ozs7OztJQUM1QixzQ0FBNEI7Ozs7O0lBQzVCLHdDQUEwQzs7Ozs7SUFHdEMsb0NBQXdCOzs7OztJQUN4QiwyQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7XG4gIENvbXBvbmVudFBvcnRhbCxcbiAgUG9ydGFsSW5qZWN0b3Jcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBUb2FzdFJlZiB9IGZyb20gJy4uL2NsYXNzZXMvdG9hc3QtcmVmJztcbmltcG9ydCB7XG4gIGRlZmF1bHRUb2FzdENvbmZpZyxcbiAgVE9BU1RfQ09ORklHX1RPS0VOLFxuICBUb2FzdERhdGFcbn0gZnJvbSAnLi4vY2xhc3Nlcy90b2FzdC1jb25maWcnO1xuaW1wb3J0IHsgVG9hc3RDb25maWdJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3RvYXN0LWNvbmZpZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVW1icmFUb2FzdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL3VtYnJhLXRvYXN0L3VtYnJhLXRvYXN0LmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVtYnJhVG9hc3RTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsYXN0VG9hc3Q6IFRvYXN0UmVmO1xuICBwcml2YXRlIHRvYXN0Q29uZmlnOiBUb2FzdENvbmZpZ0ludGVyZmFjZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcbiAgICAgIHByaXZhdGUgcGFyZW50SW5qZWN0b3I6IEluamVjdG9yXG4gICkge31cblxuICBzaG93VG9hc3QodG9hc3REYXRhOiBUb2FzdERhdGEsIHRvYXN0Q29uZmlnPzogVG9hc3RDb25maWdJbnRlcmZhY2UpIHtcbiAgICBpZiAodG9hc3RDb25maWcgPT09IG51bGwgfHwgdG9hc3RDb25maWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50b2FzdENvbmZpZyA9IGRlZmF1bHRUb2FzdENvbmZpZztcbiAgICB9XG5cbiAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5nZXRQb3NpdGlvblN0cmF0ZWd5KCk7XG4gICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoeyBwb3NpdGlvblN0cmF0ZWd5IH0pO1xuXG4gICAgY29uc3QgdG9hc3RSZWYgPSBuZXcgVG9hc3RSZWYob3ZlcmxheVJlZik7XG5cbiAgICBjb25zdCBpbmplY3RvciA9IHRoaXMuZ2V0SW5qZWN0b3IodG9hc3REYXRhLCB0b2FzdFJlZiwgdGhpcy5wYXJlbnRJbmplY3Rvcik7XG4gICAgY29uc3QgdG9hc3RQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKFVtYnJhVG9hc3RDb21wb25lbnQsIG51bGwsIGluamVjdG9yKTtcblxuICAgIG92ZXJsYXlSZWYuYXR0YWNoKHRvYXN0UG9ydGFsKTtcblxuICAgIHJldHVybiB0b2FzdFJlZjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uU3RyYXRlZ3koKSB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheS5wb3NpdGlvbigpXG4gICAgICAgIC5nbG9iYWwoKVxuICAgICAgICAudG9wKHRoaXMuZ2V0UG9zaXRpb24oKSlcbiAgICAgICAgLnJpZ2h0KHRoaXMudG9hc3RDb25maWcucG9zaXRpb24ucmlnaHQgKyAncHgnKTtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIGNvbnN0IGxhc3RUb2FzdElzVmlzaWJsZSA9IHRoaXMubGFzdFRvYXN0ICYmIHRoaXMubGFzdFRvYXN0LmlzVmlzaWJsZSgpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbGFzdFRvYXN0SXNWaXNpYmxlXG4gICAgICAgID8gdGhpcy5sYXN0VG9hc3QuZ2V0UG9zaXRpb24oKS5ib3R0b21cbiAgICAgICAgOiB0aGlzLnRvYXN0Q29uZmlnLnBvc2l0aW9uLnRvcDtcblxuICAgIHJldHVybiBwb3NpdGlvbiArICdweCc7XG4gIH1cblxuICBnZXRJbmplY3RvcihkYXRhOiBUb2FzdERhdGEsIHRvYXN0UmVmOiBUb2FzdFJlZiwgcGFyZW50SW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgY29uc3QgdG9rZW5zID0gbmV3IFdlYWtNYXAoKTtcblxuICAgIHRva2Vucy5zZXQoVG9hc3REYXRhLCBkYXRhKTtcbiAgICB0b2tlbnMuc2V0KFRvYXN0UmVmLCB0b2FzdFJlZik7XG5cbiAgICByZXR1cm4gbmV3IFBvcnRhbEluamVjdG9yKHBhcmVudEluamVjdG9yLCB0b2tlbnMpO1xuICB9XG59XG4iXX0=