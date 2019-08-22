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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtcmVmLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdW1icmEtbWVzc2FnaW5nLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jbGFzc2VzL3RvYXN0LXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTSxPQUFPLFFBQVE7Ozs7SUFDakIsWUFBNkIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtJQUFJLENBQUM7Ozs7SUFFckQsS0FBSztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELFNBQVM7UUFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0QsQ0FBQztDQUNKOzs7Ozs7SUFiZSwyQkFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuXG5leHBvcnQgY2xhc3MgVG9hc3RSZWYge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgb3ZlcmxheTogT3ZlcmxheVJlZikgeyB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICBpc1Zpc2libGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm92ZXJsYXkgJiYgdGhpcy5vdmVybGF5Lm92ZXJsYXlFbGVtZW50O1xuICAgIH1cblxuICAgIGdldFBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vdmVybGF5Lm92ZXJsYXlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cbn1cbiJdfQ==