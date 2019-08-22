import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UmbraToastComponent } from './umbra-toast.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatIconModule } from '@angular/material';

@NgModule({
    declarations: [ UmbraToastComponent ],
    imports: [
        CommonModule,
        OverlayModule,
        MatIconModule
    ],
    entryComponents: [ UmbraToastComponent ]
})
export class UmbraToastModule {}
