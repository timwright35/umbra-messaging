import { ɵɵelement, ɵɵnextContext, ɵɵproperty, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵtext, ɵɵelementEnd, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵselect, ɵɵtextInterpolate, ɵɵtextInterpolate1, ɵɵelementContainer, ɵɵdirectiveInject, Renderer2, ChangeDetectorRef, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵtemplateRefExtractor, ɵɵreference, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewChild, ɵɵdefineInjectable, ɵɵinject, Injector, Injectable, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, Input } from '@angular/core';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { isDefAndNotNull as isDefAndNotNull$1 } from 'lib/lib/shared/classes/common-functions';
import { interval } from 'rxjs';
import { NgIf, NgTemplateOutlet, CommonModule, NgForOf } from '@angular/common';
import { DefaultLayoutDirective, DefaultLayoutAlignDirective } from '@angular/flex-layout/flex';
import { MatIcon, MatProgressBar, MatIconModule, MatProgressBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

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

const _c0 = ["toast"];
const _c1 = ["dataIcon"];
const _c2 = ["closeIcon"];
const _c3 = ["text"];
const _c4 = [4, "ngIf", "ngIfElse"];
const _c5 = ["templateRef", ""];
const _c6 = [3, "value", 4, "ngIf"];
const _c7 = ["fxLayout", "row", "fxLayoutAlign", "center center"];
const _c8 = ["toast", ""];
const _c9 = ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "toast-data-icon"];
const _c10 = ["dataIcon", ""];
const _c11 = ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "toast-text"];
const _c12 = ["text", ""];
const _c13 = ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "toast-close-icon"];
const _c14 = ["closeIcon", ""];
const _c15 = [3, "click", 4, "ngIf"];
const _c16 = [3, "value"];
function UmbraToastComponent_ng_container_0_mat_progress_bar_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "mat-progress-bar", _c16);
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("value", ctx_r3.progressBarValue);
} }
const _c17 = [3, "click"];
function UmbraToastComponent_ng_container_0_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-icon", _c17);
    ɵɵlistener("click", function UmbraToastComponent_ng_container_0_mat_icon_13_Template_mat_icon_click_0_listener($event) { ɵɵrestoreView(_r10); const ctx_r9 = ɵɵnextContext(2); return ctx_r9.close(); });
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
    const ctx_r0 = ɵɵnextContext();
    ɵɵselect(1);
    ɵɵproperty("ngIf", ctx_r0.data.timeout);
    ɵɵselect(7);
    ɵɵtextInterpolate(ctx_r0.iconType);
    ɵɵselect(10);
    ɵɵtextInterpolate1(" ", ctx_r0.data.toastData.text, " ");
    ɵɵselect(13);
    ɵɵproperty("ngIf", ctx_r0.data.closable);
} }
const _c18 = [4, "ngTemplateOutlet", "ngTemplateOutletContext"];
function UmbraToastComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function UmbraToastComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, UmbraToastComponent_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", _c18);
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.data.toastData.template)("ngTemplateOutletContext", ctx_r2.data.toastData.templateContext);
} }
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
        if (isDefAndNotNull$1(this.data.timeout)) {
            this.progressBarValue = 100;
            const timeoutSub$ = interval(1000).subscribe((seconds) => {
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
        const _r1 = ɵɵreference(2);
        ɵɵproperty("ngIf", ctx.data.toastData.text)("ngIfElse", _r1);
    } }, directives: [NgIf, DefaultLayoutDirective, DefaultLayoutAlignDirective, MatIcon, MatProgressBar, NgTemplateOutlet], styles: [".toast[_ngcontent-%COMP%]{background:#fff;border-width:1px;border-style:solid;border-color:#ddd #d6d6d6 #cfcfcf;box-shadow:0 2px 4px rgba(0,0,0,.11);min-height:1em;height:3em}.toast-close-icon[_ngcontent-%COMP%], .toast-data-icon[_ngcontent-%COMP%]{padding:0 .5em}.toast-data-icon[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{border-radius:15px;padding:1px;border:1px solid #000}.toast-data-icon-success[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{background-color:#20b2aa}.toast-data-icon-warning[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{background-color:#dd8900}.toast-data-icon-info[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{background-color:#749aa8}.toast-close-icon[_ngcontent-%COMP%]{cursor:pointer}.toast-close-icon-success[_ngcontent-%COMP%]{background-color:#00b173;height:100%;border-left:3px solid #2e8b57}.toast-close-icon-warning[_ngcontent-%COMP%]{background-color:#dd8900;height:100%;border-left:3px solid #f09c00}.toast-close-icon-info[_ngcontent-%COMP%]{background-color:#749aa8;height:100%;border-left:3px solid #557a88}.toast-type-success[_ngcontent-%COMP%]{background-color:green;color:#fff}.toast-text[_ngcontent-%COMP%]{padding:0 .5em}.toast-type-warning[_ngcontent-%COMP%]{background-color:orange;color:#fff}.toast-type-info[_ngcontent-%COMP%]{background-color:#add8e6;color:#fff}"], changeDetection: 0 });
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

class UmbraToastService {
    constructor(overlay, parentInjector) {
        this.overlay = overlay;
        this.parentInjector = parentInjector;
        this.openTopToasts = [];
        this.openBottomToasts = [];
    }
    showToast(toastConfig) {
        if (toastConfig === null || toastConfig === undefined) {
            toastConfig = defaultToastConfig;
        }
        const overlayPosition = this.getOverlayPosition(toastConfig);
        const overlayRef = this.overlay.create({ positionStrategy: overlayPosition });
        const toastRef = new ToastRef(overlayRef);
        if (toastConfig.verticalPosition === 'top') {
            this.openTopToasts.push(toastRef);
        }
        if (toastConfig.verticalPosition === 'bottom') {
            this.openBottomToasts.push(toastRef);
        }
        const injector = this.getInjector(toastConfig, toastRef, this.parentInjector);
        const toastPortal = new ComponentPortal(UmbraToastComponent, null, injector);
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
        tokens.set(ToastConfig, data);
        tokens.set(ToastRef, toastRef);
        return new PortalInjector(parentInjector, tokens);
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
                if (isDefAndNotNull(lastTopToast)) {
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
                if (isDefAndNotNull(lastBottomToast)) {
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
    }
}
/** @nocollapse */ UmbraToastService.ngInjectableDef = ɵɵdefineInjectable({ token: UmbraToastService, factory: function UmbraToastService_Factory(t) { return new (t || UmbraToastService)(ɵɵinject(Overlay), ɵɵinject(Injector)); }, providedIn: null });
/*@__PURE__*/ ɵsetClassMetadata(UmbraToastService, [{
        type: Injectable
    }], function () { return [{ type: Overlay }, { type: Injector }]; }, null);

class UmbraToastModule {
}
/** @nocollapse */ UmbraToastModule.ngModuleDef = ɵɵdefineNgModule({ type: UmbraToastModule });
/** @nocollapse */ UmbraToastModule.ngInjectorDef = ɵɵdefineInjector({ factory: function UmbraToastModule_Factory(t) { return new (t || UmbraToastModule)(); }, providers: [UmbraToastService], imports: [[
            CommonModule,
            OverlayModule,
            MatIconModule,
            FlexLayoutModule,
            MatProgressBarModule
        ]] });
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

const _c0$1 = [1, "umbra-messages-inline"];
const _c1$1 = [3, "ngIf", "ngIfElse"];
const _c2$1 = ["groupMessageContainer", ""];
const _c3$1 = ["ngFor", "", 3, "ngForOf"];
const _c4$1 = [1, "umbra-inline-message"];
function UmbraInlineComponent_ng_template_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", _c4$1);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const message_r16 = ctx.$implicit;
    ɵɵselect(1);
    ɵɵtextInterpolate1(" ", message_r16["summary"], " ");
} }
function UmbraInlineComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, UmbraInlineComponent_ng_template_1_ng_template_0_Template, 2, 1, "ng-template", _c3$1);
} if (rf & 2) {
    const ctx_r12 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ctx_r12.umbraMessages);
} }
const _c5$1 = [1, "umbra-inline-group-message-container"];
function UmbraInlineComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", _c4$1);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const message_r18 = ctx.$implicit;
    ɵɵselect(1);
    ɵɵtextInterpolate1(" ", message_r18["summary"], " ");
} }
function UmbraInlineComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", _c5$1);
    ɵɵtemplate(1, UmbraInlineComponent_ng_template_2_ng_template_1_Template, 2, 1, "ng-template", _c3$1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵɵnextContext();
    ɵɵselect(1);
    ɵɵproperty("ngForOf", ctx_r14.umbraMessages);
} }
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
/** @nocollapse */ UmbraInlineComponent.ngFactoryDef = function UmbraInlineComponent_Factory(t) { return new (t || UmbraInlineComponent)(); };
/** @nocollapse */ UmbraInlineComponent.ngComponentDef = ɵɵdefineComponent({ type: UmbraInlineComponent, selectors: [["umbra-messaging-inline"]], inputs: { umbraMessages: "umbraMessages", groupMessages: "groupMessages", shouldTimeout: "shouldTimeout", setTimeout: "setTimeout" }, consts: 4, vars: 2, template: function UmbraInlineComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", _c0$1);
        ɵɵtemplate(1, UmbraInlineComponent_ng_template_1_Template, 1, 1, "ng-template", _c1$1);
        ɵɵtemplate(2, UmbraInlineComponent_ng_template_2_Template, 2, 1, "ng-template", null, _c2$1, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r13 = ɵɵreference(3);
        ɵɵselect(1);
        ɵɵproperty("ngIf", ctx.shouldTimeout)("ngIfElse", _r13);
    } }, directives: [NgIf, NgForOf], styles: [""], changeDetection: 0 });
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

class UmbraInlineModule {
}
/** @nocollapse */ UmbraInlineModule.ngModuleDef = ɵɵdefineNgModule({ type: UmbraInlineModule });
/** @nocollapse */ UmbraInlineModule.ngInjectorDef = ɵɵdefineInjector({ factory: function UmbraInlineModule_Factory(t) { return new (t || UmbraInlineModule)(); }, imports: [[
            MatIconModule,
            FlexLayoutModule,
            CommonModule
        ]] });
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
