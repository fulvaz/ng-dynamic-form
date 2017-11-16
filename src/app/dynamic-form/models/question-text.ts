import { QuestionBase } from './question-base';

export class QuestionText<T> extends QuestionBase<T> {
    constructor(options) {
        super(options);
        this.type = options.type || 'text';
        this.placeholder = options.placeholder || '';
        this.componentName = 'TextInputComponent';
    }
    public type;
    public placeholder = '';
}
