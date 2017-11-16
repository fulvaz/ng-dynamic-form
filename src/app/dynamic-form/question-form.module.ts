import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuestionFormComponent } from './question-form.component';
import { UrlInputComponent } from "./controls/url-input/url-input.component";
import { TextInputComponent } from "./controls/text-input/text-input.component";
import { SelectInputComponent } from "./controls/select-input/select-input.component";
import { RadioInputComponent } from "./controls/radio-input/radio-input.component";
import { BaseInputComponent } from "./controls/base-input/base-input.component";
import { UploadImgInputComponent } from './controls/upload-img-input/upload-img-input.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    QuestionFormComponent,
    UrlInputComponent,
    SelectInputComponent,
    TextInputComponent,
    UrlInputComponent,
    RadioInputComponent,
    BaseInputComponent,
    UploadImgInputComponent,
  ],
  exports: [
    QuestionFormComponent,
    // UrlInputComponent,
    // SelectInputComponent,
    // TextInputComponent,
    // UrlInputComponent,
    // RadioInputComponent,
  ],
  entryComponents: [
    UrlInputComponent,
    SelectInputComponent,
    TextInputComponent,
    UrlInputComponent,
    RadioInputComponent,
    BaseInputComponent,
    UploadImgInputComponent,
  ]
})
export class QuestionFormModule {

}
