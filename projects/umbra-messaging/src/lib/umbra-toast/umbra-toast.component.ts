import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    OnDestroy,
    Renderer2,
    ViewChild,
    ElementRef,
    AfterViewInit
} from '@angular/core';
import {
    ToastData
} from '../shared/classes/toast-config';
import { ToastRef } from '../shared/classes/toast-ref';

@Component({
    selector: 'umbra-messaging-toast',
    templateUrl: './umbra-toast.component.html',
    styleUrls: [ './umbra-toast.component.css' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UmbraToastComponent implements OnInit, AfterViewInit, OnDestroy {
    iconType: string;
    private toastData: ToastData;

    @ViewChild('toast', {static: false}) toast: ElementRef;
    @ViewChild('dataIcon', {static: false}) dataIcon: ElementRef;
    @ViewChild('closeIcon', {static: false}) closeIcon: ElementRef;
    @ViewChild('text', {static: false}) text: ElementRef;

    constructor(
        readonly data: ToastData,
        readonly ref: ToastRef,
        readonly renderer: Renderer2
    ) {
        this.toastData = data;
        this.iconType = data.type === 'success' ? 'done' : data.type;
    }

    ngOnInit() {
        // NO-OP.
    }

    ngAfterViewInit() {
        this.renderer.addClass(this.toast.nativeElement, 'toast');
        this.renderer.addClass(this.toast.nativeElement, 'toast-type-' + this.toastData.type);
        this.renderer.addClass(this.dataIcon.nativeElement, 'toast-data-icon-' + this.toastData.type);
        this.renderer.addClass(this.closeIcon.nativeElement, 'toast-close-icon-' + this.toastData.type);
    }

    ngOnDestroy() {
        this.close();
    }

    close() {
        this.ref.close();
    }
}
