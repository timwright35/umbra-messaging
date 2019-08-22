import { InjectionToken, TemplateRef } from '@angular/core';
import { ToastConfigInterface } from '../interfaces/toast-config.interface';
import { ToastType } from '../types/toast.type';
export declare class ToastData {
    type: ToastType;
    text?: string;
    template?: TemplateRef<any>;
    templateContext?: {};
}
export declare const defaultToastConfig: ToastConfigInterface;
export declare const TOAST_CONFIG_TOKEN: InjectionToken<ToastConfigInterface>;
