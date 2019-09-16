(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('lib/lib/shared/classes/common-functions'), require('rxjs'), require('@angular/common'), require('@angular/flex-layout/flex'), require('@angular/material'), require('@angular/flex-layout'), require('@angular/flex-layout/extended')) :
    typeof define === 'function' && define.amd ? define('umbra-messaging', ['exports', '@angular/core', '@angular/cdk/overlay', '@angular/cdk/portal', 'lib/lib/shared/classes/common-functions', 'rxjs', '@angular/common', '@angular/flex-layout/flex', '@angular/material', '@angular/flex-layout', '@angular/flex-layout/extended'], factory) :
    (global = global || self, factory(global['umbra-messaging'] = {}, global.ng.core, global.ng.cdk.overlay, global.ng.cdk.portal, global.commonFunctions, global.rxjs, global.ng.common, global.ng['flex-layout'].flex, global.ng.material, global.ng['flex-layout'], global.ng['flex-layout'].extended));
}(this, function (exports, core, overlay, portal, commonFunctions, rxjs, common, flex, material, flexLayout, extended) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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

    var ToastData = /** @class */ (function () {
        function ToastData() {
        }
        return ToastData;
    }());
    var ToastConfig = /** @class */ (function () {
        function ToastConfig() {
        }
        return ToastConfig;
    }());
    var defaultToastConfig = {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        closable: true,
        position: {},
        toastData: {
            type: 'success'
        }
    };
    var DEFAULT_MARGIN = 25;

    var _c0 = ["toast"];
    var _c1 = ["dataIcon"];
    var _c2 = ["closeIcon"];
    var _c3 = ["text"];
    var _c4 = [4, "ngIf", "ngIfElse"];
    var _c5 = ["templateRef", ""];
    var _c6 = [3, "value", 4, "ngIf"];
    var _c7 = ["fxLayout", "row", "fxLayoutAlign", "center center"];
    var _c8 = ["toast", ""];
    var _c9 = ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "toast-data-icon"];
    var _c10 = ["dataIcon", ""];
    var _c11 = ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "toast-text"];
    var _c12 = ["text", ""];
    var _c13 = ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "toast-close-icon"];
    var _c14 = ["closeIcon", ""];
    var _c15 = [3, "click", 4, "ngIf"];
    var _c16 = [3, "value"];
    function UmbraToastComponent_ng_container_0_mat_progress_bar_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "mat-progress-bar", _c16);
    } if (rf & 2) {
        var ctx_r33 = core.ɵɵnextContext(2);
        core.ɵɵproperty("value", ctx_r33.progressBarValue);
    } }
    var _c17 = [3, "click"];
    function UmbraToastComponent_ng_container_0_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
        var _r40 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-icon", _c17);
        core.ɵɵlistener("click", function UmbraToastComponent_ng_container_0_mat_icon_13_Template_mat_icon_click_0_listener($event) { core.ɵɵrestoreView(_r40); var ctx_r39 = core.ɵɵnextContext(2); return ctx_r39.close(); });
        core.ɵɵtext(1, "close");
        core.ɵɵelementEnd();
    } }
    function UmbraToastComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, UmbraToastComponent_ng_container_0_mat_progress_bar_1_Template, 1, 1, "mat-progress-bar", _c6);
        core.ɵɵelementStart(2, "div", _c7, _c8);
        core.ɵɵelementStart(4, "div", _c9, _c10);
        core.ɵɵelementStart(6, "mat-icon");
        core.ɵɵtext(7);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(8, "div", _c11, _c12);
        core.ɵɵtext(10);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(11, "div", _c13, _c14);
        core.ɵɵtemplate(13, UmbraToastComponent_ng_container_0_mat_icon_13_Template, 2, 0, "mat-icon", _c15);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r30 = core.ɵɵnextContext();
        core.ɵɵselect(1);
        core.ɵɵproperty("ngIf", ctx_r30.data.timeout);
        core.ɵɵselect(7);
        core.ɵɵtextInterpolate(ctx_r30.iconType);
        core.ɵɵselect(10);
        core.ɵɵtextInterpolate1(" ", ctx_r30.data.toastData.text, " ");
        core.ɵɵselect(13);
        core.ɵɵproperty("ngIf", ctx_r30.data.closable);
    } }
    var _c18 = [4, "ngTemplateOutlet", "ngTemplateOutletContext"];
    function UmbraToastComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    function UmbraToastComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, UmbraToastComponent_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", _c18);
    } if (rf & 2) {
        var ctx_r32 = core.ɵɵnextContext();
        core.ɵɵproperty("ngTemplateOutlet", ctx_r32.data.toastData.template)("ngTemplateOutletContext", ctx_r32.data.toastData.templateContext);
    } }
    var UmbraToastComponent = /** @class */ (function () {
        function UmbraToastComponent(data, toastRef, renderer, umbraToastService, changeDetectorRef) {
            this.data = data;
            this.toastRef = toastRef;
            this.renderer = renderer;
            this.umbraToastService = umbraToastService;
            this.changeDetectorRef = changeDetectorRef;
            this.toastConfig = data;
            this.iconType = data.toastData.type === 'success' ? 'done' : data.toastData.type;
        }
        UmbraToastComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (commonFunctions.isDefAndNotNull(this.data.timeout)) {
                this.progressBarValue = 100;
                var timeoutSub$_1 = rxjs.interval(1000).subscribe(function (seconds) {
                    _this.progressBarValue = 100 - seconds * 100 / (_this.data.timeout / 1000);
                    _this.changeDetectorRef.markForCheck();
                    if (seconds >= (_this.data.timeout / 1000)) {
                        _this.close();
                        timeoutSub$_1.unsubscribe();
                    }
                });
            }
        };
        UmbraToastComponent.prototype.ngAfterViewInit = function () {
            this.renderer.addClass(this.toast.nativeElement, 'toast');
            this.renderer.addClass(this.toast.nativeElement, 'toast-type-' + this.toastConfig.toastData.type);
            this.renderer.addClass(this.dataIcon.nativeElement, 'toast-data-icon-' + this.toastConfig.toastData.type);
            this.renderer.addClass(this.closeIcon.nativeElement, 'toast-close-icon-' + this.toastConfig.toastData.type);
        };
        UmbraToastComponent.prototype.ngOnDestroy = function () {
            // NO-OP.
        };
        UmbraToastComponent.prototype.close = function () {
            this.umbraToastService.closeToast(this.toastRef);
        };
        /** @nocollapse */ UmbraToastComponent.ngFactoryDef = function UmbraToastComponent_Factory(t) { return new (t || UmbraToastComponent)(core.ɵɵdirectiveInject(ToastConfig), core.ɵɵdirectiveInject(ToastRef), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(UmbraToastService), core.ɵɵdirectiveInject(core.ChangeDetectorRef)); };
        /** @nocollapse */ UmbraToastComponent.ngComponentDef = core.ɵɵdefineComponent({ type: UmbraToastComponent, selectors: [["umbra-messaging-toast"]], viewQuery: function UmbraToastComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0, true);
                core.ɵɵviewQuery(_c1, true);
                core.ɵɵviewQuery(_c2, true);
                core.ɵɵviewQuery(_c3, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh((_t = core.ɵɵloadQuery())) && (ctx.toast = _t.first);
                core.ɵɵqueryRefresh((_t = core.ɵɵloadQuery())) && (ctx.dataIcon = _t.first);
                core.ɵɵqueryRefresh((_t = core.ɵɵloadQuery())) && (ctx.closeIcon = _t.first);
                core.ɵɵqueryRefresh((_t = core.ɵɵloadQuery())) && (ctx.text = _t.first);
            } }, consts: 3, vars: 2, template: function UmbraToastComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, UmbraToastComponent_ng_container_0_Template, 14, 4, "ng-container", _c4);
                core.ɵɵtemplate(1, UmbraToastComponent_ng_template_1_Template, 1, 2, "ng-template", null, _c5, core.ɵɵtemplateRefExtractor);
            } if (rf & 2) {
                var _r31 = core.ɵɵreference(2);
                core.ɵɵproperty("ngIf", ctx.data.toastData.text)("ngIfElse", _r31);
            } }, directives: [common.NgIf, flex.DefaultLayoutDirective, flex.DefaultLayoutAlignDirective, material.MatIcon, material.MatProgressBar, common.NgTemplateOutlet], styles: [".toast[_ngcontent-%COMP%]{background:#fff;border-width:1px;border-style:solid;border-color:#ddd #d6d6d6 #cfcfcf;box-shadow:0 2px 4px rgba(0,0,0,.11);min-height:1em;height:3em}.toast-close-icon[_ngcontent-%COMP%], .toast-data-icon[_ngcontent-%COMP%]{padding:0 .5em}.toast-data-icon[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{border-radius:15px;padding:1px;border:1px solid #000}.toast-data-icon-success[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{background-color:#20b2aa}.toast-data-icon-warning[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{background-color:#dd8900}.toast-data-icon-info[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{background-color:#749aa8}.toast-close-icon[_ngcontent-%COMP%]{cursor:pointer}.toast-close-icon-success[_ngcontent-%COMP%]{background-color:#00b173;height:100%;border-left:3px solid #2e8b57}.toast-close-icon-warning[_ngcontent-%COMP%]{background-color:#dd8900;height:100%;border-left:3px solid #f09c00}.toast-close-icon-info[_ngcontent-%COMP%]{background-color:#749aa8;height:100%;border-left:3px solid #557a88}.toast-type-success[_ngcontent-%COMP%]{background-color:green;color:#fff}.toast-text[_ngcontent-%COMP%]{padding:0 .5em}.toast-type-warning[_ngcontent-%COMP%]{background-color:orange;color:#fff}.toast-type-info[_ngcontent-%COMP%]{background-color:#add8e6;color:#fff}"], changeDetection: 0 });
        return UmbraToastComponent;
    }());
    /*@__PURE__*/ core.ɵsetClassMetadata(UmbraToastComponent, [{
            type: core.Component,
            args: [{
                    selector: 'umbra-messaging-toast',
                    templateUrl: './umbra-toast.component.html',
                    styleUrls: ['./umbra-toast.component.css'],
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                }]
        }], function () { return [{ type: ToastConfig }, { type: ToastRef }, { type: core.Renderer2 }, { type: UmbraToastService }, { type: core.ChangeDetectorRef }]; }, { toast: [{
                type: core.ViewChild,
                args: ['toast', { static: false }]
            }], dataIcon: [{
                type: core.ViewChild,
                args: ['dataIcon', { static: false }]
            }], closeIcon: [{
                type: core.ViewChild,
                args: ['closeIcon', { static: false }]
            }], text: [{
                type: core.ViewChild,
                args: ['text', { static: false }]
            }] });

    function isDefAndNotNull(value) {
        return value !== undefined && value !== null;
    }

    var UmbraToastService = /** @class */ (function () {
        function UmbraToastService(overlay, parentInjector) {
            this.overlay = overlay;
            this.parentInjector = parentInjector;
            this.openTopToasts = [];
            this.openBottomToasts = [];
        }
        UmbraToastService.prototype.showToast = function (toastConfig) {
            if (toastConfig === null || toastConfig === undefined) {
                toastConfig = defaultToastConfig;
            }
            var overlayPosition = this.getOverlayPosition(toastConfig);
            var overlayRef = this.overlay.create({ positionStrategy: overlayPosition });
            var toastRef = new ToastRef(overlayRef);
            if (toastConfig.verticalPosition === 'top') {
                this.openTopToasts.push(toastRef);
            }
            if (toastConfig.verticalPosition === 'bottom') {
                this.openBottomToasts.push(toastRef);
            }
            var injector = this.getInjector(toastConfig, toastRef, this.parentInjector);
            var toastPortal = new portal.ComponentPortal(UmbraToastComponent, null, injector);
            overlayRef.attach(toastPortal);
            return toastRef;
        };
        UmbraToastService.prototype.closeToast = function (toastRef) {
            this.openTopToasts = this.openTopToasts.filter(function (openToast) {
                if (openToast !== toastRef) {
                    return openToast;
                }
            });
            this.openBottomToasts = this.openBottomToasts.filter(function (openToast) {
                if (openToast !== toastRef) {
                    return openToast;
                }
            });
            toastRef.close();
        };
        UmbraToastService.prototype.closeAllToasts = function () {
            __spread(this.openTopToasts, this.openBottomToasts).forEach(function (toastRef) {
                toastRef.close();
            });
            this.openBottomToasts = [];
            this.openTopToasts = [];
        };
        UmbraToastService.prototype.getInjector = function (data, toastRef, parentInjector) {
            var tokens = new WeakMap();
            tokens.set(ToastConfig, data);
            tokens.set(ToastRef, toastRef);
            return new portal.PortalInjector(parentInjector, tokens);
        };
        UmbraToastService.prototype.getOverlayPosition = function (toastConfig) {
            var overlayPosition = this.overlay.position().global();
            if (toastConfig.verticalPosition === 'center') {
                overlayPosition.centerVertically();
            }
            else {
                if (toastConfig.verticalPosition === 'top') {
                    var lastTopToastHeight = 0;
                    var lastTopToast = void 0;
                    if (this.openTopToasts.length > 0) {
                        lastTopToast = this.openTopToasts[this.openTopToasts.length - 1];
                    }
                    if (isDefAndNotNull(lastTopToast)) {
                        lastTopToastHeight = lastTopToast.getPosition().height;
                    }
                    var calculatedPosition = void 0;
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
                    var lastBottomToastHeight = 0;
                    var lastBottomToast = void 0;
                    if (this.openBottomToasts.length > 0) {
                        lastBottomToast = this.openBottomToasts[this.openBottomToasts.length - 1];
                    }
                    if (isDefAndNotNull(lastBottomToast)) {
                        lastBottomToastHeight = lastBottomToast.getPosition().height;
                    }
                    var calculatedPosition = void 0;
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
                        overlayPosition.right(DEFAULT_MARGIN + 'px');
                    }
                }
                if (toastConfig.horizontalPosition === 'left') {
                    if (toastConfig.position.left) {
                        overlayPosition.left(toastConfig.position.left + 'px');
                    }
                    else {
                        overlayPosition.left(DEFAULT_MARGIN + 'px');
                    }
                }
            }
            return overlayPosition;
        };
        /** @nocollapse */ UmbraToastService.ngInjectableDef = core.ɵɵdefineInjectable({ token: UmbraToastService, factory: function UmbraToastService_Factory(t) { return new (t || UmbraToastService)(core.ɵɵinject(overlay.Overlay), core.ɵɵinject(core.Injector)); }, providedIn: null });
        return UmbraToastService;
    }());
    /*@__PURE__*/ core.ɵsetClassMetadata(UmbraToastService, [{
            type: core.Injectable
        }], function () { return [{ type: overlay.Overlay }, { type: core.Injector }]; }, null);

    var UmbraToastModule = /** @class */ (function () {
        function UmbraToastModule() {
        }
        /** @nocollapse */ UmbraToastModule.ngModuleDef = core.ɵɵdefineNgModule({ type: UmbraToastModule });
        /** @nocollapse */ UmbraToastModule.ngInjectorDef = core.ɵɵdefineInjector({ factory: function UmbraToastModule_Factory(t) { return new (t || UmbraToastModule)(); }, providers: [UmbraToastService], imports: [[
                    common.CommonModule,
                    overlay.OverlayModule,
                    material.MatIconModule,
                    flexLayout.FlexLayoutModule,
                    material.MatProgressBarModule
                ]] });
        return UmbraToastModule;
    }());
    /*@__PURE__*/ core.ɵɵsetNgModuleScope(UmbraToastModule, { declarations: [UmbraToastComponent], imports: [common.CommonModule,
            overlay.OverlayModule,
            material.MatIconModule,
            flexLayout.FlexLayoutModule,
            material.MatProgressBarModule] });
    /*@__PURE__*/ core.ɵsetClassMetadata(UmbraToastModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [UmbraToastComponent],
                    imports: [
                        common.CommonModule,
                        overlay.OverlayModule,
                        material.MatIconModule,
                        flexLayout.FlexLayoutModule,
                        material.MatProgressBarModule
                    ],
                    entryComponents: [UmbraToastComponent],
                    providers: [UmbraToastService]
                }]
        }], null, null);

    var _c0$1 = [1, "umbra-messages-inline"];
    var _c1$1 = [3, "ngIf", "ngIfElse"];
    var _c2$1 = ["groupMessageContainer", ""];
    var _c3$1 = ["inlineMessage", ""];
    var _c4$1 = ["ngFor", "", 3, "ngForOf"];
    var _c5$1 = [4, "ngTemplateOutlet", "ngTemplateOutletContext"];
    function UmbraInlineComponent_ng_template_1_ng_template_0_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    var _c6$1 = function (a0) { return { message: a0 }; };
    function UmbraInlineComponent_ng_template_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, UmbraInlineComponent_ng_template_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", _c5$1);
    } if (rf & 2) {
        var message_r48 = ctx.$implicit;
        core.ɵɵnextContext(2);
        var _r45 = core.ɵɵreference(5);
        core.ɵɵproperty("ngTemplateOutlet", _r45)("ngTemplateOutletContext", core.ɵɵpureFunction1(2, _c6$1, message_r48));
    } }
    function UmbraInlineComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, UmbraInlineComponent_ng_template_1_ng_template_0_Template, 1, 4, "ng-template", _c4$1);
    } if (rf & 2) {
        var ctx_r42 = core.ɵɵnextContext();
        core.ɵɵproperty("ngForOf", ctx_r42.umbraMessages);
    } }
    var _c7$1 = [1, "umbra-inline-group-message-container"];
    function UmbraInlineComponent_ng_template_2_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    function UmbraInlineComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, UmbraInlineComponent_ng_template_2_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", _c5$1);
    } if (rf & 2) {
        var message_r51 = ctx.$implicit;
        core.ɵɵnextContext(2);
        var _r45 = core.ɵɵreference(5);
        core.ɵɵproperty("ngTemplateOutlet", _r45)("ngTemplateOutletContext", core.ɵɵpureFunction1(2, _c6$1, message_r51));
    } }
    function UmbraInlineComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", _c7$1);
        core.ɵɵtemplate(1, UmbraInlineComponent_ng_template_2_ng_template_1_Template, 1, 4, "ng-template", _c4$1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r44 = core.ɵɵnextContext();
        core.ɵɵselect(1);
        core.ɵɵproperty("ngForOf", ctx_r44.umbraMessages);
    } }
    var _c8$1 = [3, "ngClass"];
    var _c9$1 = ["class", "umbra-inline-group-message-icon", 4, "ngIf"];
    var _c10$1 = ["class", "umbra-inline-group-message-title", 4, "ngIf"];
    var _c11$1 = ["class", "umbra-inline-group-message-summary", 4, "ngIf"];
    var _c12$1 = [1, "umbra-inline-group-message-icon"];
    function UmbraInlineComponent_ng_template_4_span_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", _c12$1);
        core.ɵɵelementStart(1, "mat-icon");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var message_r53 = core.ɵɵnextContext().message;
        core.ɵɵselect(2);
        core.ɵɵtextInterpolate(message_r53["icon"]);
    } }
    var _c13$1 = [1, "umbra-inline-group-message-title"];
    function UmbraInlineComponent_ng_template_4_span_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", _c13$1);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var message_r53 = core.ɵɵnextContext().message;
        core.ɵɵselect(1);
        core.ɵɵtextInterpolate1("", message_r53["title"], ":");
    } }
    var _c14$1 = [1, "umbra-inline-group-message-summary"];
    function UmbraInlineComponent_ng_template_4_span_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", _c14$1);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var message_r53 = core.ɵɵnextContext().message;
        core.ɵɵselect(1);
        core.ɵɵtextInterpolate1(" ", message_r53["summary"], "");
    } }
    var _c15$1 = function (a0, a1, a2, a3, a4, a5) { return { "umbra-inline-group-message": a0, "umbra-inline-message": a1, "umbra-messaging-error": a2, "umbra-messaging-info": a3, "umbra-messaging-warning": a4, "umbra-messaging-success": a5 }; };
    function UmbraInlineComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", _c8$1);
        core.ɵɵtemplate(1, UmbraInlineComponent_ng_template_4_span_1_Template, 3, 1, "span", _c9$1);
        core.ɵɵtemplate(2, UmbraInlineComponent_ng_template_4_span_2_Template, 2, 1, "span", _c10$1);
        core.ɵɵtemplate(3, UmbraInlineComponent_ng_template_4_span_3_Template, 2, 1, "span", _c11$1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var message_r53 = ctx.message;
        var ctx_r46 = core.ɵɵnextContext();
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction6(4, _c15$1, ctx_r46.groupMessages, !ctx_r46.groupMessages, message_r53["type"] === "error", message_r53["type"] === "info", message_r53["type"] === "warning", message_r53["type"] === "success"));
        core.ɵɵselect(1);
        core.ɵɵproperty("ngIf", message_r53["icon"]);
        core.ɵɵselect(2);
        core.ɵɵproperty("ngIf", message_r53["title"]);
        core.ɵɵselect(3);
        core.ɵɵproperty("ngIf", message_r53["summary"]);
    } }
    var UmbraInlineComponent = /** @class */ (function () {
        function UmbraInlineComponent() {
            this.umbraMessages = [];
            this.groupMessages = false;
            this.shouldTimeout = false;
            this.setTimeout = 2500;
        }
        UmbraInlineComponent.prototype.ngOnInit = function () {
            if (this.shouldTimeout) {
                // TODO(Tim): Set a timeout on showing the messages.
            }
        };
        /** @nocollapse */ UmbraInlineComponent.ngFactoryDef = function UmbraInlineComponent_Factory(t) { return new (t || UmbraInlineComponent)(); };
        /** @nocollapse */ UmbraInlineComponent.ngComponentDef = core.ɵɵdefineComponent({ type: UmbraInlineComponent, selectors: [["umbra-messaging-inline"]], inputs: { umbraMessages: "umbraMessages", groupMessages: "groupMessages", shouldTimeout: "shouldTimeout", setTimeout: "setTimeout" }, consts: 6, vars: 2, template: function UmbraInlineComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", _c0$1);
                core.ɵɵtemplate(1, UmbraInlineComponent_ng_template_1_Template, 1, 1, "ng-template", _c1$1);
                core.ɵɵtemplate(2, UmbraInlineComponent_ng_template_2_Template, 2, 1, "ng-template", null, _c2$1, core.ɵɵtemplateRefExtractor);
                core.ɵɵelementEnd();
                core.ɵɵtemplate(4, UmbraInlineComponent_ng_template_4_Template, 4, 11, "ng-template", null, _c3$1, core.ɵɵtemplateRefExtractor);
            } if (rf & 2) {
                var _r43 = core.ɵɵreference(3);
                core.ɵɵselect(1);
                core.ɵɵproperty("ngIf", !ctx.groupMessages)("ngIfElse", _r43);
            } }, directives: [common.NgIf, common.NgForOf, common.NgTemplateOutlet, extended.DefaultClassDirective, common.NgClass, material.MatIcon], styles: [".umbra-inline-message[_ngcontent-%COMP%]{border-radius:5px;padding:10px;margin-top:2px;border:1px solid #000}.umbra-inline-group-message-container[_ngcontent-%COMP%]{border-radius:5px;border:1px solid #000}.umbra-inline-group-message[_ngcontent-%COMP%]{padding:10px}.umbra-inline-group-message-title[_ngcontent-%COMP%]{font-weight:700}.umbra-messaging-error[_ngcontent-%COMP%]{background-color:red}.umbra-messaging-warning[_ngcontent-%COMP%]{background-color:orange}.umbra-messaging-success[_ngcontent-%COMP%]{background-color:green}.umbra-messaging-info[_ngcontent-%COMP%]{background-color:#add8e6}"], changeDetection: 0 });
        return UmbraInlineComponent;
    }());
    /*@__PURE__*/ core.ɵsetClassMetadata(UmbraInlineComponent, [{
            type: core.Component,
            args: [{
                    selector: 'umbra-messaging-inline',
                    templateUrl: './umbra-inline.component.html',
                    styleUrls: ['./umbra-inline.component.css'],
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                }]
        }], function () { return []; }, { umbraMessages: [{
                type: core.Input
            }], groupMessages: [{
                type: core.Input
            }], shouldTimeout: [{
                type: core.Input
            }], setTimeout: [{
                type: core.Input
            }] });

    var UmbraInlineModule = /** @class */ (function () {
        function UmbraInlineModule() {
        }
        /** @nocollapse */ UmbraInlineModule.ngModuleDef = core.ɵɵdefineNgModule({ type: UmbraInlineModule });
        /** @nocollapse */ UmbraInlineModule.ngInjectorDef = core.ɵɵdefineInjector({ factory: function UmbraInlineModule_Factory(t) { return new (t || UmbraInlineModule)(); }, imports: [[
                    material.MatIconModule,
                    flexLayout.FlexLayoutModule,
                    common.CommonModule
                ]] });
        return UmbraInlineModule;
    }());
    /*@__PURE__*/ core.ɵɵsetNgModuleScope(UmbraInlineModule, { declarations: [UmbraInlineComponent], imports: [material.MatIconModule,
            flexLayout.FlexLayoutModule,
            common.CommonModule], exports: [UmbraInlineComponent] });
    /*@__PURE__*/ core.ɵsetClassMetadata(UmbraInlineModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [UmbraInlineComponent],
                    imports: [
                        material.MatIconModule,
                        flexLayout.FlexLayoutModule,
                        common.CommonModule
                    ],
                    exports: [UmbraInlineComponent]
                }]
        }], null, null);

    exports.DEFAULT_MARGIN = DEFAULT_MARGIN;
    exports.ToastConfig = ToastConfig;
    exports.ToastData = ToastData;
    exports.UmbraInlineComponent = UmbraInlineComponent;
    exports.UmbraInlineModule = UmbraInlineModule;
    exports.UmbraToastComponent = UmbraToastComponent;
    exports.UmbraToastModule = UmbraToastModule;
    exports.UmbraToastService = UmbraToastService;
    exports.defaultToastConfig = defaultToastConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=umbra-messaging.umd.js.map
