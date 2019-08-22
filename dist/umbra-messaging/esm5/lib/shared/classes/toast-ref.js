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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtcmVmLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdW1icmEtbWVzc2FnaW5nLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jbGFzc2VzL3RvYXN0LXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7SUFDSSxrQkFBNkIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtJQUFJLENBQUM7Ozs7SUFFckQsd0JBQUs7OztJQUFMO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsNEJBQVM7OztJQUFUO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFFRCw4QkFBVzs7O0lBQVg7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0QsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQzs7Ozs7OztJQWJlLDJCQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbmV4cG9ydCBjbGFzcyBUb2FzdFJlZiB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBvdmVybGF5OiBPdmVybGF5UmVmKSB7IH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLm92ZXJsYXkuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIGlzVmlzaWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkub3ZlcmxheUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm92ZXJsYXkub3ZlcmxheUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxufVxuIl19