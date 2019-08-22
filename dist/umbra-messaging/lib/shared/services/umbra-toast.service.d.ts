import { Injector } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { PortalInjector } from '@angular/cdk/portal';
import { ToastRef } from '../classes/toast-ref';
import { ToastData } from '../classes/toast-config';
import { ToastConfigInterface } from '../interfaces/toast-config.interface';
export declare class UmbraToastService {
    private overlay;
    private parentInjector;
    private lastToast;
    private toastConfig;
    constructor(overlay: Overlay, parentInjector: Injector);
    showToast(toastData: ToastData, toastConfig?: ToastConfigInterface): ToastRef;
    getPositionStrategy(): import("@angular/cdk/overlay").GlobalPositionStrategy;
    getPosition(): string;
    getInjector(data: ToastData, toastRef: ToastRef, parentInjector: Injector): PortalInjector;
}
