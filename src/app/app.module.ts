import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UmbraToastModule } from 'umbra-messaging';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UmbraToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
