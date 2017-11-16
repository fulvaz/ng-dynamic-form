import { QuestionBase } from './question-base';

export class QuestionRadio<T> extends QuestionBase<T> {
    constructor(options: QuestionRadio<T>) {
        super(options);
        this.componentName = 'RadioInputComponent';
        this.radioOptions = options.radioOptions;
    }
    public radioOptions: RadioOption[];
}

interface RadioOption {
  key: any;
  value: any;
  label: string;
  checked?: boolean;
}
