import { QuestionBase } from './question-base';

export class QuestionTemplateRadio<T> extends QuestionBase<T> {
    constructor(options: QuestionTemplateRadio<T>) {
        super(options);
        this.componentName = options.componentName || 'RadioTemplateInputComponent';
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
