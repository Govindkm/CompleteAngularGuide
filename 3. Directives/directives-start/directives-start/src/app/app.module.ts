import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicHighlighterDirective } from './directives/basic-highlighter.directive';
import { BetterHighlighterDirective } from './directives/better-highlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlighterDirective,
    BetterHighlighterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
