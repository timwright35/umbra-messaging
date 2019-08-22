/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ToastData } from '../shared/classes/toast-config';
import { ToastRef } from '../shared/classes/toast-ref';
import { toastAnimations } from '../shared/animations/toast-fade.animation';
var UmbraToastComponent = /** @class */ (function () {
    function UmbraToastComponent(data, ref) {
        this.data = data;
        this.ref = ref;
        this.animationState = 'default';
        this.iconType = data.type === 'success' ? 'done' : data.type;
    }
    /**
     * @return {?}
     */
    UmbraToastComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.intervalId = setTimeout((/**
         * @return {?}
         */
        function () { return _this.animationState = 'closing'; }), 5000);
    };
    /**
     * @return {?}
     */
    UmbraToastComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        clearTimeout(this.intervalId);
    };
    /**
     * @return {?}
     */
    UmbraToastComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.ref.close();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UmbraToastComponent.prototype.onFadeFinished = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var toState = event.toState;
        /** @type {?} */
        var isFadeOut = ((/** @type {?} */ (toState))) === 'closing';
        /** @type {?} */
        var itFinished = this.animationState === 'closing';
        if (isFadeOut && itFinished) {
            this.close();
        }
    };
    UmbraToastComponent.decorators = [
        { type: Component, args: [{
                    selector: 'umbra-messaging-toast',
                    template: "<div class=\"toast\">\n    <mat-icon>{{ iconType }}</mat-icon>\n    <div>{{ data.text }}</div>\n    <mat-icon (click)=\"close()\">close</mat-icon>\n</div>\n",
                    animations: [toastAnimations.fadeToast],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".toast{position:relative;display:-webkit-box;display:flex;justify-content:space-around;margin-bottom:20px;padding:10px 15px 10px 48px;width:290px;background:#fff;border-width:1px;border-style:solid;border-color:#ddd #d6d6d6 #cfcfcf;box-shadow:0 2px 4px rgba(0,0,0,.11)}"]
                }] }
    ];
    /** @nocollapse */
    UmbraToastComponent.ctorParameters = function () { return [
        { type: ToastData },
        { type: ToastRef }
    ]; };
    return UmbraToastComponent;
}());
export { UmbraToastComponent };
if (false) {
    /** @type {?} */
    UmbraToastComponent.prototype.animationState;
    /** @type {?} */
    UmbraToastComponent.prototype.iconType;
    /**
     * @type {?}
     * @private
     */
    UmbraToastComponent.prototype.intervalId;
    /** @type {?} */
    UmbraToastComponent.prototype.data;
    /** @type {?} */
    UmbraToastComponent.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW1icmEtdG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdW1icmEtbWVzc2FnaW5nLyIsInNvdXJjZXMiOlsibGliL3VtYnJhLXRvYXN0L3VtYnJhLXRvYXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCx1QkFBdUIsRUFHeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLFNBQVMsRUFDVixNQUFNLGdDQUFnQyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV2RCxPQUFPLEVBQ0wsZUFBZSxFQUVoQixNQUFNLDJDQUEyQyxDQUFDO0FBR25EO0lBYUUsNkJBQ2EsSUFBZSxFQUNmLEdBQWE7UUFEYixTQUFJLEdBQUosSUFBSSxDQUFXO1FBQ2YsUUFBRyxHQUFILEdBQUcsQ0FBVTtRQVAxQixtQkFBYyxHQUF3QixTQUFTLENBQUM7UUFTOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQy9ELENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxFQUEvQixDQUErQixHQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxtQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRUQsNENBQWM7Ozs7SUFBZCxVQUFlLEtBQXFCO1FBQzFCLElBQUEsdUJBQU87O1lBQ1QsU0FBUyxHQUFHLENBQUMsbUJBQUEsT0FBTyxFQUF1QixDQUFDLEtBQUssU0FBUzs7WUFDMUQsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLEtBQUssU0FBUztRQUVwRCxJQUFJLFNBQVMsSUFBSSxVQUFVLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDOztnQkF4Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLHdLQUEyQztvQkFFM0MsVUFBVSxFQUFFLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztvQkFDdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFoQkMsU0FBUztnQkFFRixRQUFROztJQWlEakIsMEJBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQWxDWSxtQkFBbUI7OztJQUM5Qiw2Q0FBZ0Q7O0lBQ2hELHVDQUFpQjs7Ozs7SUFFakIseUNBQTJCOztJQUd2QixtQ0FBd0I7O0lBQ3hCLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSW5qZWN0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBUT0FTVF9DT05GSUdfVE9LRU4sXG4gIFRvYXN0RGF0YVxufSBmcm9tICcuLi9zaGFyZWQvY2xhc3Nlcy90b2FzdC1jb25maWcnO1xuaW1wb3J0IHsgVG9hc3RSZWYgfSBmcm9tICcuLi9zaGFyZWQvY2xhc3Nlcy90b2FzdC1yZWYnO1xuaW1wb3J0IHsgVG9hc3RDb25maWdJbnRlcmZhY2UgfSBmcm9tICcuLi9zaGFyZWQvaW50ZXJmYWNlcy90b2FzdC1jb25maWcuaW50ZXJmYWNlJztcbmltcG9ydCB7XG4gIHRvYXN0QW5pbWF0aW9ucyxcbiAgVG9hc3RBbmltYXRpb25TdGF0ZVxufSBmcm9tICcuLi9zaGFyZWQvYW5pbWF0aW9ucy90b2FzdC1mYWRlLmFuaW1hdGlvbic7XG5pbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1bWJyYS1tZXNzYWdpbmctdG9hc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdW1icmEtdG9hc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91bWJyYS10b2FzdC5jb21wb25lbnQuY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFt0b2FzdEFuaW1hdGlvbnMuZmFkZVRvYXN0XSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVW1icmFUb2FzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgYW5pbWF0aW9uU3RhdGU6IFRvYXN0QW5pbWF0aW9uU3RhdGUgPSAnZGVmYXVsdCc7XG4gIGljb25UeXBlOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBpbnRlcnZhbElkOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICByZWFkb25seSBkYXRhOiBUb2FzdERhdGEsXG4gICAgICByZWFkb25seSByZWY6IFRvYXN0UmVmXG4gICkge1xuICAgIHRoaXMuaWNvblR5cGUgPSBkYXRhLnR5cGUgPT09ICdzdWNjZXNzJyA/ICdkb25lJyA6IGRhdGEudHlwZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hbmltYXRpb25TdGF0ZSA9ICdjbG9zaW5nJywgNTAwMCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5pbnRlcnZhbElkKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMucmVmLmNsb3NlKCk7XG4gIH1cblxuICBvbkZhZGVGaW5pc2hlZChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICBjb25zdCB7IHRvU3RhdGUgfSA9IGV2ZW50O1xuICAgIGNvbnN0IGlzRmFkZU91dCA9ICh0b1N0YXRlIGFzIFRvYXN0QW5pbWF0aW9uU3RhdGUpID09PSAnY2xvc2luZyc7XG4gICAgY29uc3QgaXRGaW5pc2hlZCA9IHRoaXMuYW5pbWF0aW9uU3RhdGUgPT09ICdjbG9zaW5nJztcblxuICAgIGlmIChpc0ZhZGVPdXQgJiYgaXRGaW5pc2hlZCkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxufVxuIl19