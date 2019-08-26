(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./projects/umbra-messaging/src/lib/shared/classes/toast-config.ts":
/*!*************************************************************************!*\
  !*** ./projects/umbra-messaging/src/lib/shared/classes/toast-config.ts ***!
  \*************************************************************************/
/*! exports provided: ToastData, defaultToastConfig, DEFAULT_MARGIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastData", function() { return ToastData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultToastConfig", function() { return defaultToastConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MARGIN", function() { return DEFAULT_MARGIN; });
class ToastData {
}
const defaultToastConfig = {
    verticalPosition: 'top',
    horizontalPosition: 'right',
    position: {},
    animation: {
        fadeOut: 2500,
        fadeIn: 300,
    },
    toastData: {
        type: 'success'
    }
};
const DEFAULT_MARGIN = 25;


/***/ }),

/***/ "./projects/umbra-messaging/src/lib/shared/classes/toast-ref.ts":
/*!**********************************************************************!*\
  !*** ./projects/umbra-messaging/src/lib/shared/classes/toast-ref.ts ***!
  \**********************************************************************/
/*! exports provided: ToastRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastRef", function() { return ToastRef; });
class ToastRef {
    constructor(overlay) {
        this.overlay = overlay;
    }
    close() {
        this.overlay.dispose();
    }
    isVisible() {
        return this.overlay && this.overlay.overlayElement;
    }
    getPosition() {
        return this.overlay.overlayElement.getBoundingClientRect();
    }
}


/***/ }),

/***/ "./projects/umbra-messaging/src/lib/shared/services/umbra-toast.service.ts":
/*!*********************************************************************************!*\
  !*** ./projects/umbra-messaging/src/lib/shared/services/umbra-toast.service.ts ***!
  \*********************************************************************************/
/*! exports provided: UmbraToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmbraToastService", function() { return UmbraToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/portal.js");
/* harmony import */ var _classes_toast_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/toast-ref */ "./projects/umbra-messaging/src/lib/shared/classes/toast-ref.ts");
/* harmony import */ var _classes_toast_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/toast-config */ "./projects/umbra-messaging/src/lib/shared/classes/toast-config.ts");
/* harmony import */ var _umbra_toast_umbra_toast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../umbra-toast/umbra-toast.component */ "./projects/umbra-messaging/src/lib/umbra-toast/umbra-toast.component.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/overlay.js");







class UmbraToastService {
    constructor(overlay, parentInjector) {
        this.overlay = overlay;
        this.parentInjector = parentInjector;
    }
    showToast(toastConfig) {
        if (toastConfig === null || toastConfig === undefined) {
            toastConfig = _classes_toast_config__WEBPACK_IMPORTED_MODULE_3__["defaultToastConfig"];
        }
        const overlayPosition = this.overlay.position().global();
        if (toastConfig.verticalPosition === 'center') {
            overlayPosition.centerVertically();
        }
        else {
            if (toastConfig.verticalPosition === 'top') {
                if (toastConfig.position.top) {
                    overlayPosition.top(toastConfig.position.top + 'px');
                }
                else {
                    overlayPosition.top(_classes_toast_config__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_MARGIN"] + 'px');
                }
            }
            if (toastConfig.verticalPosition === 'bottom') {
                if (toastConfig.position.bottom) {
                    overlayPosition.bottom(toastConfig.position.bottom + 'px');
                }
                else {
                    overlayPosition.bottom(_classes_toast_config__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_MARGIN"] + 'px');
                }
            }
        }
        if (toastConfig.horizontalPosition === 'center') {
            overlayPosition.centerHorizontally();
        }
        else {
            if (toastConfig.horizontalPosition === 'right') {
                if (toastConfig.position.right) {
                    overlayPosition.right(toastConfig.position.right + 'px');
                }
                else {
                    overlayPosition.right(_classes_toast_config__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_MARGIN"] + 'px');
                }
            }
            if (toastConfig.horizontalPosition === 'left') {
                if (toastConfig.position.left) {
                    overlayPosition.left(toastConfig.position.left + 'px');
                }
                else {
                    overlayPosition.left(_classes_toast_config__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_MARGIN"] + 'px');
                }
            }
        }
        const overlayRef = this.overlay.create({ positionStrategy: overlayPosition });
        const toastRef = new _classes_toast_ref__WEBPACK_IMPORTED_MODULE_2__["ToastRef"](overlayRef);
        const injector = this.getInjector(toastConfig.toastData, toastRef, this.parentInjector);
        const toastPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](_umbra_toast_umbra_toast_component__WEBPACK_IMPORTED_MODULE_4__["UmbraToastComponent"], null, injector);
        overlayRef.attach(toastPortal);
        return toastRef;
    }
    getInjector(data, toastRef, parentInjector) {
        const tokens = new WeakMap();
        tokens.set(_classes_toast_config__WEBPACK_IMPORTED_MODULE_3__["ToastData"], data);
        tokens.set(_classes_toast_ref__WEBPACK_IMPORTED_MODULE_2__["ToastRef"], toastRef);
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalInjector"](parentInjector, tokens);
    }
}
UmbraToastService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UmbraToastService, factory: function UmbraToastService_Factory(t) { return new (t || UmbraToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); }, providedIn: null });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UmbraToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null);


/***/ }),

/***/ "./projects/umbra-messaging/src/lib/umbra-toast/umbra-toast.component.ts":
/*!*******************************************************************************!*\
  !*** ./projects/umbra-messaging/src/lib/umbra-toast/umbra-toast.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UmbraToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmbraToastComponent", function() { return UmbraToastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_classes_toast_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/classes/toast-config */ "./projects/umbra-messaging/src/lib/shared/classes/toast-config.ts");
/* harmony import */ var _shared_classes_toast_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/classes/toast-ref */ "./projects/umbra-messaging/src/lib/shared/classes/toast-ref.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");







const _c0 = ["toast"];
const _c1 = ["dataIcon"];
const _c2 = ["closeIcon"];
const _c3 = ["text"];
const _c4 = [4, "ngIf", "ngIfElse"];
const _c5 = ["templateRef", ""];
const _c6 = ["fxLayout", "row", "fxLayoutAlign", "center center"];
const _c7 = ["toast", ""];
const _c8 = ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "toast-data-icon"];
const _c9 = ["dataIcon", ""];
const _c10 = ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "toast-text"];
const _c11 = ["text", ""];
const _c12 = ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "toast-close-icon"];
const _c13 = ["closeIcon", ""];
const _c14 = [3, "click"];
function UmbraToastComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", _c6, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", _c8, _c9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", _c10, _c11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", _c12, _c13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", _c14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UmbraToastComponent_ng_container_0_Template_mat_icon_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r195); const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r194.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r187.iconType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r187.data.text, " ");
} }
const _c15 = [4, "ngTemplateOutlet", "ngTemplateOutletContext"];
function UmbraToastComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function UmbraToastComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UmbraToastComponent_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", _c15);
} if (rf & 2) {
    const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r189.data.template)("ngTemplateOutletContext", ctx_r189.data.templateContext);
} }
class UmbraToastComponent {
    constructor(data, ref, renderer) {
        this.data = data;
        this.ref = ref;
        this.renderer = renderer;
        this.toastData = data;
        this.iconType = data.type === 'success' ? 'done' : data.type;
    }
    ngOnInit() {
        // NO-OP.
    }
    ngAfterViewInit() {
        this.renderer.addClass(this.toast.nativeElement, 'toast');
        this.renderer.addClass(this.toast.nativeElement, 'toast-type-' + this.toastData.type);
        this.renderer.addClass(this.dataIcon.nativeElement, 'toast-data-icon-' + this.toastData.type);
        this.renderer.addClass(this.closeIcon.nativeElement, 'toast-close-icon-' + this.toastData.type);
    }
    ngOnDestroy() {
        this.close();
    }
    close() {
        this.ref.close();
    }
}
UmbraToastComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UmbraToastComponent, selectors: [["umbra-messaging-toast"]], factory: function UmbraToastComponent_Factory(t) { return new (t || UmbraToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_classes_toast_config__WEBPACK_IMPORTED_MODULE_1__["ToastData"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_classes_toast_ref__WEBPACK_IMPORTED_MODULE_2__["ToastRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); }, viewQuery: function UmbraToastComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"]((_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]())) && (ctx.toast = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"]((_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]())) && (ctx.dataIcon = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"]((_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]())) && (ctx.closeIcon = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"]((_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]())) && (ctx.text = _t.first);
    } }, consts: 3, vars: 2, template: function UmbraToastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UmbraToastComponent_ng_container_0_Template, 14, 2, "ng-container", _c4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UmbraToastComponent_ng_template_1_Template, 1, 2, "ng-template", null, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.text)("ngIfElse", _r188);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]], styles: [".toast[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: #dddddd #d6d6d6 #cfcfcf;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.11);\r\n    min-height: 1em;\r\n    height: 3em;\r\n}\r\n.toast-data-icon[_ngcontent-%COMP%], .toast-close-icon[_ngcontent-%COMP%] {\r\n    padding: 0 0.5em;\r\n}\r\n.toast-data-icon[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\r\n    border-radius: 15px;\r\n    padding: 1px;\r\n    border: solid 1px black;\r\n}\r\n.toast-data-icon-success[_ngcontent-%COMP%]    > .mat-icon[_ngcontent-%COMP%] {\r\n    background-color: lightseagreen;\r\n}\r\n.toast-data-icon-warning[_ngcontent-%COMP%]    > .mat-icon[_ngcontent-%COMP%] {\r\n    background-color: #dd8900;\r\n}\r\n.toast-data-icon-info[_ngcontent-%COMP%]    > .mat-icon[_ngcontent-%COMP%] {\r\n    background-color: #749aa8;\r\n}\r\n.toast-close-icon[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n.toast-close-icon-success[_ngcontent-%COMP%] {\r\n    background-color: #00b173;\r\n    height: 100%;\r\n    border-left: solid 3px seagreen;\r\n}\r\n.toast-close-icon-warning[_ngcontent-%COMP%] {\r\n    background-color: #dd8900;\r\n    height: 100%;\r\n    border-left: solid 3px #F09C00;\r\n}\r\n.toast-close-icon-info[_ngcontent-%COMP%] {\r\n    background-color: #749aa8;\r\n    height: 100%;\r\n    border-left: solid 3px #557A88;\r\n}\r\n.toast-type-success[_ngcontent-%COMP%] {\r\n    background-color: #008000;\r\n    color: white;\r\n}\r\n.toast-text[_ngcontent-%COMP%] {\r\n    padding: 0 0.5em;\r\n}\r\n.toast-type-warning[_ngcontent-%COMP%] {\r\n    background-color: orange;\r\n    color: white;\r\n}\r\n.toast-type-info[_ngcontent-%COMP%] {\r\n    background-color: lightblue;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3VtYnJhLW1lc3NhZ2luZy9zcmMvbGliL3VtYnJhLXRvYXN0L3VtYnJhLXRvYXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLCtCQUErQjtBQUNuQztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osK0JBQStCO0FBQ25DO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCO0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQiIsImZpbGUiOiJwcm9qZWN0cy91bWJyYS1tZXNzYWdpbmcvc3JjL2xpYi91bWJyYS10b2FzdC91bWJyYS10b2FzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvYXN0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZGRkZGQgI2Q2ZDZkNiAjY2ZjZmNmO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxZW07XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxufVxyXG4udG9hc3QtZGF0YS1pY29uLCAudG9hc3QtY2xvc2UtaWNvbiB7XHJcbiAgICBwYWRkaW5nOiAwIDAuNWVtO1xyXG59XHJcblxyXG4udG9hc3QtZGF0YS1pY29uID4gbWF0LWljb24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG59XHJcblxyXG4udG9hc3QtZGF0YS1pY29uLXN1Y2Nlc3MgPiAubWF0LWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcclxufVxyXG5cclxuLnRvYXN0LWRhdGEtaWNvbi13YXJuaW5nID4gLm1hdC1pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZDg5MDA7XHJcbn1cclxuXHJcbi50b2FzdC1kYXRhLWljb24taW5mbyA+IC5tYXQtaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQ5YWE4O1xyXG59XHJcblxyXG4udG9hc3QtY2xvc2UtaWNvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50b2FzdC1jbG9zZS1pY29uLXN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjE3MztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAzcHggc2VhZ3JlZW47XHJcbn1cclxuXHJcbi50b2FzdC1jbG9zZS1pY29uLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkODkwMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAzcHggI0YwOUMwMDtcclxufVxyXG5cclxuLnRvYXN0LWNsb3NlLWljb24taW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQ5YWE4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDNweCAjNTU3QTg4O1xyXG59XHJcblxyXG4udG9hc3QtdHlwZS1zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDgwMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50b2FzdC10ZXh0IHtcclxuICAgIHBhZGRpbmc6IDAgMC41ZW07XHJcbn1cclxuXHJcbi50b2FzdC10eXBlLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udG9hc3QtdHlwZS1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UmbraToastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'umbra-messaging-toast',
                templateUrl: './umbra-toast.component.html',
                styleUrls: ['./umbra-toast.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _shared_classes_toast_config__WEBPACK_IMPORTED_MODULE_1__["ToastData"] }, { type: _shared_classes_toast_ref__WEBPACK_IMPORTED_MODULE_2__["ToastRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { toast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['toast', { static: false }]
        }], dataIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dataIcon', { static: false }]
        }], closeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['closeIcon', { static: false }]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['text', { static: false }]
        }] });


/***/ }),

/***/ "./projects/umbra-messaging/src/lib/umbra-toast/umbra-toast.module.ts":
/*!****************************************************************************!*\
  !*** ./projects/umbra-messaging/src/lib/umbra-toast/umbra-toast.module.ts ***!
  \****************************************************************************/
/*! exports provided: UmbraToastModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmbraToastModule", function() { return UmbraToastModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _umbra_toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./umbra-toast.component */ "./projects/umbra-messaging/src/lib/umbra-toast/umbra-toast.component.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/overlay.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _shared_services_umbra_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/umbra-toast.service */ "./projects/umbra-messaging/src/lib/shared/services/umbra-toast.service.ts");








class UmbraToastModule {
}
UmbraToastModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UmbraToastModule });
UmbraToastModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UmbraToastModule_Factory(t) { return new (t || UmbraToastModule)(); }, providers: [_shared_services_umbra_toast_service__WEBPACK_IMPORTED_MODULE_6__["UmbraToastService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]
        ]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UmbraToastModule, { declarations: [_umbra_toast_component__WEBPACK_IMPORTED_MODULE_2__["UmbraToastComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UmbraToastModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_umbra_toast_component__WEBPACK_IMPORTED_MODULE_2__["UmbraToastComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]
                ],
                entryComponents: [_umbra_toast_component__WEBPACK_IMPORTED_MODULE_2__["UmbraToastComponent"]],
                providers: [_shared_services_umbra_toast_service__WEBPACK_IMPORTED_MODULE_6__["UmbraToastService"]]
            }]
    }], null, null);


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lib_lib_shared_classes_toast_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/lib/shared/classes/toast-config */ "./projects/umbra-messaging/src/lib/shared/classes/toast-config.ts");
/* harmony import */ var lib_lib_shared_services_umbra_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/lib/shared/services/umbra-toast.service */ "./projects/umbra-messaging/src/lib/shared/services/umbra-toast.service.ts");




const _c0 = [3, "click"];
class AppComponent {
    constructor(umbraToastService) {
        this.umbraToastService = umbraToastService;
    }
    showWarningToast() {
        this.umbraToastService.showToast(Object.assign({}, lib_lib_shared_classes_toast_config__WEBPACK_IMPORTED_MODULE_1__["defaultToastConfig"], {
            verticalPosition: 'top',
            horizontalPosition: 'right',
            position: {
                top: 50
            },
            toastData: {
                text: 'Oh no! There was an error in the system!',
                type: 'warning',
            }
        }));
    }
    showInfoToast() {
        this.umbraToastService.showToast(Object.assign({}, lib_lib_shared_classes_toast_config__WEBPACK_IMPORTED_MODULE_1__["defaultToastConfig"], {
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            toastData: {
                text: 'Just wanted to inform you there is a wall there.',
                type: 'info',
            }
        }));
    }
    showSuccessToast() {
        this.umbraToastService.showToast(Object.assign({}, lib_lib_shared_classes_toast_config__WEBPACK_IMPORTED_MODULE_1__["defaultToastConfig"], {
            verticalPosition: 'top',
            horizontalPosition: 'left',
            toastData: {
                text: 'We did it!',
                type: 'success',
            }
        }));
    }
}
AppComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["umbra-root"]], factory: function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](lib_lib_shared_services_umbra_toast_service__WEBPACK_IMPORTED_MODULE_2__["UmbraToastService"])); }, consts: 6, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", _c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_0_listener($event) { return ctx.showWarningToast(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show warning toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", _c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_2_listener($event) { return ctx.showInfoToast(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Show info toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", _c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener($event) { return ctx.showSuccessToast(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Show success toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'umbra-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: lib_lib_shared_services_umbra_toast_service__WEBPACK_IMPORTED_MODULE_2__["UmbraToastService"] }]; }, null);


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var lib_lib_umbra_toast_umbra_toast_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/lib/umbra-toast/umbra-toast.module */ "./projects/umbra-messaging/src/lib/umbra-toast/umbra-toast.module.ts");






class AppModule {
}
AppModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            lib_lib_umbra_toast_umbra_toast_module__WEBPACK_IMPORTED_MODULE_4__["UmbraToastModule"]
        ]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        lib_lib_umbra_toast_umbra_toast_module__WEBPACK_IMPORTED_MODULE_4__["UmbraToastModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    lib_lib_umbra_toast_umbra_toast_module__WEBPACK_IMPORTED_MODULE_4__["UmbraToastModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tim\umbra-messaging\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map