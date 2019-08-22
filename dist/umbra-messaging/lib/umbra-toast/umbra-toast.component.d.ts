import { OnInit, OnDestroy } from '@angular/core';
import { ToastData } from '../shared/classes/toast-config';
import { ToastRef } from '../shared/classes/toast-ref';
import { ToastAnimationState } from '../shared/animations/toast-fade.animation';
import { AnimationEvent } from '@angular/animations';
export declare class UmbraToastComponent implements OnInit, OnDestroy {
    readonly data: ToastData;
    readonly ref: ToastRef;
    animationState: ToastAnimationState;
    iconType: string;
    private intervalId;
    constructor(data: ToastData, ref: ToastRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    close(): void;
    onFadeFinished(event: AnimationEvent): void;
}
