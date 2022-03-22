import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessComponent } from './alerts/success/success.component';
import { Warning } from './alerts/warning/warning.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent, 
    Warning
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
