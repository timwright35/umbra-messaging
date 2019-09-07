import { OverlayRef } from '@angular/cdk/overlay';
export declare class ToastRef {
    private readonly overlay;
    private overlayRef;
    constructor(overlay: OverlayRef);
    close(): void;
    isVisible(): HTMLElement;
    getPosition(): DOMRect | ClientRect;
}
