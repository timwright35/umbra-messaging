import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UmbraToastComponent } from './umbra-toast.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UmbraToastService } from '../shared/services/umbra-toast.service';

@NgModule({
    declarations: [ UmbraToastComponent ],
    imports: [
        CommonModule,
        OverlayModule,
        MatIconModule,
        FlexLayoutModule
    ],
    entryComponents: [ UmbraToastComponent ],
    providers: [UmbraToastService]
})
export class UmbraToastModule {}
