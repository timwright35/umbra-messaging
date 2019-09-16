import { __spread } from 'tslib';
import { ɵɵelement, ɵɵnextContext, ɵɵproperty, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵtext, ɵɵelementEnd, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵselect, ɵɵtextInterpolate, ɵɵtextInterpolate1, ɵɵelementContainer, ɵɵdirectiveInject, Renderer2, ChangeDetectorRef, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵtemplateRefExtractor, ɵɵreference, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewChild, ɵɵdefineInjectable, ɵɵinject, Injector, Injectable, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵpureFunction1, ɵɵpureFunction6, Input } from '@angular/core';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { isDefAndNotNull as isDefAndNotNull$1 } from 'lib/lib/shared/classes/common-functions';
import { interval } from 'rxjs';
import { NgIf, NgTemplateOutlet, CommonModule, NgForOf, NgClass } from '@angular/common';
import { DefaultLayoutDirective, DefaultLayoutAlignDirective } from '@angular/flex-layout/flex';
import { MatIcon, MatProgressBar, MatIconModule, MatProgressBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DefaultClassDirective } from '@angular/flex-layout/extended';

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
    ɵɵelement(0, "mat-progress-bar", _c16);
} if (rf & 2) {
    var ctx_r33 = ɵɵnextContext(2);
    ɵɵproperty("value", ctx_r33.progressBarValue);
} }
var _c17 = [3, "click"];
function UmbraToastComponent_ng_container_0_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    var _r40 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-icon", _c17);
    ɵɵlistener("click", function UmbraToastComponent_ng_container_0_mat_icon_13_Template_mat_icon_click_0_listener($event) { ɵɵrestoreView(_r40); var ctx_r39 = ɵɵnextContext(2); return ctx_r39.close(); });
    ɵɵtext(1, "close");
    ɵɵelementEnd();
} }
function UmbraToastComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, UmbraToastComponent_ng_container_0_mat_progress_bar_1_Template, 1, 1, "mat-progress-bar", _c6);
    ɵɵelementStart(2, "div", _c7, _c8);
    ɵɵelementStart(4, "div", _c9, _c10);
    ɵɵelementStart(6, "mat-icon");
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", _c11, _c12);
    ɵɵtext(10);
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", _c13, _c14);
    ɵɵtemplate(13, UmbraToastComponent_ng_container_0_mat_icon_13_Template, 2, 0, "mat-icon", _c15);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r30 = ɵɵnextContext();
    ɵɵselect(1);
    ɵɵproperty("ngIf", ctx_r30.data.timeout);
    ɵɵselect(7);
    ɵɵtextInterpolate(ctx_r30.iconType);
    ɵɵselect(10);
    ɵɵtextInterpolate1(" ", ctx_r30.data.toastData.text, " ");
    ɵɵselect(13);
    ɵɵproperty("ngIf", ctx_r30.data.closable);
} }
var _c18 = [4, "ngTemplateOutlet", "ngTemplateOutletContext"];
function UmbraToastComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function UmbraToastComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, UmbraToastComponent_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", _c18);
} if (rf & 2) {
    var ctx_r32 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r32.data.toastData.template)("ngTemplateOutletContext", ctx_r32.data.toastData.templateContext);
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
        if (isDefAndNotNull$1(this.data.timeout)) {
            this.progressBarValue = 100;
            var timeoutSub$_1 = interval(1000).subscribe(function (seconds) {
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
    /** @nocollapse */ UmbraToastComponent.ngFactoryDef = function UmbraToastComponent_Factory(t) { return new (t || UmbraToastComponent)(ɵɵdirectiveInject(ToastConfig), ɵɵdirectiveInject(ToastRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(UmbraToastService), ɵɵdirectiveInject(ChangeDetectorRef)); };
    /** @nocollapse */ UmbraToastComponent.ngComponentDef = ɵɵdefineComponent({ type: UmbraToastComponent, selectors: [["umbra-messaging-toast"]], viewQuery: function UmbraToastComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0, true);
            ɵɵviewQuery(_c1, true);
            ɵɵviewQuery(_c2, true);
            ɵɵviewQuery(_c3, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh((_t = ɵɵloadQuery())) && (ctx.toast = _t.first);
            ɵɵqueryRefresh((_t = ɵɵloadQuery())) && (ctx.dataIcon = _t.first);
            ɵɵqueryRefresh((_t = ɵɵloadQuery())) && (ctx.closeIcon = _t.first);
            ɵɵqueryRefresh((_t = ɵɵloadQuery())) && (ctx.text = _t.first);
        } }, consts: 3, vars: 2, template: function UmbraToastComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, UmbraToastComponent_ng_container_0_Template, 14, 4, "ng-container", _c4);
            ɵɵtemplate(1, UmbraToastComponent_ng_template_1_Template, 1, 2, "ng-template", null, _c5, ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            var _r31 = ɵɵreference(2);
            ɵɵproperty("ngIf", ctx.data.toastData.text)("ngIfElse", _r31);
        } }, directives: [NgIf, DefaultLayoutDirective, DefaultLayoutAlignDirective, MatIcon, MatProgressBar, NgTemplateOutlet], styles: [".toast[_ngcontent-%COMP%]{background:#fff;border-width:1px;border-style:solid;border-color:#ddd #d6d6d6 #cfcfcf;box-shadow:0 2px 4px rgba(0,0,0,.11);min-height:1em;height:3em}.toast-close-icon[_ngcontent-%COMP%], .toast-data-icon[_ngcontent-%COMP%]{padding:0 .5em}.toast-data-icon[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{border-radius:15px;padding:1px;border:1px solid #000}.toast-data-icon-success[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{background-color:#20b2aa}.toast-data-icon-warning[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{background-color:#dd8900}.toast-data-icon-info[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{background-color:#749aa8}.toast-close-icon[_ngcontent-%COMP%]{cursor:pointer}.toast-close-icon-success[_ngcontent-%COMP%]{background-color:#00b173;height:100%;border-left:3px solid #2e8b57}.toast-close-icon-warning[_ngcontent-%COMP%]{background-color:#dd8900;height:100%;border-left:3px solid #f09c00}.toast-close-icon-info[_ngcontent-%COMP%]{background-color:#749aa8;height:100%;border-left:3px solid #557a88}.toast-type-success[_ngcontent-%COMP%]{background-color:green;color:#fff}.toast-text[_ngcontent-%COMP%]{padding:0 .5em}.toast-type-warning[_ngcontent-%COMP%]{background-color:orange;color:#fff}.toast-type-info[_ngcontent-%COMP%]{background-color:#add8e6;color:#fff}"], changeDetection: 0 });
    return UmbraToastComponent;
}());
/*@__PURE__*/ ɵsetClassMetadata(UmbraToastComponent, [{
        type: Component,
        args: [{
                selector: 'umbra-messaging-toast',
                templateUrl: './umbra-toast.component.html',
                styleUrls: ['./umbra-toast.component.css'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ToastConfig }, { type: ToastRef }, { type: Renderer2 }, { type: UmbraToastService }, { type: ChangeDetectorRef }]; }, { toast: [{
            type: ViewChild,
            args: ['toast', { static: false }]
        }], dataIcon: [{
            type: ViewChild,
            args: ['dataIcon', { static: false }]
        }], closeIcon: [{
            type: ViewChild,
            args: ['closeIcon', { static: false }]
        }], text: [{
            type: ViewChild,
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
        var toastPortal = new ComponentPortal(UmbraToastComponent, null, injector);
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
        return new PortalInjector(parentInjector, tokens);
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
    /** @nocollapse */ UmbraToastService.ngInjectableDef = ɵɵdefineInjectable({ token: UmbraToastService, factory: function UmbraToastService_Factory(t) { return new (t || UmbraToastService)(ɵɵinject(Overlay), ɵɵinject(Injector)); }, providedIn: null });
    return UmbraToastService;
}());
/*@__PURE__*/ ɵsetClassMetadata(UmbraToastService, [{
        type: Injectable
    }], function () { return [{ type: Overlay }, { type: Injector }]; }, null);

var UmbraToastModule = /** @class */ (function () {
    function UmbraToastModule() {
    }
    /** @nocollapse */ UmbraToastModule.ngModuleDef = ɵɵdefineNgModule({ type: UmbraToastModule });
    /** @nocollapse */ UmbraToastModule.ngInjectorDef = ɵɵdefineInjector({ factory: function UmbraToastModule_Factory(t) { return new (t || UmbraToastModule)(); }, providers: [UmbraToastService], imports: [[
                CommonModule,
                OverlayModule,
                MatIconModule,
                FlexLayoutModule,
                MatProgressBarModule
            ]] });
    return UmbraToastModule;
}());
/*@__PURE__*/ ɵɵsetNgModuleScope(UmbraToastModule, { declarations: [UmbraToastComponent], imports: [CommonModule,
        OverlayModule,
        MatIconModule,
        FlexLayoutModule,
        MatProgressBarModule] });
/*@__PURE__*/ ɵsetClassMetadata(UmbraToastModule, [{
        type: NgModule,
        args: [{
                declarations: [UmbraToastComponent],
                imports: [
                    CommonModule,
                    OverlayModule,
                    MatIconModule,
                    FlexLayoutModule,
                    MatProgressBarModule
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
    ɵɵelementContainer(0);
} }
var _c6$1 = function (a0) { return { message: a0 }; };
function UmbraInlineComponent_ng_template_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, UmbraInlineComponent_ng_template_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", _c5$1);
} if (rf & 2) {
    var message_r48 = ctx.$implicit;
    ɵɵnextContext(2);
    var _r45 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", _r45)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c6$1, message_r48));
} }
function UmbraInlineComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, UmbraInlineComponent_ng_template_1_ng_template_0_Template, 1, 4, "ng-template", _c4$1);
} if (rf & 2) {
    var ctx_r42 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ctx_r42.umbraMessages);
} }
var _c7$1 = [1, "umbra-inline-group-message-container"];
function UmbraInlineComponent_ng_template_2_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function UmbraInlineComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, UmbraInlineComponent_ng_template_2_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", _c5$1);
} if (rf & 2) {
    var message_r51 = ctx.$implicit;
    ɵɵnextContext(2);
    var _r45 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", _r45)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c6$1, message_r51));
} }
function UmbraInlineComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", _c7$1);
    ɵɵtemplate(1, UmbraInlineComponent_ng_template_2_ng_template_1_Template, 1, 4, "ng-template", _c4$1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r44 = ɵɵnextContext();
    ɵɵselect(1);
    ɵɵproperty("ngForOf", ctx_r44.umbraMessages);
} }
var _c8$1 = [3, "ngClass"];
var _c9$1 = ["class", "umbra-inline-group-message-icon", 4, "ngIf"];
var _c10$1 = ["class", "umbra-inline-group-message-title", 4, "ngIf"];
var _c11$1 = ["class", "umbra-inline-group-message-summary", 4, "ngIf"];
var _c12$1 = [1, "umbra-inline-group-message-icon"];
function UmbraInlineComponent_ng_template_4_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", _c12$1);
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var message_r53 = ɵɵnextContext().message;
    ɵɵselect(2);
    ɵɵtextInterpolate(message_r53["icon"]);
} }
var _c13$1 = [1, "umbra-inline-group-message-title"];
function UmbraInlineComponent_ng_template_4_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", _c13$1);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var message_r53 = ɵɵnextContext().message;
    ɵɵselect(1);
    ɵɵtextInterpolate1("", message_r53["title"], ":");
} }
var _c14$1 = [1, "umbra-inline-group-message-summary"];
function UmbraInlineComponent_ng_template_4_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", _c14$1);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var message_r53 = ɵɵnextContext().message;
    ɵɵselect(1);
    ɵɵtextInterpolate1(" ", message_r53["summary"], "");
} }
var _c15$1 = function (a0, a1, a2, a3, a4, a5) { return { "umbra-inline-group-message": a0, "umbra-inline-message": a1, "umbra-messaging-error": a2, "umbra-messaging-info": a3, "umbra-messaging-warning": a4, "umbra-messaging-success": a5 }; };
function UmbraInlineComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", _c8$1);
    ɵɵtemplate(1, UmbraInlineComponent_ng_template_4_span_1_Template, 3, 1, "span", _c9$1);
    ɵɵtemplate(2, UmbraInlineComponent_ng_template_4_span_2_Template, 2, 1, "span", _c10$1);
    ɵɵtemplate(3, UmbraInlineComponent_ng_template_4_span_3_Template, 2, 1, "span", _c11$1);
    ɵɵelementEnd();
} if (rf & 2) {
    var message_r53 = ctx.message;
    var ctx_r46 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction6(4, _c15$1, ctx_r46.groupMessages, !ctx_r46.groupMessages, message_r53["type"] === "error", message_r53["type"] === "info", message_r53["type"] === "warning", message_r53["type"] === "success"));
    ɵɵselect(1);
    ɵɵproperty("ngIf", message_r53["icon"]);
    ɵɵselect(2);
    ɵɵproperty("ngIf", message_r53["title"]);
    ɵɵselect(3);
    ɵɵproperty("ngIf", message_r53["summary"]);
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
    /** @nocollapse */ UmbraInlineComponent.ngComponentDef = ɵɵdefineComponent({ type: UmbraInlineComponent, selectors: [["umbra-messaging-inline"]], inputs: { umbraMessages: "umbraMessages", groupMessages: "groupMessages", shouldTimeout: "shouldTimeout", setTimeout: "setTimeout" }, consts: 6, vars: 2, template: function UmbraInlineComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", _c0$1);
            ɵɵtemplate(1, UmbraInlineComponent_ng_template_1_Template, 1, 1, "ng-template", _c1$1);
            ɵɵtemplate(2, UmbraInlineComponent_ng_template_2_Template, 2, 1, "ng-template", null, _c2$1, ɵɵtemplateRefExtractor);
            ɵɵelementEnd();
            ɵɵtemplate(4, UmbraInlineComponent_ng_template_4_Template, 4, 11, "ng-template", null, _c3$1, ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            var _r43 = ɵɵreference(3);
            ɵɵselect(1);
            ɵɵproperty("ngIf", !ctx.groupMessages)("ngIfElse", _r43);
        } }, directives: [NgIf, NgForOf, NgTemplateOutlet, DefaultClassDirective, NgClass, MatIcon], styles: [".umbra-inline-message[_ngcontent-%COMP%]{border-radius:5px;padding:10px;margin-top:2px;border:1px solid #000}.umbra-inline-group-message-container[_ngcontent-%COMP%]{border-radius:5px;border:1px solid #000}.umbra-inline-group-message[_ngcontent-%COMP%]{padding:10px}.umbra-inline-group-message-title[_ngcontent-%COMP%]{font-weight:700}.umbra-messaging-error[_ngcontent-%COMP%]{background-color:red}.umbra-messaging-warning[_ngcontent-%COMP%]{background-color:orange}.umbra-messaging-success[_ngcontent-%COMP%]{background-color:green}.umbra-messaging-info[_ngcontent-%COMP%]{background-color:#add8e6}"], changeDetection: 0 });
    return UmbraInlineComponent;
}());
/*@__PURE__*/ ɵsetClassMetadata(UmbraInlineComponent, [{
        type: Component,
        args: [{
                selector: 'umbra-messaging-inline',
                templateUrl: './umbra-inline.component.html',
                styleUrls: ['./umbra-inline.component.css'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { umbraMessages: [{
            type: Input
        }], groupMessages: [{
            type: Input
        }], shouldTimeout: [{
            type: Input
        }], setTimeout: [{
            type: Input
        }] });

var UmbraInlineModule = /** @class */ (function () {
    function UmbraInlineModule() {
    }
    /** @nocollapse */ UmbraInlineModule.ngModuleDef = ɵɵdefineNgModule({ type: UmbraInlineModule });
    /** @nocollapse */ UmbraInlineModule.ngInjectorDef = ɵɵdefineInjector({ factory: function UmbraInlineModule_Factory(t) { return new (t || UmbraInlineModule)(); }, imports: [[
                MatIconModule,
                FlexLayoutModule,
                CommonModule
            ]] });
    return UmbraInlineModule;
}());
/*@__PURE__*/ ɵɵsetNgModuleScope(UmbraInlineModule, { declarations: [UmbraInlineComponent], imports: [MatIconModule,
        FlexLayoutModule,
        CommonModule], exports: [UmbraInlineComponent] });
/*@__PURE__*/ ɵsetClassMetadata(UmbraInlineModule, [{
        type: NgModule,
        args: [{
                declarations: [UmbraInlineComponent],
                imports: [
                    MatIconModule,
                    FlexLayoutModule,
                    CommonModule
                ],
                exports: [UmbraInlineComponent]
            }]
    }], null, null);

/*
 * Public API Surface of umbra-messaging
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DEFAULT_MARGIN, ToastConfig, ToastData, UmbraInlineComponent, UmbraInlineModule, UmbraToastComponent, UmbraToastModule, UmbraToastService, defaultToastConfig };
//# sourceMappingURL=umbra-messaging.js.map
