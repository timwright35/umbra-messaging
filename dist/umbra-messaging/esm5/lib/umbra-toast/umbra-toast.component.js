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
                    template: "<div class=\"toast\" [class]=\"data.type\">\r\n    <div>{{ data.text }}</div>\r\n    <mat-icon (click)=\"close()\">close</mat-icon>\r\n</div>\r\n",
                    animations: [toastAnimations.fadeToast],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".toast{position:relative;display:-webkit-box;display:flex;justify-content:space-around;margin-bottom:20px;padding:10px 15px;width:200px;min-width:200px;background:#fff;border-width:1px;border-style:solid;border-color:#ddd #d6d6d6 #cfcfcf;box-shadow:0 2px 4px rgba(0,0,0,.11)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW1icmEtdG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdW1icmEtbWVzc2FnaW5nLyIsInNvdXJjZXMiOlsibGliL3VtYnJhLXRvYXN0L3VtYnJhLXRvYXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFFVCx1QkFBdUIsRUFFMUIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNILFNBQVMsRUFDWixNQUFNLGdDQUFnQyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RCxPQUFPLEVBQ0gsZUFBZSxFQUVsQixNQUFNLDJDQUEyQyxDQUFDO0FBR25EO0lBYUksNkJBQ2EsSUFBZSxFQUNmLEdBQWE7UUFEYixTQUFJLEdBQUosSUFBSSxDQUFXO1FBQ2YsUUFBRyxHQUFILEdBQUcsQ0FBVTtRQVAxQixtQkFBYyxHQUF3QixTQUFTLENBQUM7UUFTNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFBQSxpQkFFQztRQURHLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxFQUEvQixDQUErQixHQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDSSxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxtQ0FBSzs7O0lBQUw7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsNENBQWM7Ozs7SUFBZCxVQUFlLEtBQXFCO1FBQ3pCLElBQUEsdUJBQU87O1lBQ1IsU0FBUyxHQUFHLENBQUMsbUJBQUEsT0FBTyxFQUF1QixDQUFDLEtBQUssU0FBUzs7WUFDMUQsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLEtBQUssU0FBUztRQUVwRCxJQUFJLFNBQVMsSUFBSSxVQUFVLEVBQUU7WUFDekIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQzs7Z0JBeENKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyw2SkFBMkM7b0JBRTNDLFVBQVUsRUFBRSxDQUFFLGVBQWUsQ0FBQyxTQUFTLENBQUU7b0JBQ3pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDbEQ7Ozs7Z0JBZkcsU0FBUztnQkFFSixRQUFROztJQWdEakIsMEJBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQWxDWSxtQkFBbUI7OztJQUM1Qiw2Q0FBZ0Q7O0lBQ2hELHVDQUFpQjs7Ozs7SUFFakIseUNBQTJCOztJQUd2QixtQ0FBd0I7O0lBQ3hCLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBPbkluaXQsXHJcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICAgIE9uRGVzdHJveVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gICAgVG9hc3REYXRhXHJcbn0gZnJvbSAnLi4vc2hhcmVkL2NsYXNzZXMvdG9hc3QtY29uZmlnJztcclxuaW1wb3J0IHsgVG9hc3RSZWYgfSBmcm9tICcuLi9zaGFyZWQvY2xhc3Nlcy90b2FzdC1yZWYnO1xyXG5pbXBvcnQge1xyXG4gICAgdG9hc3RBbmltYXRpb25zLFxyXG4gICAgVG9hc3RBbmltYXRpb25TdGF0ZVxyXG59IGZyb20gJy4uL3NoYXJlZC9hbmltYXRpb25zL3RvYXN0LWZhZGUuYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1bWJyYS1tZXNzYWdpbmctdG9hc3QnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3VtYnJhLXRvYXN0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWyAnLi91bWJyYS10b2FzdC5jb21wb25lbnQuY3NzJyBdLFxyXG4gICAgYW5pbWF0aW9uczogWyB0b2FzdEFuaW1hdGlvbnMuZmFkZVRvYXN0IF0sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVW1icmFUb2FzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIGFuaW1hdGlvblN0YXRlOiBUb2FzdEFuaW1hdGlvblN0YXRlID0gJ2RlZmF1bHQnO1xyXG4gICAgaWNvblR5cGU6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIGludGVydmFsSWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICByZWFkb25seSBkYXRhOiBUb2FzdERhdGEsXHJcbiAgICAgICAgcmVhZG9ubHkgcmVmOiBUb2FzdFJlZlxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5pY29uVHlwZSA9IGRhdGEudHlwZSA9PT0gJ3N1Y2Nlc3MnID8gJ2RvbmUnIDogZGF0YS50eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hbmltYXRpb25TdGF0ZSA9ICdjbG9zaW5nJywgNTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaW50ZXJ2YWxJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5yZWYuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZhZGVGaW5pc2hlZChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcclxuICAgICAgICBjb25zdCB7dG9TdGF0ZX0gPSBldmVudDtcclxuICAgICAgICBjb25zdCBpc0ZhZGVPdXQgPSAodG9TdGF0ZSBhcyBUb2FzdEFuaW1hdGlvblN0YXRlKSA9PT0gJ2Nsb3NpbmcnO1xyXG4gICAgICAgIGNvbnN0IGl0RmluaXNoZWQgPSB0aGlzLmFuaW1hdGlvblN0YXRlID09PSAnY2xvc2luZyc7XHJcblxyXG4gICAgICAgIGlmIChpc0ZhZGVPdXQgJiYgaXRGaW5pc2hlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==