/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ToastRef {
    /**
     * @param {?} overlay
     */
    constructor(overlay) {
        this.overlay = overlay;
    }
    /**
     * @return {?}
     */
    close() {
        this.overlay.dispose();
    }
    /**
     * @return {?}
     */
    isVisible() {
        return this.overlay && this.overlay.overlayElement;
    }
    /**
     * @return {?}
     */
    getPosition() {
        return this.overlay.overlayElement.getBoundingClientRect();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToastRef.prototype.overlay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtcmVmLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdW1icmEtbWVzc2FnaW5nLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jbGFzc2VzL3RvYXN0LXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTSxPQUFPLFFBQVE7Ozs7SUFDakIsWUFBNkIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtJQUFJLENBQUM7Ozs7SUFFckQsS0FBSztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELFNBQVM7UUFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0QsQ0FBQztDQUNKOzs7Ozs7SUFiZSwyQkFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvYXN0UmVmIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgb3ZlcmxheTogT3ZlcmxheVJlZikgeyB9XHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5LmRpc3Bvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1Zpc2libGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkub3ZlcmxheUVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheS5vdmVybGF5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIH1cclxufVxyXG4iXX0=