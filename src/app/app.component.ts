import { Component, OnInit } from '@angular/core';
import { QuestionBase } from './dynamic-form/models/question-base';
import { QuestionSelect } from './dynamic-form/models/question-select';
import { QuestionText } from './dynamic-form/models/question-text';
import { QuestionRadio } from "./dynamic-form/models/question-radio";
import { Validators, FormGroup } from "@angular/forms";
import { QuestionUploadImg } from "./dynamic-form/models/question-upload-img";
import { QuestionUrl } from "./dynamic-form/models/question-url";
import { QuestionTextarea } from "./dynamic-form/models/question-textarea";
import { QuestionTemplateRadio } from "./dynamic-form/models/question-template-radio";
import { DO_NOT_SEND_KEY } from './dynamic-form/config/config';
import { QuestionTextMutil } from "./dynamic-form/models/question-text-mutil-input";

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
        order: 1,
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
        order: 2,
        description: 'no nononono nonono',
        validators: [],
      }),
      new QuestionUploadImg({
        key: 'bgUrl',
        label: '上传背景',
        value: '',
        order: 3,
        description: '背景上传',
        validators: [Validators.required],
        btnContent: 'upload',
        uploadHandler: (form: FormGroup) => {
          console.log('hi');
          form.patchValue({bgUrl: 'address'});
        },
      }),
      new QuestionUrl({
        key: 'apkUrl',
        label: '上传apk',
        value: '',
        order: 4,
        description: 'apk上传',
        placeholder: '输入apk url',
        uploadHandler: (form: FormGroup) => {
          console.log('hi');
          form.patchValue({apkUrl: 'address apk'});
        },
        linkLabel: '安卓apk下载链接',
        uploadLabel: '安卓apk包',
        validators: [Validators.required],
        errMsg: '必须输入链接',
      }),
      new QuestionUrl({
        key: 'apkUrl2',
        label: '上传apk',
        value: '',
        order: 5,
        description: 'apk上传',
        placeholder: '输入apk url',
        uploadHandler: (form: FormGroup) => {
          console.log('hi');
          form.patchValue({apkUrl: 'address apk'});
        },
        validators: [Validators.required],
      }),
      new QuestionTextarea({
        key: 'text2',
        type: 'text',
        label: '文本组件',
        value: '',
        placeholder: '3123';
        order: 6,
        description: 'no nononono nonono',
        errMsg: '长度1-60个字',
        validators: [Validators.min(1), Validators.max(5)],
      }),
      new QuestionTemplateRadio<number>({
        key: 'template_radio',
        label: 'Radio组件',
        value: 1,
        order: 7,
        description: 'no nononono nonono',
        validators: [],
        radioOptions: [{
          key: 'template-normal1',
          value: 1,
          label: '图文',
          checked: true,
        }, {
          key: 'template-float1',
          label: '浮层',
          value: 2,
        }]
      }),
      new QuestionTextMutil<string>({
        key: DO_NOT_SEND_KEY,
        label: '按钮颜色',
        order: 8,
        questions: [
          new QuestionText({
            key: 'template-btn-color',
            type: 'text',
            label: '文字',
            value: '',
            order: 8, // 子组件的order可以不管~
            description: '',
            errMsg: '只能是形如#123ABC的16进制颜色',
            validators: [Validators.pattern(/^#[0-9A-Za-z]{6}$/)],
          }),
          new QuestionText({
            key: 'template-bg-color',
            type: 'text',
            label: '背景',
            value: '',
            order: 8, // 子组件的order可以不管~
            description: '',
            errMsg: '只能是形如#123ABC的16进制颜色',
            validators: [Validators.pattern(/^#[0-9A-Za-z]{6}$/)],
          })
        ]
      }),
    ];
    return questions;
  }
}
