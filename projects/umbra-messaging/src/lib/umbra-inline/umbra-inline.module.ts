import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UmbraInlineComponent } from './umbra-inline.component';
import { MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [UmbraInlineComponent],
  imports: [
    MatIconModule,
    FlexLayoutModule,
    CommonModule
  ],
  exports: [UmbraInlineComponent]
})
export class UmbraInlineModule { }
