var ToastRef = /** @class */ (function () {
    function ToastRef(overlay) {
        this.overlay = overlay;
        this.overlayRef = overlay;
    }
    ToastRef.prototype.close = function () {
        this.overlay.dispose();
    };
    ToastRef.prototype.isVisible = function () {
        return this.overlay && this.overlay.overlayElement;
    };
    ToastRef.prototype.getPosition = function () {
        return this.overlay.overlayElement.getBoundingClientRect();
    };
    return ToastRef;
}());
export { ToastRef };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtcmVmLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdW1icmEtbWVzc2FnaW5nLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jbGFzc2VzL3RvYXN0LXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtJQUdJLGtCQUE2QixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO0lBQzlCLENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQUFsQkQsSUFrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvYXN0UmVmIHtcclxuICAgIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG92ZXJsYXk6IE92ZXJsYXlSZWYpIHtcclxuICAgICAgICB0aGlzLm92ZXJsYXlSZWYgPSBvdmVybGF5O1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMub3ZlcmxheS5kaXNwb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWaXNpYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm92ZXJsYXkgJiYgdGhpcy5vdmVybGF5Lm92ZXJsYXlFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm92ZXJsYXkub3ZlcmxheUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICB9XHJcbn1cclxuIl19