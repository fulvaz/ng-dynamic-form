import { QuestionBase } from './question-base';

export class QuestionUploadImg extends QuestionBase<string> {
  constructor(options) {
    super(options);
    this.componentName = 'UploadImgInputComponent';
    this.btnContent = options.btnContent || '上传';
    this.uploadHandler = options.uploadHandler;
  }

  public btnContent: string;
  public uploadHandler: () => {};
}
