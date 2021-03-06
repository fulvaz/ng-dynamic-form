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

export class QuestionText<T> extends QuestionBase<T> {
  constructor(options) {
    super(options);
    this.type = options.type || 'text';
    this.placeholder = options.placeholder || '';
    this.componentName = options.componentName || 'TextInputComponent';
  }
  public type;
  public placeholder = '';
}
