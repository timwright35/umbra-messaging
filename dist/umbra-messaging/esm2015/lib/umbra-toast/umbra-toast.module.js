import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UmbraToastComponent } from './umbra-toast.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatIconModule, MatProgressBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UmbraToastService } from '../shared/services/umbra-toast.service';
import * as i0 from "@angular/core";
export class UmbraToastModule {
}
/** @nocollapse */ UmbraToastModule.ngModuleDef = i0.ɵɵdefineNgModule({ type: UmbraToastModule });
/** @nocollapse */ UmbraToastModule.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function UmbraToastModule_Factory(t) { return new (t || UmbraToastModule)(); }, providers: [UmbraToastService], imports: [[
            CommonModule,
            OverlayModule,
            MatIconModule,
            FlexLayoutModule,
            MatProgressBarModule
        ]] });
/*@__PURE__*/ i0.ɵɵsetNgModuleScope(UmbraToastModule, { declarations: [UmbraToastComponent], imports: [CommonModule,
        OverlayModule,
        MatIconModule,
        FlexLayoutModule,
        MatProgressBarModule] });
/*@__PURE__*/ i0.ɵsetClassMetadata(UmbraToastModule, [{
        type: NgModule,
        args: [{
                declarations: [UmbraToastComponent],
                imports: [
                    CommonModule,
                    OverlayModule,
                    MatIconModule,
                    FlexLayoutModule,
                    MatProgressBarModule
                ],
                entryComponents: [UmbraToastComponent],
                providers: [UmbraToastService]
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW1icmEtdG9hc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdW1icmEtbWVzc2FnaW5nLyIsInNvdXJjZXMiOlsibGliL3VtYnJhLXRvYXN0L3VtYnJhLXRvYXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUNILGFBQWEsRUFDYixvQkFBb0IsRUFDdkIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUFjM0UsTUFBTSxPQUFPLGdCQUFnQjs7MkRBQWhCLGdCQUFnQjt3SEFBaEIsZ0JBQWdCLG1CQUZkLENBQUMsaUJBQWlCLENBQUMsWUFSckI7WUFDTCxZQUFZO1lBQ1osYUFBYTtZQUNiLGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIsb0JBQW9CO1NBQ3ZCO29DQUlRLGdCQUFnQixtQkFYVCxtQkFBbUIsYUFFL0IsWUFBWTtRQUNaLGFBQWE7UUFDYixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLG9CQUFvQjttQ0FLZixnQkFBZ0I7Y0FaNUIsUUFBUTtlQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFFLG1CQUFtQixDQUFFO2dCQUNyQyxPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixhQUFhO29CQUNiLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixvQkFBb0I7aUJBQ3ZCO2dCQUNELGVBQWUsRUFBRSxDQUFFLG1CQUFtQixDQUFFO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUNqQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFVtYnJhVG9hc3RDb21wb25lbnQgfSBmcm9tICcuL3VtYnJhLXRvYXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7XHJcbiAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGVcclxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XHJcbmltcG9ydCB7IFVtYnJhVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL3VtYnJhLXRvYXN0LnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogWyBVbWJyYVRvYXN0Q29tcG9uZW50IF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE92ZXJsYXlNb2R1bGUsXHJcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcclxuICAgICAgICBGbGV4TGF5b3V0TW9kdWxlLFxyXG4gICAgICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbIFVtYnJhVG9hc3RDb21wb25lbnQgXSxcclxuICAgIHByb3ZpZGVyczogW1VtYnJhVG9hc3RTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVW1icmFUb2FzdE1vZHVsZSB7fVxyXG4iXX0=