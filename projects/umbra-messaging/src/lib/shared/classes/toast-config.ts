import {
    ElementRef,
    TemplateRef
} from '@angular/core';
import { ToastType } from '../types/toast.type';
import { VerticalPositionType } from '../types/vertical-position.type';
import { HorizontalPositionType } from '../types/horizontal-position.type';

export class ToastData {
    type: ToastType;
    text?: string;
    template?: TemplateRef<any>;
    templateContext?: {};
}

export class ToastConfig {
    verticalPosition: VerticalPositionType;
    horizontalPosition: HorizontalPositionType;
    attachToElement?: ElementRef;
    closable?: boolean;
    timeout?: number;
    position?: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    };
    toastData: ToastData;
}

export const defaultToastConfig: ToastConfig = {
    verticalPosition: 'top',
    horizontalPosition: 'right',
    closable: true,
    position: {},
    toastData: {
        type: 'success'
    }
};

export const DEFAULT_MARGIN = 25;
