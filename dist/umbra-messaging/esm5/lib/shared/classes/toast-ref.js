/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToastRef = /** @class */ (function () {
    function ToastRef(overlay) {
        this.overlay = overlay;
    }
    /**
     * @return {?}
     */
    ToastRef.prototype.close = /**
     * @return {?}
     */
    function () {
        this.overlay.dispose();
    };
    /**
     * @return {?}
     */
    ToastRef.prototype.isVisible = /**
     * @return {?}
     */
    function () {
        return this.overlay && this.overlay.overlayElement;
    };
    /**
     * @return {?}
     */
    ToastRef.prototype.getPosition = /**
     * @return {?}
     */
    function () {
        return this.overlay.overlayElement.getBoundingClientRect();
    };
    return ToastRef;
}());
export { ToastRef };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToastRef.prototype.overlay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtcmVmLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdW1icmEtbWVzc2FnaW5nLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jbGFzc2VzL3RvYXN0LXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7SUFDSSxrQkFBNkIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtJQUFJLENBQUM7Ozs7SUFFckQsd0JBQUs7OztJQUFMO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsNEJBQVM7OztJQUFUO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFFRCw4QkFBVzs7O0lBQVg7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0QsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQzs7Ozs7OztJQWJlLDJCQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9hc3RSZWYge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBvdmVybGF5OiBPdmVybGF5UmVmKSB7IH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLm92ZXJsYXkuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmlzaWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vdmVybGF5ICYmIHRoaXMub3ZlcmxheS5vdmVybGF5RWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb3NpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vdmVybGF5Lm92ZXJsYXlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==