import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    OnDestroy,
    Renderer2,
    ViewChild,
    ElementRef,
    AfterViewInit,
    ChangeDetectorRef
} from '@angular/core';
import { UmbraToastService } from '../shared/services/umbra-toast.service';
import { ToastRef } from '../shared/classes/toast-ref';
import { ToastConfig } from '../shared/classes/toast-config';
import { isDefAndNotNull } from 'lib/lib/shared/classes/common-functions';
import { interval } from 'rxjs';

@Component({
    selector: 'umbra-messaging-toast',
    templateUrl: './umbra-toast.component.html',
    styleUrls: [ './umbra-toast.component.css' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UmbraToastComponent implements OnInit, AfterViewInit, OnDestroy {
    iconType: string;
    private toastConfig: ToastConfig;
    progressBarValue: number;

    @ViewChild('toast', {static: false}) toast: ElementRef;
    @ViewChild('dataIcon', {static: false}) dataIcon: ElementRef;
    @ViewChild('closeIcon', {static: false}) closeIcon: ElementRef;
    @ViewChild('text', {static: false}) text: ElementRef;

    constructor(
        readonly data: ToastConfig,
        readonly toastRef: ToastRef,
        private renderer: Renderer2,
        private umbraToastService: UmbraToastService,
        private changeDetectorRef: ChangeDetectorRef
    ) {
        this.toastConfig = data;
        this.iconType = data.toastData.type === 'success' ? 'done' : data.toastData.type;
    }

    ngOnInit() {
        if (isDefAndNotNull(this.data.timeout)) {
            this.progressBarValue = 100;
            const timeoutSub$ = interval(1000).subscribe((seconds) => {
                this.progressBarValue = 100 - seconds * 100 / (this.data.timeout / 1000);
                this.changeDetectorRef.markForCheck();

                if (seconds >= (this.data.timeout / 1000)) {
                    this.close();
                    timeoutSub$.unsubscribe();
                }
            });
        }
    }

    ngAfterViewInit() {
        this.renderer.addClass(this.toast.nativeElement, 'toast');
        this.renderer.addClass(this.toast.nativeElement,
            'toast-type-' + this.toastConfig.toastData.type);
        this.renderer.addClass(this.dataIcon.nativeElement,
            'toast-data-icon-' + this.toastConfig.toastData.type);
        this.renderer.addClass(this.closeIcon.nativeElement,
            'toast-close-icon-' + this.toastConfig.toastData.type);
    }

    ngOnDestroy() {
        // NO-OP.
    }

    close() {
        this.umbraToastService.closeToast(this.toastRef);
    }
}
