import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UmbraToastComponent } from './umbra-toast.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatIconModule, MatProgressBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UmbraToastService } from '../shared/services/umbra-toast.service';
import * as i0 from "@angular/core";
var UmbraToastModule = /** @class */ (function () {
    function UmbraToastModule() {
    }
    /** @nocollapse */ UmbraToastModule.ngModuleDef = i0.ɵɵdefineNgModule({ type: UmbraToastModule });
    /** @nocollapse */ UmbraToastModule.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function UmbraToastModule_Factory(t) { return new (t || UmbraToastModule)(); }, providers: [UmbraToastService], imports: [[
                CommonModule,
                OverlayModule,
                MatIconModule,
                FlexLayoutModule,
                MatProgressBarModule
            ]] });
    return UmbraToastModule;
}());
export { UmbraToastModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW1icmEtdG9hc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdW1icmEtbWVzc2FnaW5nLyIsInNvdXJjZXMiOlsibGliL3VtYnJhLXRvYXN0L3VtYnJhLXRvYXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUNILGFBQWEsRUFDYixvQkFBb0IsRUFDdkIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUFFM0U7SUFBQTtLQVlnQzsrREFBbkIsZ0JBQWdCOzRIQUFoQixnQkFBZ0IsbUJBRmQsQ0FBQyxpQkFBaUIsQ0FBQyxZQVJyQjtnQkFDTCxZQUFZO2dCQUNaLGFBQWE7Z0JBQ2IsYUFBYTtnQkFDYixnQkFBZ0I7Z0JBQ2hCLG9CQUFvQjthQUN2QjsyQkFuQkw7Q0F1QmdDLEFBWmhDLElBWWdDO1NBQW5CLGdCQUFnQjtvQ0FBaEIsZ0JBQWdCLG1CQVhULG1CQUFtQixhQUUvQixZQUFZO1FBQ1osYUFBYTtRQUNiLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsb0JBQW9CO21DQUtmLGdCQUFnQjtjQVo1QixRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUUsbUJBQW1CLENBQUU7Z0JBQ3JDLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtpQkFDdkI7Z0JBQ0QsZUFBZSxFQUFFLENBQUUsbUJBQW1CLENBQUU7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVW1icmFUb2FzdENvbXBvbmVudCB9IGZyb20gJy4vdW1icmEtdG9hc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZVxyXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcclxuaW1wb3J0IHsgVW1icmFUb2FzdFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvdW1icmEtdG9hc3Quc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbIFVtYnJhVG9hc3RDb21wb25lbnQgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgT3ZlcmxheU1vZHVsZSxcclxuICAgICAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgICAgIEZsZXhMYXlvdXRNb2R1bGUsXHJcbiAgICAgICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGVcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFsgVW1icmFUb2FzdENvbXBvbmVudCBdLFxyXG4gICAgcHJvdmlkZXJzOiBbVW1icmFUb2FzdFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVbWJyYVRvYXN0TW9kdWxlIHt9XHJcbiJdfQ==