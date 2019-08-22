(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('@angular/animations'), require('@angular/common'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('umbra-messaging', ['exports', '@angular/core', '@angular/cdk/overlay', '@angular/cdk/portal', '@angular/animations', '@angular/common', '@angular/material'], factory) :
    (global = global || self, factory(global['umbra-messaging'] = {}, global.ng.core, global.ng.cdk.overlay, global.ng.cdk.portal, global.ng.animations, global.ng.common, global.ng.material));
}(this, function (exports, core, overlay, portal, animations, common, material) { 'use strict';

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
    };
    /** @type {?} */
    var TOAST_CONFIG_TOKEN = new core.InjectionToken('toast-config');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var toastAnimations = {
        fadeToast: animations.trigger('fadeAnimation', [
            animations.state('default', animations.style({ opacity: 1 })),
            animations.transition('void => *', [animations.style({ opacity: 0 }), animations.animate('{{ fadeIn }}ms')]),
            animations.transition('default => closing', animations.animate('{{ fadeOut }}ms', animations.style({ opacity: 0 }))),
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
            { type: core.Component, args: [{
                        selector: 'umbra-messaging-toast',
                        template: "<div class=\"toast\">\n    <mat-icon>{{ iconType }}</mat-icon>\n    <div>{{ data.text }}</div>\n    <mat-icon (click)=\"close()\">close</mat-icon>\n</div>\n",
                        animations: [toastAnimations.fadeToast],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".toast{position:relative;display:-webkit-box;display:flex;justify-content:space-around;margin-bottom:20px;padding:10px 15px 10px 48px;width:290px;background:#fff;border-width:1px;border-style:solid;border-color:#ddd #d6d6d6 #cfcfcf;box-shadow:0 2px 4px rgba(0,0,0,.11)}"]
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
         * @param {?} toastData
         * @param {?=} toastConfig
         * @return {?}
         */
        UmbraToastService.prototype.showToast = /**
         * @param {?} toastData
         * @param {?=} toastConfig
         * @return {?}
         */
        function (toastData, toastConfig) {
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
            var injector = this.getInjector(toastData, toastRef, this.parentInjector);
            /** @type {?} */
            var toastPortal = new portal.ComponentPortal(UmbraToastComponent, null, injector);
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
            return new portal.PortalInjector(parentInjector, tokens);
        };
        UmbraToastService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        UmbraToastService.ctorParameters = function () { return [
            { type: overlay.Overlay },
            { type: core.Injector }
        ]; };
        /** @nocollapse */ UmbraToastService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function UmbraToastService_Factory() { return new UmbraToastService(core.ɵɵinject(overlay.Overlay), core.ɵɵinject(core.INJECTOR)); }, token: UmbraToastService, providedIn: "root" });
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
            { type: core.NgModule, args: [{
                        declarations: [UmbraToastComponent],
                        imports: [
                            common.CommonModule,
                            overlay.OverlayModule,
                            material.MatIconModule
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
    }

    exports.UmbraToastModule = UmbraToastModule;
    exports.UmbraToastService = UmbraToastService;
    exports.ɵa = UmbraToastComponent;
    exports.ɵb = toastAnimations;
    exports.ɵc = ToastData;
    exports.ɵd = ToastRef;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=umbra-messaging.umd.js.map
