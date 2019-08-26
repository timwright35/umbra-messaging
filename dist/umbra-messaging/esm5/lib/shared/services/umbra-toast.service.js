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
     * @param {?} toastConfig
     * @return {?}
     */
    UmbraToastService.prototype.showToast = /**
     * @param {?} toastConfig
     * @return {?}
     */
    function (toastConfig) {
        console.log('Config', toastConfig);
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
        var injector = this.getInjector(toastConfig.toastData, toastRef, this.parentInjector);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW1icmEtdG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VtYnJhLW1lc3NhZ2luZy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2VydmljZXMvdW1icmEtdG9hc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVILFVBQVUsRUFDVixRQUFRLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFDSCxlQUFlLEVBQ2YsY0FBYyxFQUNqQixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQ0gsa0JBQWtCLEVBQ2xCLFNBQVMsRUFDWixNQUFNLHlCQUF5QixDQUFDO0FBRWpDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7QUFFOUU7SUFPSSwyQkFDWSxPQUFnQixFQUNoQixjQUF3QjtRQUR4QixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLG1CQUFjLEdBQWQsY0FBYyxDQUFVO0lBQ2pDLENBQUM7Ozs7O0lBRUoscUNBQVM7Ozs7SUFBVCxVQUFVLFdBQWlDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ25DLElBQUksV0FBVyxLQUFLLElBQUksSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUM7U0FDekM7O1lBRUssZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFOztZQUM3QyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBQyxnQkFBZ0Isa0JBQUEsRUFBQyxDQUFDOztZQUVwRCxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDOztZQUVuQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFDN0QsSUFBSSxDQUFDLGNBQWMsQ0FBQzs7WUFDbEIsV0FBVyxHQUFHLElBQUksZUFBZSxDQUFDLG1CQUFtQixFQUFFLElBQUksRUFBRSxRQUFRLENBQUM7UUFFNUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUvQixPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsK0NBQW1COzs7SUFBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO2FBQ3pCLE1BQU0sRUFBRTthQUNSLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYOztZQUNVLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7O1lBQ2pFLFFBQVEsR0FBRyxrQkFBa0I7WUFDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTTtZQUNyQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRztRQUVuQyxPQUFPLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQzs7Ozs7OztJQUVELHVDQUFXOzs7Ozs7SUFBWCxVQUFZLElBQWUsRUFBRSxRQUFrQixFQUFFLGNBQXdCOztZQUMvRCxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7UUFFNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFL0IsT0FBTyxJQUFJLGNBQWMsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Z0JBdkRKLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7Ozs7Z0JBZlEsT0FBTztnQkFGWixRQUFROzs7NEJBSFo7Q0EwRUMsQUF4REQsSUF3REM7U0FyRFksaUJBQWlCOzs7Ozs7SUFDMUIsc0NBQTRCOzs7OztJQUM1Qix3Q0FBMEM7Ozs7O0lBR3RDLG9DQUF3Qjs7Ozs7SUFDeEIsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIEluamVjdCxcclxuICAgIEluamVjdGFibGUsXHJcbiAgICBJbmplY3RvclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gICAgQ29tcG9uZW50UG9ydGFsLFxyXG4gICAgUG9ydGFsSW5qZWN0b3JcclxufSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgVG9hc3RSZWYgfSBmcm9tICcuLi9jbGFzc2VzL3RvYXN0LXJlZic7XHJcbmltcG9ydCB7XHJcbiAgICBkZWZhdWx0VG9hc3RDb25maWcsXHJcbiAgICBUb2FzdERhdGFcclxufSBmcm9tICcuLi9jbGFzc2VzL3RvYXN0LWNvbmZpZyc7XHJcbmltcG9ydCB7IFRvYXN0Q29uZmlnSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90b2FzdC1jb25maWcuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVW1icmFUb2FzdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL3VtYnJhLXRvYXN0L3VtYnJhLXRvYXN0LmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFVtYnJhVG9hc3RTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbGFzdFRvYXN0OiBUb2FzdFJlZjtcclxuICAgIHByaXZhdGUgdG9hc3RDb25maWc6IFRvYXN0Q29uZmlnSW50ZXJmYWNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgICAgICBwcml2YXRlIHBhcmVudEluamVjdG9yOiBJbmplY3RvclxyXG4gICAgKSB7fVxyXG5cclxuICAgIHNob3dUb2FzdCh0b2FzdENvbmZpZzogVG9hc3RDb25maWdJbnRlcmZhY2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ29uZmlnJywgdG9hc3RDb25maWcpO1xyXG4gICAgICAgIGlmICh0b2FzdENvbmZpZyA9PT0gbnVsbCB8fCB0b2FzdENvbmZpZyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9hc3RDb25maWcgPSBkZWZhdWx0VG9hc3RDb25maWc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5nZXRQb3NpdGlvblN0cmF0ZWd5KCk7XHJcbiAgICAgICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe3Bvc2l0aW9uU3RyYXRlZ3l9KTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9hc3RSZWYgPSBuZXcgVG9hc3RSZWYob3ZlcmxheVJlZik7XHJcblxyXG4gICAgICAgIGNvbnN0IGluamVjdG9yID0gdGhpcy5nZXRJbmplY3Rvcih0b2FzdENvbmZpZy50b2FzdERhdGEsIHRvYXN0UmVmLFxyXG4gICAgICAgICAgICB0aGlzLnBhcmVudEluamVjdG9yKTtcclxuICAgICAgICBjb25zdCB0b2FzdFBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoVW1icmFUb2FzdENvbXBvbmVudCwgbnVsbCwgaW5qZWN0b3IpO1xyXG5cclxuICAgICAgICBvdmVybGF5UmVmLmF0dGFjaCh0b2FzdFBvcnRhbCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0b2FzdFJlZjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb3NpdGlvblN0cmF0ZWd5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm92ZXJsYXkucG9zaXRpb24oKVxyXG4gICAgICAgICAgICAuZ2xvYmFsKClcclxuICAgICAgICAgICAgLnRvcCh0aGlzLmdldFBvc2l0aW9uKCkpXHJcbiAgICAgICAgICAgIC5yaWdodCh0aGlzLnRvYXN0Q29uZmlnLnBvc2l0aW9uLnJpZ2h0ICsgJ3B4Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9zaXRpb24oKSB7XHJcbiAgICAgICAgY29uc3QgbGFzdFRvYXN0SXNWaXNpYmxlID0gdGhpcy5sYXN0VG9hc3QgJiYgdGhpcy5sYXN0VG9hc3QuaXNWaXNpYmxlKCk7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBsYXN0VG9hc3RJc1Zpc2libGVcclxuICAgICAgICAgICAgPyB0aGlzLmxhc3RUb2FzdC5nZXRQb3NpdGlvbigpLmJvdHRvbVxyXG4gICAgICAgICAgICA6IHRoaXMudG9hc3RDb25maWcucG9zaXRpb24udG9wO1xyXG5cclxuICAgICAgICByZXR1cm4gcG9zaXRpb24gKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluamVjdG9yKGRhdGE6IFRvYXN0RGF0YSwgdG9hc3RSZWY6IFRvYXN0UmVmLCBwYXJlbnRJbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgICAgICBjb25zdCB0b2tlbnMgPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuICAgICAgICB0b2tlbnMuc2V0KFRvYXN0RGF0YSwgZGF0YSk7XHJcbiAgICAgICAgdG9rZW5zLnNldChUb2FzdFJlZiwgdG9hc3RSZWYpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFBvcnRhbEluamVjdG9yKHBhcmVudEluamVjdG9yLCB0b2tlbnMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==