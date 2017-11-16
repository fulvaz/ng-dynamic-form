import { QuestionBase } from './question-base';

// new QuestionText<string>({
//   key: 'text',
//   type: 'text',
//   label: '文本组件',
//   value: 'hihihiHi好',
//   order: 0,
//   description: 'no nononono nonono',
//   errMsg: '长度1-60个字',
//   validators: [Validators.min(1), Validators.max(5)],
// })

export class QuestionTextMutil<T> extends QuestionBase<T> {
  constructor(options) {
    super(options);
    this.componentName = options.componentName || 'TextMultiInputComponent';
    this.questions = options.questions;
  }
  public questions: QuestionBase<T>[];
}
