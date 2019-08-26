/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ToastData } from '../shared/classes/toast-config';
import { ToastRef } from '../shared/classes/toast-ref';
import { toastAnimations } from '../shared/animations/toast-fade.animation';
export class UmbraToastComponent {
    /**
     * @param {?} data
     * @param {?} ref
     */
    constructor(data, ref) {
        this.data = data;
        this.ref = ref;
        this.animationState = 'default';
        this.iconType = data.type === 'success' ? 'done' : data.type;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.intervalId = setTimeout((/**
         * @return {?}
         */
        () => this.animationState = 'closing'), 5000);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        clearTimeout(this.intervalId);
    }
    /**
     * @return {?}
     */
    close() {
        this.ref.close();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFadeFinished(event) {
        const { toState } = event;
        /** @type {?} */
        const isFadeOut = ((/** @type {?} */ (toState))) === 'closing';
        /** @type {?} */
        const itFinished = this.animationState === 'closing';
        if (isFadeOut && itFinished) {
            this.close();
        }
    }
}
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
UmbraToastComponent.ctorParameters = () => [
    { type: ToastData },
    { type: ToastRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW1icmEtdG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdW1icmEtbWVzc2FnaW5nLyIsInNvdXJjZXMiOlsibGliL3VtYnJhLXRvYXN0L3VtYnJhLXRvYXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFFVCx1QkFBdUIsRUFFMUIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNILFNBQVMsRUFDWixNQUFNLGdDQUFnQyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RCxPQUFPLEVBQ0gsZUFBZSxFQUVsQixNQUFNLDJDQUEyQyxDQUFDO0FBVW5ELE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBTTVCLFlBQ2EsSUFBZSxFQUNmLEdBQWE7UUFEYixTQUFJLEdBQUosSUFBSSxDQUFXO1FBQ2YsUUFBRyxHQUFILEdBQUcsQ0FBVTtRQVAxQixtQkFBYyxHQUF3QixTQUFTLENBQUM7UUFTNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsR0FBRSxJQUFJLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7O0lBRUQsV0FBVztRQUNQLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELEtBQUs7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLEtBQXFCO2NBQzFCLEVBQUMsT0FBTyxFQUFDLEdBQUcsS0FBSzs7Y0FDakIsU0FBUyxHQUFHLENBQUMsbUJBQUEsT0FBTyxFQUF1QixDQUFDLEtBQUssU0FBUzs7Y0FDMUQsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLEtBQUssU0FBUztRQUVwRCxJQUFJLFNBQVMsSUFBSSxVQUFVLEVBQUU7WUFDekIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQzs7O1lBeENKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyw2SkFBMkM7Z0JBRTNDLFVBQVUsRUFBRSxDQUFFLGVBQWUsQ0FBQyxTQUFTLENBQUU7Z0JBQ3pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNsRDs7OztZQWZHLFNBQVM7WUFFSixRQUFROzs7O0lBZWIsNkNBQWdEOztJQUNoRCx1Q0FBaUI7Ozs7O0lBRWpCLHlDQUEyQjs7SUFHdkIsbUNBQXdCOztJQUN4QixrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgT25Jbml0LFxyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBPbkRlc3Ryb3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICAgIFRvYXN0RGF0YVxyXG59IGZyb20gJy4uL3NoYXJlZC9jbGFzc2VzL3RvYXN0LWNvbmZpZyc7XHJcbmltcG9ydCB7IFRvYXN0UmVmIH0gZnJvbSAnLi4vc2hhcmVkL2NsYXNzZXMvdG9hc3QtcmVmJztcclxuaW1wb3J0IHtcclxuICAgIHRvYXN0QW5pbWF0aW9ucyxcclxuICAgIFRvYXN0QW5pbWF0aW9uU3RhdGVcclxufSBmcm9tICcuLi9zaGFyZWQvYW5pbWF0aW9ucy90b2FzdC1mYWRlLmFuaW1hdGlvbic7XHJcbmltcG9ydCB7IEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndW1icmEtbWVzc2FnaW5nLXRvYXN0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi91bWJyYS10b2FzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsgJy4vdW1icmEtdG9hc3QuY29tcG9uZW50LmNzcycgXSxcclxuICAgIGFuaW1hdGlvbnM6IFsgdG9hc3RBbmltYXRpb25zLmZhZGVUb2FzdCBdLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFVtYnJhVG9hc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBhbmltYXRpb25TdGF0ZTogVG9hc3RBbmltYXRpb25TdGF0ZSA9ICdkZWZhdWx0JztcclxuICAgIGljb25UeXBlOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBpbnRlcnZhbElkOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcmVhZG9ubHkgZGF0YTogVG9hc3REYXRhLFxyXG4gICAgICAgIHJlYWRvbmx5IHJlZjogVG9hc3RSZWZcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuaWNvblR5cGUgPSBkYXRhLnR5cGUgPT09ICdzdWNjZXNzJyA/ICdkb25lJyA6IGRhdGEudHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYW5pbWF0aW9uU3RhdGUgPSAnY2xvc2luZycsIDUwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmludGVydmFsSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMucmVmLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25GYWRlRmluaXNoZWQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XHJcbiAgICAgICAgY29uc3Qge3RvU3RhdGV9ID0gZXZlbnQ7XHJcbiAgICAgICAgY29uc3QgaXNGYWRlT3V0ID0gKHRvU3RhdGUgYXMgVG9hc3RBbmltYXRpb25TdGF0ZSkgPT09ICdjbG9zaW5nJztcclxuICAgICAgICBjb25zdCBpdEZpbmlzaGVkID0gdGhpcy5hbmltYXRpb25TdGF0ZSA9PT0gJ2Nsb3NpbmcnO1xyXG5cclxuICAgICAgICBpZiAoaXNGYWRlT3V0ICYmIGl0RmluaXNoZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=