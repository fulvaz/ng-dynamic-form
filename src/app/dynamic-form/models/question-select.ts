import { QuestionBase } from './question-base';

export class QuestionSelect extends QuestionBase<string> {
  constructor(options) {
    super(options);

    this.componentName = options.componentName || 'SelectInputComponent';
  }
}
