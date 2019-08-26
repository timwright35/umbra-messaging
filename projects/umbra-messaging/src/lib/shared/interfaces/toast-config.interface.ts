import { ToastData } from '../classes/toast-config';
import { VerticalPositionType } from '../types/vertical-position.type';
import { HorizontalPositionType } from '../types/horizontal-position.type';

export interface ToastConfigInterface {
    verticalPosition: VerticalPositionType;
    horizontalPosition: HorizontalPositionType;
    position?: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    };
    animation?: {
        fadeOut: number;
        fadeIn: number;
    };
    toastData: ToastData;
}
