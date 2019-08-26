import { ToastData } from '../classes/toast-config';
export interface ToastConfigInterface {
    position?: {
        top: number;
        right: number;
    };
    animation?: {
        fadeOut: number;
        fadeIn: number;
    };
    toastData: ToastData;
}
