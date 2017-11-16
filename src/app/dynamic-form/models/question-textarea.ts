import { QuestionBase } from './question-base';

export class QuestionTextarea<T> extends QuestionBase<T> {
  constructor(options) {
    super(options);
    this.placeholder = options.placeholder || '';
    this.componentName = options.componentName || 'TextareaInputComponent';
  }
  public placeholder = '';
}
