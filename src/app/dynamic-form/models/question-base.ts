export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  description: string;
  errMsg?: string;

  // 配置属性
  order: number;
  validators = [];
  componentName?: string;

  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      order?: number,
      description?: string,
      errMsg?: string,
      validators?,
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.description = options.description || '';
    this.validators = options.validators || [];
    this.errMsg = options.errMsg || '';
    this.componentName = 'BaseInputComponent';
  }
}
