import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UmbraToastModule } from 'lib/lib/umbra-toast/umbra-toast.module';
import { UmbraInlineModule } from 'lib/lib/umbra-inline/umbra-inline.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        UmbraToastModule,
        UmbraInlineModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
