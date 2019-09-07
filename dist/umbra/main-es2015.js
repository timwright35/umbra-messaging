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

/***/ "./projects/umbra-messaging/src/lib/shared/classes/common-functions.ts":
/*!*****************************************************************************!*\
  !*** ./projects/umbra-messaging/src/lib/shared/classes/common-functions.ts ***!
  \*****************************************************************************/
/*! exports provided: isDefAndNotNull */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefAndNotNull", function() { return isDefAndNotNull; });
function isDefAndNotNull(value) {
    return value !== undefined && value !== null;
}


/***/ }),

/***/ "./projects/umbra-messaging/src/lib/shared/classes/toast-config.ts":
/*!*************************************************************************!*\
  !*** ./projects/umbra-messaging/src/lib/shared/classes/toast-config.ts ***!
  \*************************************************************************/
/*! exports provided: ToastData, ToastConfig, defaultToastConfig, DEFAULT_MARGIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastData", function() { return ToastData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastConfig", function() { return ToastConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultToastConfig", function() { return defaultToastConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MARGIN", function() { return DEFAULT_MARGIN; });
class ToastData {
}
class ToastConfig {
}
const defaultToastConfig = {
    verticalPosition: 'top',
    horizontalPosition: 'right',
    closable: true,
    position: {},
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
        this.overlayRef = overlay;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _classes_toast_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/toast-ref */ "./projects/umbra-messaging/src/lib/shared/classes/toast-ref.ts");
/* harmony import */ var _classes_toast_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/toast-config */ "./projects/umbra-messaging/src/lib/shared/classes/toast-config.ts");
/* harmony import */ var _umbra_toast_umbra_toast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../umbra-toast/umbra-toast.component */ "./projects/umbra-messaging/src/lib/umbra-toast/umbra-toast.component.ts");
/* harmony import */ var _classes_common_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../classes/common-functions */ "./projects/umbra-messaging/src/lib/shared/classes/common-functions.ts");






class UmbraToastService {
    constructor(overlay, parentInjector) {
        this.overlay = overlay;
        this.parentInjector = parentInjector;
        this.openTopToasts = [];
        this.openBottomToasts = [];
    }
    showToast(toastConfig) {
        if (toastConfig === null || toastConfig === undefined) {
            toastConfig = _classes_toast_config__WEBPACK_IMPORTED_MODULE_3__["defaultToastConfig"];
        }
        const overlayPosition = this.getOverlayPosition(toastConfig);
        const overlayRef = this.overlay.create({ positionStrategy: overlayPosition });
        const toastRef = new _classes_toast_ref__WEBPACK_IMPORTED_MODULE_2__["ToastRef"](overlayRef);
        if (toastConfig.verticalPosition === 'top') {
            this.openTopToasts.push(toastRef);
        }
        if (toastConfig.verticalPosition === 'bottom') {
            this.openBottomToasts.push(toastRef);
        }
        const injector = this.getInjector(toastConfig, toastRef, this.parentInjector);
        const toastPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](_umbra_toast_umbra_toast_component__WEBPACK_IMPORTED_MODULE_4__["UmbraToastComponent"], null, injector);
        overlayRef.attach(toastPortal);
        return toastRef;
    }
    closeToast(toastRef) {
        this.openTopToasts = this.openTopToasts.filter((openToast) => {
            if (openToast !== toastRef) {
                return openToast;
            }
        });
        this.openBottomToasts = this.openBottomToasts.filter((openToast) => {
            if (openToast !== toastRef) {
                return openToast;
            }
        });
        toastRef.close();
    }
    closeAllToasts() {
        [...this.openTopToasts, ...this.openBottomToasts].forEach((toastRef) => {
            toastRef.close();
        });
        this.openBottomToasts = [];
        this.openTopToasts = [];
    }
    getInjector(data, toastRef, parentInjector) {
        const tokens = new WeakMap();
        tokens.set(_classes_toast_config__WEBPACK_IMPORTED_MODULE_3__["ToastConfig"], data);
        tokens.set(_classes_toast_ref__WEBPACK_IMPORTED_MODULE_2__["ToastRef"], toastRef);
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalInjector"](parentInjector, tokens);
    }
    getOverlayPosition(toastConfig) {
        const overlayPosition = this.overlay.position().global();
        if (toastConfig.verticalPosition === 'center') {
            overlayPosition.centerVertically();
        }
        else {
            if (toastConfig.verticalPosition === 'top') {
                let lastTopToastHeight = 0;
                let lastTopToast;
                if (this.openTopToasts.length > 0) {
                    lastTopToast = this.openTopToasts[this.openTopToasts.length - 1];
                }
                if (Object(_classes_common_functions__WEBPACK_IMPORTED_MODULE_5__["isDefAndNotNull"])(lastTopToast)) {
                    lastTopToastHeight = lastTopToast.getPosition().height;
                }
                let calculatedPosition;
                if (toastConfig.position.top) {
                    calculatedPosition = (this.openTopToasts.length * lastTopToastHeight) +
                        toastConfig.position.top;
                }
                else {
                    calculatedPosition = (this.openTopToasts.length * lastTopToastHeight);
                }
                overlayPosition.top(calculatedPosition + 'px');
            }
            if (toastConfig.verticalPosition === 'bottom') {
                let lastBottomToastHeight = 0;
                let lastBottomToast;
                if (this.openBottomToasts.length > 0) {
                    lastBottomToast = this.openBottomToasts[this.openBottomToasts.length - 1];
                }
                if (Object(_classes_common_functions__WEBPACK_IMPORTED_MODULE_5__["isDefAndNotNull"])(lastBottomToast)) {
                    lastBottomToastHeight = lastBottomToast.getPosition().height;
                }
                let calculatedPosition;
                if (toastConfig.position.bottom) {
                    calculatedPosition = (this.openBottomToasts.length * lastBottomToastHeight) +
                        toastConfig.position.bottom;
                }
                else {
                    calculatedPosition = (this.openBottomToasts.length * lastBottomToastHeight);
                }
                overlayPosition.bottom(calculatedPosition + 'px');
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
        return overlayPosition;
    }
}


/***/ }),

/***/ "./projects/umbra-messaging/src/lib/umbra-inline/umbra-inline.component.css.shim.ngstyle.js":
/*!**************************************************************************************************!*\
  !*** ./projects/umbra-messaging/src/lib/umbra-inline/umbra-inline.component.css.shim.ngstyle.js ***!
  \**************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy91bWJyYS1tZXNzYWdpbmcvc3JjL2xpYi91bWJyYS1pbmxpbmUvdW1icmEtaW5saW5lLmNvbXBvbmVudC5jc3MifQ== */"];



/***/ }),

/***/ "./projects/umbra-messaging/src/lib/umbra-inline/umbra-inline.component.ngfactory.js":
/*!*******************************************************************************************!*\
  !*** ./projects/umbra-messaging/src/lib/umbra-inline/umbra-inline.component.ngfactory.js ***!
  \*******************************************************************************************/
/*! exports provided: RenderType_UmbraInlineComponent, View_UmbraInlineComponent_0, View_UmbraInlineComponent_Host_0, UmbraInlineComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_UmbraInlineComponent", function() { return RenderType_UmbraInlineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UmbraInlineComponent_0", function() { return View_UmbraInlineComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UmbraInlineComponent_Host_0", function() { return View_UmbraInlineComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmbraInlineComponentNgFactory", function() { return UmbraInlineComponentNgFactory; });
/* harmony import */ var _umbra_inline_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./umbra-inline.component.css.shim.ngstyle */ "./projects/umbra-messaging/src/lib/umbra-inline/umbra-inline.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _umbra_inline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./umbra-inline.component */ "./projects/umbra-messaging/src/lib/umbra-inline/umbra-inline.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_UmbraInlineComponent = [_umbra_inline_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_UmbraInlineComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_UmbraInlineComponent, data: {} });

function View_UmbraInlineComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "umbra-inline-message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit["summary"]; _ck(_v, 1, 0, currVal_0); }); }
function View_UmbraInlineComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UmbraInlineComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.umbraMessages; _ck(_v, 1, 0, currVal_0); }, null); }
function View_UmbraInlineComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "umbra-inline-message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit["summary"]; _ck(_v, 1, 0, currVal_0); }); }
function View_UmbraInlineComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "umbra-inline-group-message-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UmbraInlineComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.umbraMessages; _ck(_v, 2, 0, currVal_0); }, null); }
function View_UmbraInlineComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "umbra-messages-inline"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UmbraInlineComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["groupMessageContainer", 2]], null, 0, null, View_UmbraInlineComponent_3))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.shouldTimeout; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_UmbraInlineComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "umbra-messaging-inline", [], null, null, null, View_UmbraInlineComponent_0, RenderType_UmbraInlineComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _umbra_inline_component__WEBPACK_IMPORTED_MODULE_3__["UmbraInlineComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var UmbraInlineComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("umbra-messaging-inline", _umbra_inline_component__WEBPACK_IMPORTED_MODULE_3__["UmbraInlineComponent"], View_UmbraInlineComponent_Host_0, { umbraMessages: "umbraMessages", groupMessages: "groupMessages", shouldTimeout: "shouldTimeout", setTimeout: "setTimeout" }, {}, []);



/***/ }),

/***/ "./projects/umbra-messaging/src/lib/umbra-inline/umbra-inline.component.ts":
/*!*********************************************************************************!*\
  !*** ./projects/umbra-messaging/src/lib/umbra-inline/umbra-inline.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UmbraInlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmbraInlineComponent", function() { return UmbraInlineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class UmbraInlineComponent {
    constructor() {
        this.umbraMessages = [];
        this.groupMessages = false;
        this.shouldTimeout = false;
        this.setTimeout = 2500;
    }
    ngOnInit() {
        if (this.shouldTimeout) {
            // TODO(Tim): Set a timeout on showing the messages.
        }
    }
}


/***/ }),

/***/ "./projects/umbra-messaging/src/lib/umbra-inline/umbra-inline.module.ts":
/*!******************************************************************************!*\
  !*** ./projects/umbra-messaging/src/lib/umbra-inline/umbra-inline.module.ts ***!
  \******************************************************************************/
/*! exports provided: UmbraInlineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmbraInlineModule", function() { return UmbraInlineModule; });
class UmbraInlineModule {
}


/***/ }),

/***/ "./projects/umbra-messaging/src/lib/umbra-toast/umbra-toast.component.css.shim.ngstyle.js":
/*!************************************************************************************************!*\
  !*** ./projects/umbra-messaging/src/lib/umbra-toast/umbra-toast.component.css.shim.ngstyle.js ***!
  \************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".toast[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: #dddddd #d6d6d6 #cfcfcf;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.11);\r\n    min-height: 1em;\r\n    height: 3em;\r\n}\r\n.toast-data-icon[_ngcontent-%COMP%], .toast-close-icon[_ngcontent-%COMP%] {\r\n    padding: 0 0.5em;\r\n}\r\n.toast-data-icon[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\r\n    border-radius: 15px;\r\n    padding: 1px;\r\n    border: solid 1px black;\r\n}\r\n.toast-data-icon-success[_ngcontent-%COMP%]    > .mat-icon[_ngcontent-%COMP%] {\r\n    background-color: lightseagreen;\r\n}\r\n.toast-data-icon-warning[_ngcontent-%COMP%]    > .mat-icon[_ngcontent-%COMP%] {\r\n    background-color: #dd8900;\r\n}\r\n.toast-data-icon-info[_ngcontent-%COMP%]    > .mat-icon[_ngcontent-%COMP%] {\r\n    background-color: #749aa8;\r\n}\r\n.toast-close-icon[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n.toast-close-icon-success[_ngcontent-%COMP%] {\r\n    background-color: #00b173;\r\n    height: 100%;\r\n    border-left: solid 3px seagreen;\r\n}\r\n.toast-close-icon-warning[_ngcontent-%COMP%] {\r\n    background-color: #dd8900;\r\n    height: 100%;\r\n    border-left: solid 3px #F09C00;\r\n}\r\n.toast-close-icon-info[_ngcontent-%COMP%] {\r\n    background-color: #749aa8;\r\n    height: 100%;\r\n    border-left: solid 3px #557A88;\r\n}\r\n.toast-type-success[_ngcontent-%COMP%] {\r\n    background-color: #008000;\r\n    color: white;\r\n}\r\n.toast-text[_ngcontent-%COMP%] {\r\n    padding: 0 0.5em;\r\n}\r\n.toast-type-warning[_ngcontent-%COMP%] {\r\n    background-color: orange;\r\n    color: white;\r\n}\r\n.toast-type-info[_ngcontent-%COMP%] {\r\n    background-color: lightblue;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3VtYnJhLW1lc3NhZ2luZy9zcmMvbGliL3VtYnJhLXRvYXN0L3VtYnJhLXRvYXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLCtCQUErQjtBQUNuQztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osK0JBQStCO0FBQ25DO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCO0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQiIsImZpbGUiOiJwcm9qZWN0cy91bWJyYS1tZXNzYWdpbmcvc3JjL2xpYi91bWJyYS10b2FzdC91bWJyYS10b2FzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvYXN0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZGRkZGQgI2Q2ZDZkNiAjY2ZjZmNmO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxZW07XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxufVxyXG4udG9hc3QtZGF0YS1pY29uLCAudG9hc3QtY2xvc2UtaWNvbiB7XHJcbiAgICBwYWRkaW5nOiAwIDAuNWVtO1xyXG59XHJcblxyXG4udG9hc3QtZGF0YS1pY29uID4gbWF0LWljb24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG59XHJcblxyXG4udG9hc3QtZGF0YS1pY29uLXN1Y2Nlc3MgPiAubWF0LWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcclxufVxyXG5cclxuLnRvYXN0LWRhdGEtaWNvbi13YXJuaW5nID4gLm1hdC1pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZDg5MDA7XHJcbn1cclxuXHJcbi50b2FzdC1kYXRhLWljb24taW5mbyA+IC5tYXQtaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQ5YWE4O1xyXG59XHJcblxyXG4udG9hc3QtY2xvc2UtaWNvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50b2FzdC1jbG9zZS1pY29uLXN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjE3MztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAzcHggc2VhZ3JlZW47XHJcbn1cclxuXHJcbi50b2FzdC1jbG9zZS1pY29uLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkODkwMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAzcHggI0YwOUMwMDtcclxufVxyXG5cclxuLnRvYXN0LWNsb3NlLWljb24taW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQ5YWE4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDNweCAjNTU3QTg4O1xyXG59XHJcblxyXG4udG9hc3QtdHlwZS1zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDgwMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50b2FzdC10ZXh0IHtcclxuICAgIHBhZGRpbmc6IDAgMC41ZW07XHJcbn1cclxuXHJcbi50b2FzdC10eXBlLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udG9hc3QtdHlwZS1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuIl19 */"];



/***/ }),

/***/ "./projects/umbra-messaging/src/lib/umbra-toast/umbra-toast.component.ngfactory.js":
/*!*****************************************************************************************!*\
  !*** ./projects/umbra-messaging/src/lib/umbra-toast/umbra-toast.component.ngfactory.js ***!
  \*****************************************************************************************/
/*! exports provided: RenderType_UmbraToastComponent, View_UmbraToastComponent_0, View_UmbraToastComponent_Host_0, UmbraToastComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_UmbraToastComponent", function() { return RenderType_UmbraToastComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UmbraToastComponent_0", function() { return View_UmbraToastComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UmbraToastComponent_Host_0", function() { return View_UmbraToastComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmbraToastComponentNgFactory", function() { return UmbraToastComponentNgFactory; });
/* harmony import */ var _umbra_toast_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./umbra-toast.component.css.shim.ngstyle */ "./projects/umbra-messaging/src/lib/umbra-toast/umbra-toast.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_angular_material_progress_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/progress-bar/typings/index.ngfactory */ "./node_modules/@angular/material/progress-bar/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _umbra_toast_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./umbra-toast.component */ "./projects/umbra-messaging/src/lib/umbra-toast/umbra-toast.component.ts");
/* harmony import */ var _shared_classes_toast_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/classes/toast-config */ "./projects/umbra-messaging/src/lib/shared/classes/toast-config.ts");
/* harmony import */ var _shared_classes_toast_ref__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/classes/toast-ref */ "./projects/umbra-messaging/src/lib/shared/classes/toast-ref.ts");
/* harmony import */ var _shared_services_umbra_toast_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/services/umbra-toast.service */ "./projects/umbra-messaging/src/lib/shared/services/umbra-toast.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_UmbraToastComponent = [_umbra_toast_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_UmbraToastComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_UmbraToastComponent, data: {} });

function View_UmbraToastComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "mat-progress-bar", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["class", "mat-progress-bar"], ["role", "progressbar"]], [[1, "aria-valuenow", 0], [1, "mode", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_progress_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatProgressBar_0"], _node_modules_angular_material_progress_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatProgressBar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4374528, null, 0, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]], [2, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MAT_PROGRESS_BAR_LOCATION"]]], { value: [0, "value"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.progressBarValue; _ck(_v, 1, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode === "indeterminate") || (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode === "query")) ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).value); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._isNoopAnimation; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_UmbraToastComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.close() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["close"]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).inline; var currVal_1 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "warn")); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_UmbraToastComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UmbraToastComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, [[1, 0], ["toast", 1]], null, 17, "div", [["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, [[2, 0], ["dataIcon", 1]], null, 5, "div", [["class", "toast-data-icon"], ["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, [[4, 0], ["text", 1]], null, 3, "div", [["class", "toast-text"], ["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, [[3, 0], ["closeIcon", 1]], null, 4, "div", [["class", "toast-close-icon"], ["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_9__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UmbraToastComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.data.timeout; _ck(_v, 2, 0, currVal_0); var currVal_1 = "row"; _ck(_v, 4, 0, currVal_1); var currVal_2 = "center center"; _ck(_v, 5, 0, currVal_2); var currVal_3 = "column"; _ck(_v, 7, 0, currVal_3); var currVal_4 = "center center"; _ck(_v, 8, 0, currVal_4); _ck(_v, 10, 0); var currVal_8 = "column"; _ck(_v, 13, 0, currVal_8); var currVal_9 = "center center"; _ck(_v, 14, 0, currVal_9); var currVal_11 = "column"; _ck(_v, 17, 0, currVal_11); var currVal_12 = "center center"; _ck(_v, 18, 0, currVal_12); var currVal_13 = _co.data.closable; _ck(_v, 20, 0, currVal_13); }, function (_ck, _v) { var _co = _v.component; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).inline; var currVal_6 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).color !== "warn")); _ck(_v, 9, 0, currVal_5, currVal_6); var currVal_7 = _co.iconType; _ck(_v, 11, 0, currVal_7); var currVal_10 = _co.data.toastData.text; _ck(_v, 15, 0, currVal_10); }); }
function View_UmbraToastComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_UmbraToastComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UmbraToastComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.data.toastData.templateContext; var currVal_1 = _co.data.toastData.template; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_UmbraToastComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { toast: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 2, { dataIcon: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 3, { closeIcon: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 4, { text: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UmbraToastComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["templateRef", 2]], null, 0, null, View_UmbraToastComponent_4))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.data.toastData.text; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6); _ck(_v, 5, 0, currVal_0, currVal_1); }, null); }
function View_UmbraToastComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "umbra-messaging-toast", [], null, null, null, View_UmbraToastComponent_0, RenderType_UmbraToastComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4440064, null, 0, _umbra_toast_component__WEBPACK_IMPORTED_MODULE_10__["UmbraToastComponent"], [_shared_classes_toast_config__WEBPACK_IMPORTED_MODULE_11__["ToastConfig"], _shared_classes_toast_ref__WEBPACK_IMPORTED_MODULE_12__["ToastRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _shared_services_umbra_toast_service__WEBPACK_IMPORTED_MODULE_13__["UmbraToastService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var UmbraToastComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("umbra-messaging-toast", _umbra_toast_component__WEBPACK_IMPORTED_MODULE_10__["UmbraToastComponent"], View_UmbraToastComponent_Host_0, {}, {}, []);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lib_lib_shared_classes_common_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/lib/shared/classes/common-functions */ "./projects/umbra-messaging/src/lib/shared/classes/common-functions.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class UmbraToastComponent {
    constructor(data, toastRef, renderer, umbraToastService, changeDetectorRef) {
        this.data = data;
        this.toastRef = toastRef;
        this.renderer = renderer;
        this.umbraToastService = umbraToastService;
        this.changeDetectorRef = changeDetectorRef;
        this.toastConfig = data;
        this.iconType = data.toastData.type === 'success' ? 'done' : data.toastData.type;
    }
    ngOnInit() {
        if (Object(lib_lib_shared_classes_common_functions__WEBPACK_IMPORTED_MODULE_1__["isDefAndNotNull"])(this.data.timeout)) {
            this.progressBarValue = 100;
            const timeoutSub$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).subscribe((seconds) => {
                this.progressBarValue = 100 - seconds * 100 / (this.data.timeout / 1000);
                this.changeDetectorRef.markForCheck();
                if (seconds >= (this.data.timeout / 1000)) {
                    this.close();
                    timeoutSub$.unsubscribe();
                }
            });
        }
    }
    ngAfterViewInit() {
        this.renderer.addClass(this.toast.nativeElement, 'toast');
        this.renderer.addClass(this.toast.nativeElement, 'toast-type-' + this.toastConfig.toastData.type);
        this.renderer.addClass(this.dataIcon.nativeElement, 'toast-data-icon-' + this.toastConfig.toastData.type);
        this.renderer.addClass(this.closeIcon.nativeElement, 'toast-close-icon-' + this.toastConfig.toastData.type);
    }
    ngOnDestroy() {
        // NO-OP.
    }
    close() {
        this.umbraToastService.closeToast(this.toastRef);
    }
}


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
class UmbraToastModule {
}


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _projects_umbra_messaging_src_lib_umbra_inline_umbra_inline_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projects/umbra-messaging/src/lib/umbra-inline/umbra-inline.component.ngfactory */ "./projects/umbra-messaging/src/lib/umbra-inline/umbra-inline.component.ngfactory.js");
/* harmony import */ var _projects_umbra_messaging_src_lib_umbra_inline_umbra_inline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../projects/umbra-messaging/src/lib/umbra-inline/umbra-inline.component */ "./projects/umbra-messaging/src/lib/umbra-inline/umbra-inline.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_umbra_messaging_src_lib_shared_services_umbra_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../projects/umbra-messaging/src/lib/shared/services/umbra-toast.service */ "./projects/umbra-messaging/src/lib/shared/services/umbra-toast.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showWarningToast() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Show warning toast"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showInfoToast() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Show info toast"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showSuccessToast() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Show success toast"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeAll() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Close all toasts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "umbra-messaging-inline", [], null, null, null, _projects_umbra_messaging_src_lib_umbra_inline_umbra_inline_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_UmbraInlineComponent_0"], _projects_umbra_messaging_src_lib_umbra_inline_umbra_inline_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_UmbraInlineComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 114688, null, 0, _projects_umbra_messaging_src_lib_umbra_inline_umbra_inline_component__WEBPACK_IMPORTED_MODULE_3__["UmbraInlineComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 9, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "umbra-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], [_projects_umbra_messaging_src_lib_shared_services_umbra_toast_service__WEBPACK_IMPORTED_MODULE_5__["UmbraToastService"]], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("umbra-root", _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"];



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
/* harmony import */ var lib_lib_shared_classes_toast_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/lib/shared/classes/toast-config */ "./projects/umbra-messaging/src/lib/shared/classes/toast-config.ts");

class AppComponent {
    constructor(umbraToastService) {
        this.umbraToastService = umbraToastService;
        this.umbraMessages = [];
        this.umbraMessages.push({
            summary: 'AHHHHHH',
            type: 'success'
        });
    }
    showWarningToast() {
        this.umbraToastService.showToast(Object.assign({}, lib_lib_shared_classes_toast_config__WEBPACK_IMPORTED_MODULE_0__["defaultToastConfig"], {
            verticalPosition: 'top',
            horizontalPosition: 'right',
            position: {
                top: 50
            },
            closable: false,
            toastData: {
                text: 'Oh no! There was an error in the system!',
                type: 'warning',
            }
        }));
    }
    showInfoToast() {
        this.umbraToastService.showToast(Object.assign({}, lib_lib_shared_classes_toast_config__WEBPACK_IMPORTED_MODULE_0__["defaultToastConfig"], {
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            timeout: 5000,
            toastData: {
                text: 'Just wanted to inform you there is a wall there.',
                type: 'info',
            }
        }));
    }
    showSuccessToast() {
        this.umbraToastService.showToast(Object.assign({}, lib_lib_shared_classes_toast_config__WEBPACK_IMPORTED_MODULE_0__["defaultToastConfig"], {
            verticalPosition: 'top',
            horizontalPosition: 'left',
            toastData: {
                text: 'We did it!',
                type: 'success',
            }
        }));
    }
    closeAll() {
        this.umbraToastService.closeAllToasts();
    }
}


/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_umbra_messaging_src_lib_umbra_toast_umbra_toast_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../projects/umbra-messaging/src/lib/umbra-toast/umbra-toast.component.ngfactory */ "./projects/umbra-messaging/src/lib/umbra-toast/umbra-toast.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm2015/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _projects_umbra_messaging_src_lib_shared_services_umbra_toast_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../projects/umbra-messaging/src/lib/shared/services/umbra-toast.service */ "./projects/umbra-messaging/src/lib/shared/services/umbra-toast.service.ts");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/grid */ "./node_modules/@angular/flex-layout/esm2015/grid.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _projects_umbra_messaging_src_lib_umbra_toast_umbra_toast_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../projects/umbra-messaging/src/lib/umbra-toast/umbra-toast.module */ "./projects/umbra-messaging/src/lib/umbra-toast/umbra-toast.module.ts");
/* harmony import */ var _projects_umbra_messaging_src_lib_umbra_inline_umbra_inline_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../projects/umbra-messaging/src/lib/umbra-inline/umbra-inline.module */ "./projects/umbra-messaging/src/lib/umbra-inline/umbra-inline.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


























var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_projects_umbra_messaging_src_lib_umbra_toast_umbra_toast_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["UmbraToastComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_common_k"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_bb"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_s"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_g"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_9__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["removeStyles"](p0_0, p0_1)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _projects_umbra_messaging_src_lib_shared_services_umbra_toast_service__WEBPACK_IMPORTED_MODULE_13__["UmbraToastService"], _projects_umbra_messaging_src_lib_shared_services_umbra_toast_service__WEBPACK_IMPORTED_MODULE_13__["UmbraToastService"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_platform_browser_platform_browser_m"](p0_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_14__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_14__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_21__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_21__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__["FlexLayoutModule"], [[2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_12__["SERVER_TOKEN"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _projects_umbra_messaging_src_lib_umbra_toast_umbra_toast_module__WEBPACK_IMPORTED_MODULE_24__["UmbraToastModule"], _projects_umbra_messaging_src_lib_umbra_toast_umbra_toast_module__WEBPACK_IMPORTED_MODULE_24__["UmbraToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _projects_umbra_messaging_src_lib_umbra_inline_umbra_inline_module__WEBPACK_IMPORTED_MODULE_25__["UmbraInlineModule"], _projects_umbra_messaging_src_lib_umbra_inline_umbra_inline_module__WEBPACK_IMPORTED_MODULE_25__["UmbraInlineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"], "root", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", [])]); });



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
class AppModule {
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_3__["AppModuleNgFactory"])
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