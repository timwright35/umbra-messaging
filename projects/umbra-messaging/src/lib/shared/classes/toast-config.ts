import { InjectionToken, TemplateRef } from '@angular/core';
import { ToastConfigInterface } from '../interfaces/toast-config.interface';
import { ToastType } from '../types/toast.type';

export class ToastData {
    type: ToastType;
    text?: string;
    template?: TemplateRef<any>;
    templateContext?: {};
}

export const defaultToastConfig: ToastConfigInterface = {
    position: {
        top: 20,
        right: 20,
    },
    animation: {
        fadeOut: 2500,
        fadeIn: 300,
    },
};

export const TOAST_CONFIG_TOKEN = new InjectionToken<ToastConfigInterface>('toast-config');
