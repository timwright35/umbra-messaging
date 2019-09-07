import { OnInit, OnDestroy, Renderer2, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { UmbraToastService } from '../shared/services/umbra-toast.service';
import { ToastRef } from '../shared/classes/toast-ref';
import { ToastConfig } from '../shared/classes/toast-config';
import * as i0 from "@angular/core";
export declare class UmbraToastComponent implements OnInit, AfterViewInit, OnDestroy {
    readonly data: ToastConfig;
    readonly toastRef: ToastRef;
    private renderer;
    private umbraToastService;
    private changeDetectorRef;
    iconType: string;
    private toastConfig;
    progressBarValue: number;
    toast: ElementRef;
    dataIcon: ElementRef;
    closeIcon: ElementRef;
    text: ElementRef;
    constructor(data: ToastConfig, toastRef: ToastRef, renderer: Renderer2, umbraToastService: UmbraToastService, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    close(): void;
    static ngFactoryDef: i0.ɵɵFactoryDef<UmbraToastComponent>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<UmbraToastComponent, "umbra-messaging-toast", never, {}, {}, never>;
}
