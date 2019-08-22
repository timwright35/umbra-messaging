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
                template: "<div class=\"toast\">\n    <mat-icon>{{ iconType }}</mat-icon>\n    <div>{{ data.text }}</div>\n    <mat-icon (click)=\"close()\">close</mat-icon>\n</div>\n",
                animations: [toastAnimations.fadeToast],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".toast{position:relative;display:-webkit-box;display:flex;justify-content:space-around;margin-bottom:20px;padding:10px 15px 10px 48px;width:290px;background:#fff;border-width:1px;border-style:solid;border-color:#ddd #d6d6d6 #cfcfcf;box-shadow:0 2px 4px rgba(0,0,0,.11)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW1icmEtdG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdW1icmEtbWVzc2FnaW5nLyIsInNvdXJjZXMiOlsibGliL3VtYnJhLXRvYXN0L3VtYnJhLXRvYXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCx1QkFBdUIsRUFHeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLFNBQVMsRUFDVixNQUFNLGdDQUFnQyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV2RCxPQUFPLEVBQ0wsZUFBZSxFQUVoQixNQUFNLDJDQUEyQyxDQUFDO0FBVW5ELE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBTTlCLFlBQ2EsSUFBZSxFQUNmLEdBQWE7UUFEYixTQUFJLEdBQUosSUFBSSxDQUFXO1FBQ2YsUUFBRyxHQUFILEdBQUcsQ0FBVTtRQVAxQixtQkFBYyxHQUF3QixTQUFTLENBQUM7UUFTOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQy9ELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsR0FBRSxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7O0lBRUQsV0FBVztRQUNULFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLEtBQXFCO2NBQzVCLEVBQUUsT0FBTyxFQUFFLEdBQUcsS0FBSzs7Y0FDbkIsU0FBUyxHQUFHLENBQUMsbUJBQUEsT0FBTyxFQUF1QixDQUFDLEtBQUssU0FBUzs7Y0FDMUQsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLEtBQUssU0FBUztRQUVwRCxJQUFJLFNBQVMsSUFBSSxVQUFVLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDOzs7WUF4Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLHdLQUEyQztnQkFFM0MsVUFBVSxFQUFFLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztnQkFDdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O1lBaEJDLFNBQVM7WUFFRixRQUFROzs7O0lBZ0JmLDZDQUFnRDs7SUFDaEQsdUNBQWlCOzs7OztJQUVqQix5Q0FBMkI7O0lBR3ZCLG1DQUF3Qjs7SUFDeEIsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBJbmplY3QsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFRPQVNUX0NPTkZJR19UT0tFTixcbiAgVG9hc3REYXRhXG59IGZyb20gJy4uL3NoYXJlZC9jbGFzc2VzL3RvYXN0LWNvbmZpZyc7XG5pbXBvcnQgeyBUb2FzdFJlZiB9IGZyb20gJy4uL3NoYXJlZC9jbGFzc2VzL3RvYXN0LXJlZic7XG5pbXBvcnQgeyBUb2FzdENvbmZpZ0ludGVyZmFjZSB9IGZyb20gJy4uL3NoYXJlZC9pbnRlcmZhY2VzL3RvYXN0LWNvbmZpZy5pbnRlcmZhY2UnO1xuaW1wb3J0IHtcbiAgdG9hc3RBbmltYXRpb25zLFxuICBUb2FzdEFuaW1hdGlvblN0YXRlXG59IGZyb20gJy4uL3NoYXJlZC9hbmltYXRpb25zL3RvYXN0LWZhZGUuYW5pbWF0aW9uJztcbmltcG9ydCB7IEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VtYnJhLW1lc3NhZ2luZy10b2FzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91bWJyYS10b2FzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VtYnJhLXRvYXN0LmNvbXBvbmVudC5jc3MnXSxcbiAgYW5pbWF0aW9uczogW3RvYXN0QW5pbWF0aW9ucy5mYWRlVG9hc3RdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBVbWJyYVRvYXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBhbmltYXRpb25TdGF0ZTogVG9hc3RBbmltYXRpb25TdGF0ZSA9ICdkZWZhdWx0JztcbiAgaWNvblR5cGU6IHN0cmluZztcblxuICBwcml2YXRlIGludGVydmFsSWQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHJlYWRvbmx5IGRhdGE6IFRvYXN0RGF0YSxcbiAgICAgIHJlYWRvbmx5IHJlZjogVG9hc3RSZWZcbiAgKSB7XG4gICAgdGhpcy5pY29uVHlwZSA9IGRhdGEudHlwZSA9PT0gJ3N1Y2Nlc3MnID8gJ2RvbmUnIDogZGF0YS50eXBlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmFuaW1hdGlvblN0YXRlID0gJ2Nsb3NpbmcnLCA1MDAwKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmludGVydmFsSWQpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5yZWYuY2xvc2UoKTtcbiAgfVxuXG4gIG9uRmFkZUZpbmlzaGVkKGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgIGNvbnN0IHsgdG9TdGF0ZSB9ID0gZXZlbnQ7XG4gICAgY29uc3QgaXNGYWRlT3V0ID0gKHRvU3RhdGUgYXMgVG9hc3RBbmltYXRpb25TdGF0ZSkgPT09ICdjbG9zaW5nJztcbiAgICBjb25zdCBpdEZpbmlzaGVkID0gdGhpcy5hbmltYXRpb25TdGF0ZSA9PT0gJ2Nsb3NpbmcnO1xuXG4gICAgaWYgKGlzRmFkZU91dCAmJiBpdEZpbmlzaGVkKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=