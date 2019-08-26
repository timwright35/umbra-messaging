import { OverlayRef } from '@angular/cdk/overlay';

export class ToastRef {
    private overlayRef: OverlayRef;

    constructor(private readonly overlay: OverlayRef) {
        this.overlayRef = overlay;
    }

    close() {
        this.overlay.dispose();
    }

    isVisible() {
        return this.overlay && this.overlay.overlayElement;
    }

    getPosition() {
        return this.overlay.overlayElement.getBoundingClientRect();
    }
}
