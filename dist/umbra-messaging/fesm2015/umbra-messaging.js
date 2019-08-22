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
class ToastRef {
    /**
     * @param {?} overlay
     */
    constructor(overlay) {
        this.overlay = overlay;
    }
    /**
     * @return {?}
     */
    close() {
        this.overlay.dispose();
    }
    /**
     * @return {?}
     */
    isVisible() {
        return this.overlay && this.overlay.overlayElement;
    }
    /**
     * @return {?}
     */
    getPosition() {
        return this.overlay.overlayElement.getBoundingClientRect();
    }
}
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
class ToastData {
}
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
const defaultToastConfig = {
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
const TOAST_CONFIG_TOKEN = new InjectionToken('toast-config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const toastAnimations = {
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
class UmbraToastComponent {
    /**
     * @param {?} data
     * @param {?} ref
     */
    constructor(data, ref) {
        this.data = data;
        this.ref = ref;
        this.animationState = 'default';
        this.iconType = data.type === 'success' ? 'done' : data.type;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.intervalId = setTimeout((/**
         * @return {?}
         */
        () => this.animationState = 'closing'), 5000);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        clearTimeout(this.intervalId);
    }
    /**
     * @return {?}
     */
    close() {
        this.ref.close();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFadeFinished(event) {
        const { toState } = event;
        /** @type {?} */
        const isFadeOut = ((/** @type {?} */ (toState))) === 'closing';
        /** @type {?} */
        const itFinished = this.animationState === 'closing';
        if (isFadeOut && itFinished) {
            this.close();
        }
    }
}
UmbraToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'umbra-messaging-toast',
                template: "<div class=\"toast\">\n    <mat-icon>{{ iconType }}</mat-icon>\n    <div>{{ data.text }}</div>\n    <mat-icon (click)=\"close()\">close</mat-icon>\n</div>\n",
                animations: [toastAnimations.fadeToast],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".toast{position:relative;display:-webkit-box;display:flex;justify-content:space-around;margin-bottom:20px;padding:10px 15px 10px 48px;width:290px;background:#fff;border-width:1px;border-style:solid;border-color:#ddd #d6d6d6 #cfcfcf;box-shadow:0 2px 4px rgba(0,0,0,.11)}"]
            }] }
];
/** @nocollapse */
UmbraToastComponent.ctorParameters = () => [
    { type: ToastData },
    { type: ToastRef }
];
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
class UmbraToastService {
    /**
     * @param {?} overlay
     * @param {?} parentInjector
     */
    constructor(overlay, parentInjector) {
        this.overlay = overlay;
        this.parentInjector = parentInjector;
    }
    /**
     * @param {?} toastData
     * @param {?=} toastConfig
     * @return {?}
     */
    showToast(toastData, toastConfig) {
        if (toastConfig === null || toastConfig === undefined) {
            this.toastConfig = defaultToastConfig;
        }
        /** @type {?} */
        const positionStrategy = this.getPositionStrategy();
        /** @type {?} */
        const overlayRef = this.overlay.create({ positionStrategy });
        /** @type {?} */
        const toastRef = new ToastRef(overlayRef);
        /** @type {?} */
        const injector = this.getInjector(toastData, toastRef, this.parentInjector);
        /** @type {?} */
        const toastPortal = new ComponentPortal(UmbraToastComponent, null, injector);
        overlayRef.attach(toastPortal);
        return toastRef;
    }
    /**
     * @return {?}
     */
    getPositionStrategy() {
        return this.overlay.position()
            .global()
            .top(this.getPosition())
            .right(this.toastConfig.position.right + 'px');
    }
    /**
     * @return {?}
     */
    getPosition() {
        /** @type {?} */
        const lastToastIsVisible = this.lastToast && this.lastToast.isVisible();
        /** @type {?} */
        const position = lastToastIsVisible
            ? this.lastToast.getPosition().bottom
            : this.toastConfig.position.top;
        return position + 'px';
    }
    /**
     * @param {?} data
     * @param {?} toastRef
     * @param {?} parentInjector
     * @return {?}
     */
    getInjector(data, toastRef, parentInjector) {
        /** @type {?} */
        const tokens = new WeakMap();
        tokens.set(ToastData, data);
        tokens.set(ToastRef, toastRef);
        return new PortalInjector(parentInjector, tokens);
    }
}
UmbraToastService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UmbraToastService.ctorParameters = () => [
    { type: Overlay },
    { type: Injector }
];
/** @nocollapse */ UmbraToastService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UmbraToastService_Factory() { return new UmbraToastService(ɵɵinject(Overlay), ɵɵinject(INJECTOR)); }, token: UmbraToastService, providedIn: "root" });
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
class UmbraToastModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { UmbraToastModule, UmbraToastService, UmbraToastComponent as ɵa, toastAnimations as ɵb, ToastData as ɵc, ToastRef as ɵd };
//# sourceMappingURL=umbra-messaging.js.map
