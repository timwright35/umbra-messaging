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
     * @param {?} toastData
     * @param {?=} toastConfig
     * @return {?}
     */
    showToast(toastData, toastConfig) {
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
        const injector = this.getInjector(toastData, toastRef, this.parentInjector);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW1icmEtdG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VtYnJhLW1lc3NhZ2luZy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2VydmljZXMvdW1icmEtdG9hc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFVBQVUsRUFDVixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxlQUFlLEVBQ2YsY0FBYyxFQUNmLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFDTCxrQkFBa0IsRUFFbEIsU0FBUyxFQUNWLE1BQU0seUJBQXlCLENBQUM7QUFFakMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7OztBQUs5RSxNQUFNLE9BQU8saUJBQWlCOzs7OztJQUk1QixZQUNZLE9BQWdCLEVBQ2hCLGNBQXdCO1FBRHhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsbUJBQWMsR0FBZCxjQUFjLENBQVU7SUFDakMsQ0FBQzs7Ozs7O0lBRUosU0FBUyxDQUFDLFNBQW9CLEVBQUUsV0FBa0M7UUFDaEUsSUFBSSxXQUFXLEtBQUssSUFBSSxJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQztTQUN2Qzs7Y0FFSyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUU7O2NBQzdDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLGdCQUFnQixFQUFFLENBQUM7O2NBRXRELFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUM7O2NBRW5DLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQzs7Y0FDckUsV0FBVyxHQUFHLElBQUksZUFBZSxDQUFDLG1CQUFtQixFQUFFLElBQUksRUFBRSxRQUFRLENBQUM7UUFFNUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUvQixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7YUFDekIsTUFBTSxFQUFFO2FBQ1IsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFFRCxXQUFXOztjQUNILGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7O2NBQ2pFLFFBQVEsR0FBRyxrQkFBa0I7WUFDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTTtZQUNyQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRztRQUVuQyxPQUFPLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7Ozs7OztJQUVELFdBQVcsQ0FBQyxJQUFlLEVBQUUsUUFBa0IsRUFBRSxjQUF3Qjs7Y0FDakUsTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFO1FBRTVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRS9CLE9BQU8sSUFBSSxjQUFjLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELENBQUM7OztZQXJERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFoQlEsT0FBTztZQUZkLFFBQVE7Ozs7Ozs7O0lBb0JSLHNDQUE0Qjs7Ozs7SUFDNUIsd0NBQTBDOzs7OztJQUd0QyxvQ0FBd0I7Ozs7O0lBQ3hCLDJDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0b3Jcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50UG9ydGFsLFxuICBQb3J0YWxJbmplY3RvclxufSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IFRvYXN0UmVmIH0gZnJvbSAnLi4vY2xhc3Nlcy90b2FzdC1yZWYnO1xuaW1wb3J0IHtcbiAgZGVmYXVsdFRvYXN0Q29uZmlnLFxuICBUT0FTVF9DT05GSUdfVE9LRU4sXG4gIFRvYXN0RGF0YVxufSBmcm9tICcuLi9jbGFzc2VzL3RvYXN0LWNvbmZpZyc7XG5pbXBvcnQgeyBUb2FzdENvbmZpZ0ludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdG9hc3QtY29uZmlnLmludGVyZmFjZSc7XG5pbXBvcnQgeyBVbWJyYVRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdW1icmEtdG9hc3QvdW1icmEtdG9hc3QuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVW1icmFUb2FzdFNlcnZpY2Uge1xuICBwcml2YXRlIGxhc3RUb2FzdDogVG9hc3RSZWY7XG4gIHByaXZhdGUgdG9hc3RDb25maWc6IFRvYXN0Q29uZmlnSW50ZXJmYWNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgICAgcHJpdmF0ZSBwYXJlbnRJbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIHNob3dUb2FzdCh0b2FzdERhdGE6IFRvYXN0RGF0YSwgdG9hc3RDb25maWc/OiBUb2FzdENvbmZpZ0ludGVyZmFjZSkge1xuICAgIGlmICh0b2FzdENvbmZpZyA9PT0gbnVsbCB8fCB0b2FzdENvbmZpZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnRvYXN0Q29uZmlnID0gZGVmYXVsdFRvYXN0Q29uZmlnO1xuICAgIH1cblxuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLmdldFBvc2l0aW9uU3RyYXRlZ3koKTtcbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh7IHBvc2l0aW9uU3RyYXRlZ3kgfSk7XG5cbiAgICBjb25zdCB0b2FzdFJlZiA9IG5ldyBUb2FzdFJlZihvdmVybGF5UmVmKTtcblxuICAgIGNvbnN0IGluamVjdG9yID0gdGhpcy5nZXRJbmplY3Rvcih0b2FzdERhdGEsIHRvYXN0UmVmLCB0aGlzLnBhcmVudEluamVjdG9yKTtcbiAgICBjb25zdCB0b2FzdFBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoVW1icmFUb2FzdENvbXBvbmVudCwgbnVsbCwgaW5qZWN0b3IpO1xuXG4gICAgb3ZlcmxheVJlZi5hdHRhY2godG9hc3RQb3J0YWwpO1xuXG4gICAgcmV0dXJuIHRvYXN0UmVmO1xuICB9XG5cbiAgZ2V0UG9zaXRpb25TdHJhdGVneSgpIHtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5LnBvc2l0aW9uKClcbiAgICAgICAgLmdsb2JhbCgpXG4gICAgICAgIC50b3AodGhpcy5nZXRQb3NpdGlvbigpKVxuICAgICAgICAucmlnaHQodGhpcy50b2FzdENvbmZpZy5wb3NpdGlvbi5yaWdodCArICdweCcpO1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgY29uc3QgbGFzdFRvYXN0SXNWaXNpYmxlID0gdGhpcy5sYXN0VG9hc3QgJiYgdGhpcy5sYXN0VG9hc3QuaXNWaXNpYmxlKCk7XG4gICAgY29uc3QgcG9zaXRpb24gPSBsYXN0VG9hc3RJc1Zpc2libGVcbiAgICAgICAgPyB0aGlzLmxhc3RUb2FzdC5nZXRQb3NpdGlvbigpLmJvdHRvbVxuICAgICAgICA6IHRoaXMudG9hc3RDb25maWcucG9zaXRpb24udG9wO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uICsgJ3B4JztcbiAgfVxuXG4gIGdldEluamVjdG9yKGRhdGE6IFRvYXN0RGF0YSwgdG9hc3RSZWY6IFRvYXN0UmVmLCBwYXJlbnRJbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBuZXcgV2Vha01hcCgpO1xuXG4gICAgdG9rZW5zLnNldChUb2FzdERhdGEsIGRhdGEpO1xuICAgIHRva2Vucy5zZXQoVG9hc3RSZWYsIHRvYXN0UmVmKTtcblxuICAgIHJldHVybiBuZXcgUG9ydGFsSW5qZWN0b3IocGFyZW50SW5qZWN0b3IsIHRva2Vucyk7XG4gIH1cbn1cbiJdfQ==