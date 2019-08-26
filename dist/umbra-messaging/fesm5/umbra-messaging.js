import { InjectionToken, Component, ChangeDetectionStrategy, Injectable, Injector, ɵɵdefineInjectable, ɵɵinject, INJECTOR, NgModule } from '@angular/core';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

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
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToastRef.prototype.overlay;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToastData = /** @class */ (function () {
    function ToastData() {
    }
    return ToastData;
}());
if (false) {
    /** @type {?} */
    ToastData.prototype.type;
    /** @type {?} */
    ToastData.prototype.text;
    /** @type {?} */
    ToastData.prototype.template;
    /** @type {?} */
    ToastData.prototype.templateContext;
}
/** @type {?} */
var defaultToastConfig = {
    position: {
        top: 20,
        right: 20,
    },
    animation: {
        fadeOut: 2500,
        fadeIn: 300,
    },
    toastData: {
        type: 'success'
    }
};
/** @type {?} */
var TOAST_CONFIG_TOKEN = new InjectionToken('toast-config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var toastAnimations = {
    fadeToast: trigger('fadeAnimation', [
        state('default', style({ opacity: 1 })),
        transition('void => *', [style({ opacity: 0 }), animate('{{ fadeIn }}ms')]),
        transition('default => closing', animate('{{ fadeOut }}ms', style({ opacity: 0 }))),
    ]),
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmbraToastComponent = /** @class */ (function () {
    function UmbraToastComponent(data, ref) {
        this.data = data;
        this.ref = ref;
        this.animationState = 'default';
        this.iconType = data.type === 'success' ? 'done' : data.type;
    }
    /**
     * @return {?}
     */
    UmbraToastComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.intervalId = setTimeout((/**
         * @return {?}
         */
        function () { return _this.animationState = 'closing'; }), 5000);
    };
    /**
     * @return {?}
     */
    UmbraToastComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        clearTimeout(this.intervalId);
    };
    /**
     * @return {?}
     */
    UmbraToastComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.ref.close();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    UmbraToastComponent.prototype.onFadeFinished = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var toState = event.toState;
        /** @type {?} */
        var isFadeOut = ((/** @type {?} */ (toState))) === 'closing';
        /** @type {?} */
        var itFinished = this.animationState === 'closing';
        if (isFadeOut && itFinished) {
            this.close();
        }
    };
    UmbraToastComponent.decorators = [
        { type: Component, args: [{
                    selector: 'umbra-messaging-toast',
                    template: "<div class=\"toast\" [class]=\"data.type\">\r\n    <div>{{ data.text }}</div>\r\n    <mat-icon (click)=\"close()\">close</mat-icon>\r\n</div>\r\n",
                    animations: [toastAnimations.fadeToast],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".toast{position:relative;display:-webkit-box;display:flex;justify-content:space-around;margin-bottom:20px;padding:10px 15px;width:200px;min-width:200px;background:#fff;border-width:1px;border-style:solid;border-color:#ddd #d6d6d6 #cfcfcf;box-shadow:0 2px 4px rgba(0,0,0,.11)}"]
                }] }
    ];
    /** @nocollapse */
    UmbraToastComponent.ctorParameters = function () { return [
        { type: ToastData },
        { type: ToastRef }
    ]; };
    return UmbraToastComponent;
}());
if (false) {
    /** @type {?} */
    UmbraToastComponent.prototype.animationState;
    /** @type {?} */
    UmbraToastComponent.prototype.iconType;
    /**
     * @type {?}
     * @private
     */
    UmbraToastComponent.prototype.intervalId;
    /** @type {?} */
    UmbraToastComponent.prototype.data;
    /** @type {?} */
    UmbraToastComponent.prototype.ref;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmbraToastService = /** @class */ (function () {
    function UmbraToastService(overlay, parentInjector) {
        this.overlay = overlay;
        this.parentInjector = parentInjector;
    }
    /**
     * @param {?} toastConfig
     * @return {?}
     */
    UmbraToastService.prototype.showToast = /**
     * @param {?} toastConfig
     * @return {?}
     */
    function (toastConfig) {
        console.log('Config', toastConfig);
        if (toastConfig === null || toastConfig === undefined) {
            this.toastConfig = defaultToastConfig;
        }
        /** @type {?} */
        var positionStrategy = this.getPositionStrategy();
        /** @type {?} */
        var overlayRef = this.overlay.create({ positionStrategy: positionStrategy });
        /** @type {?} */
        var toastRef = new ToastRef(overlayRef);
        /** @type {?} */
        var injector = this.getInjector(toastConfig.toastData, toastRef, this.parentInjector);
        /** @type {?} */
        var toastPortal = new ComponentPortal(UmbraToastComponent, null, injector);
        overlayRef.attach(toastPortal);
        return toastRef;
    };
    /**
     * @return {?}
     */
    UmbraToastService.prototype.getPositionStrategy = /**
     * @return {?}
     */
    function () {
        return this.overlay.position()
            .global()
            .top(this.getPosition())
            .right(this.toastConfig.position.right + 'px');
    };
    /**
     * @return {?}
     */
    UmbraToastService.prototype.getPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var lastToastIsVisible = this.lastToast && this.lastToast.isVisible();
        /** @type {?} */
        var position = lastToastIsVisible
            ? this.lastToast.getPosition().bottom
            : this.toastConfig.position.top;
        return position + 'px';
    };
    /**
     * @param {?} data
     * @param {?} toastRef
     * @param {?} parentInjector
     * @return {?}
     */
    UmbraToastService.prototype.getInjector = /**
     * @param {?} data
     * @param {?} toastRef
     * @param {?} parentInjector
     * @return {?}
     */
    function (data, toastRef, parentInjector) {
        /** @type {?} */
        var tokens = new WeakMap();
        tokens.set(ToastData, data);
        tokens.set(ToastRef, toastRef);
        return new PortalInjector(parentInjector, tokens);
    };
    UmbraToastService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UmbraToastService.ctorParameters = function () { return [
        { type: Overlay },
        { type: Injector }
    ]; };
    /** @nocollapse */ UmbraToastService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UmbraToastService_Factory() { return new UmbraToastService(ɵɵinject(Overlay), ɵɵinject(INJECTOR)); }, token: UmbraToastService, providedIn: "root" });
    return UmbraToastService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    UmbraToastService.prototype.lastToast;
    /**
     * @type {?}
     * @private
     */
    UmbraToastService.prototype.toastConfig;
    /**
     * @type {?}
     * @private
     */
    UmbraToastService.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    UmbraToastService.prototype.parentInjector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmbraToastModule = /** @class */ (function () {
    function UmbraToastModule() {
    }
    UmbraToastModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [UmbraToastComponent],
                    imports: [
                        CommonModule,
                        OverlayModule,
                        MatIconModule
                    ],
                    entryComponents: [UmbraToastComponent]
                },] }
    ];
    return UmbraToastModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ToastConfigInterface() { }
if (false) {
    /** @type {?|undefined} */
    ToastConfigInterface.prototype.position;
    /** @type {?|undefined} */
    ToastConfigInterface.prototype.animation;
    /** @type {?} */
    ToastConfigInterface.prototype.toastData;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TOAST_CONFIG_TOKEN, ToastData, UmbraToastModule, UmbraToastService, defaultToastConfig, UmbraToastComponent as ɵa, toastAnimations as ɵb, ToastRef as ɵc };
//# sourceMappingURL=umbra-messaging.js.map
