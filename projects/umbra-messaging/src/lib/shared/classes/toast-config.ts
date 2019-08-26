import { TemplateRef } from '@angular/core';
import { ToastConfigInterface } from '../interfaces/toast-config.interface';
import { ToastType } from '../types/toast.type';

export class ToastData {
    type: ToastType;
    text?: string;
    template?: TemplateRef<any>;
    templateContext?: {};
}

export const defaultToastConfig: ToastConfigInterface = {
    verticalPosition: 'top',
    horizontalPosition: 'right',
    position: {},
    animation: {
        fadeOut: 2500,
        fadeIn: 300,
    },
    toastData: {
        type: 'success'
    }
};

export const DEFAULT_MARGIN = 25;
