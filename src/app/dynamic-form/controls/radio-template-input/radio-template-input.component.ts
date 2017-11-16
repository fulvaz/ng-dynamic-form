import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseInputComponent } from "../base-input/base-input.component";
import { QuestionRadio } from "../../models/question-radio";
import { QuestionBase } from "../../models/question-base";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { QuestionText } from "../../models/question-text";

/**
 * 业务组件
 */



@Component({
  selector: 'radio-template-input',
  templateUrl: './radio-template-input.component.html',
  styleUrls: ['./radio-template-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RadioTemplateInputComponent extends BaseInputComponent implements OnInit {
  public question: QuestionRadio<any>;

  public questionInfluenced: QuestionBase<any>[];

  public normalQuestion;

  constructor() {
    super();
  }

  public onRadioChange() {
    switch (this.form.get(this.question.key).value) {
      case 1: {
        this.onFloatSelect();
        break;
      }
      case 2: {
        this.onNormalSelect();
        break;
      }
    }
  }



  public ngOnInit() {
    this.normalQuestion = [
      new QuestionText<string>({
        key: 'template_title',
        type: 'text',
        label: '标题',
        value: '',
        order: this.question.order,
        errMsg: '长度在1-20个字以内',
        placeholder: '1-20字',
        validators: [Validators.min(1), Validators.max(20)],
      }),
      new QuestionText<string>({
        key: 'template_description',
        type: 'text',
        label: '描述',
        value: '',
        order: this.question.order,
        placeholder: '1-20字',
        errMsg: '长度在1-20个字以内',
        validators: [Validators.min(1), Validators.max(20)],
      })
    ];

    this.questionInfluenced = this.normalQuestion;
    this.addControls(this.questionInfluenced, this.form);
  }

  protected onFloatSelect() {
    this.questionInfluenced = [
      new QuestionText<string>({
        key: 'template_title',
        type: 'text',
        label: 'APP名称',
        value: '',
        order: this.question.order,
        errMsg: '长度在1-6个字以内',
        placeholder: '1-6字',
        validators: [Validators.min(1), Validators.max(6)],
      }),
      new QuestionText<string>({
        key: 'template_description',
        type: 'text',
        label: 'APP描述',
        value: '',
        order: this.question.order,
        errMsg: '长度在1-60个字以内',
        placeholder: '1-60字',
        validators: [Validators.min(1), Validators.max(60)],
      })
    ];
    this.setControls(this.questionInfluenced, this.form);
  }

  protected onNormalSelect() {
    this.questionInfluenced = this.normalQuestion;
    this.setControls(this.questionInfluenced, this.form);
  }

  protected addControls(questions, form: FormGroup) {
    questions.forEach(q => {
      form.addControl(q.key, new FormControl(q.value || '', q.validators));
    });
  }

  protected setControls(questions, form: FormGroup) {
    questions.forEach(q => {
      form.setControl(q.key, new FormControl(q.value || '', q.validators));
    });
  }
}
