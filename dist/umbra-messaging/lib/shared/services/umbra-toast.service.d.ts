import { Injector } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ToastRef } from '../classes/toast-ref';
import { ToastConfig } from '../classes/toast-config';
import * as i0 from "@angular/core";
export declare class UmbraToastService {
    private overlay;
    private parentInjector;
    private openTopToasts;
    private openBottomToasts;
    constructor(overlay: Overlay, parentInjector: Injector);
    showToast(toastConfig: ToastConfig): ToastRef;
    closeToast(toastRef: ToastRef): void;
    closeAllToasts(): void;
    private getInjector;
    private getOverlayPosition;
    static ngInjectableDef: i0.ɵɵInjectableDef<UmbraToastService>;
}
