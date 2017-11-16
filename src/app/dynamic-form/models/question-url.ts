import { QuestionBase } from './question-base';

export class QuestionUrl<T> extends QuestionBase<T> {
  constructor(options) {
    super(options);
    this.type = options.type || 'text';
    this.placeholder = options.placeholder || '';
    this.componentName = options.componentName || 'UrlInputComponent';
    this.btnContent = options.btnContent || '上传';
    this.uploadHandler = options.uploadHandler;
    this.uploadLabel = options.uploadLabel;
    this.linkLabel = options.linkLabel;
  }
  public type;
  public placeholder = '';
  public btnContent: string;
  public uploadLabel: string;
  public linkLabel: string;
  public uploadHandler: () => {};
}
