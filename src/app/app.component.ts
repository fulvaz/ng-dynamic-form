import { Component, OnInit } from '@angular/core';
import { QuestionBase } from './dynamic-form/models/question-base';
import { QuestionSelect } from './dynamic-form/models/question-select';
import { QuestionText } from './dynamic-form/models/question-text';
import { QuestionRadio } from "./dynamic-form/models/question-radio";
import { Validators, FormGroup } from "@angular/forms";
import { QuestionUploadImg } from "./dynamic-form/models/question-upload-img";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public questionData;

  ngOnInit(): void {
    this.questionData = this.prepareData();
  }

  private prepareData() {
    const questions: QuestionBase<any>[] = [
      new QuestionText<string>({
        key: 'text',
        type: 'text',
        label: '文本组件',
        value: 'hihihiHi好',
        order: 0,
        description: 'no nononono nonono',
        errMsg: '长度1-60个字',
        validators: [Validators.min(1), Validators.max(5)],
      }),
      new QuestionRadio<number>({
        key: 'radio',
        label: 'Radio组件',
        value: 1,
        order: 0,
        description: 'no nononono nonono',
        validators: [],
        radioOptions: [{
          key: 'template-normal',
          value: 1,
          label: '图文',
          checked: true,
        }, {
          key: 'template-float',
          label: '浮层',
          value: 2,
        }]
      }),
      new QuestionBase<string>({
        key: 'base',
        label: 'bae',
        value: 'base',
        order: 0,
        description: 'no nononono nonono',
        validators: [],
      }),
      new QuestionUploadImg({
        key: 'bgUrl',
        label: '上传背景',
        value: '',
        order: 4,
        description: '背景上传',
        validators: [Validators.required],
        btnContent: 'upload',
        uploadHandler: (form: FormGroup) => {
          console.log('hi');
          form.patchValue({bgUrl: 'address'});
        },
      })
    ];
    return questions;
  }
}
