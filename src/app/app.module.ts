import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuestionFormModule } from "./dynamic-form/question-form.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    QuestionFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
