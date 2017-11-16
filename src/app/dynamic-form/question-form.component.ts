import { Component, OnInit, Input, Output, EventEmitter, ViewContainerRef, ViewChild, ComponentFactoryResolver, Injector, OnChanges, SimpleChanges } from '@angular/core';
import { QuestionBase } from "./models/question-base";
import { Validators, FormControl, FormGroup } from "@angular/forms";
import { ComponentList } from './config/component-list';

@Component({
  selector: 'question-form',
  templateUrl: 'question-form.component.html'
})
export class QuestionFormComponent implements OnInit, OnChanges {

  @Input()
  public questions;

  public fg: FormGroup;

  public payLoad;

  @Output()
  public submit = new EventEmitter();

  @ViewChild('questionContainer', { read: ViewContainerRef })
  protected mainContainer: ViewContainerRef;

  protected _questions: QuestionBase<any>[];
  protected _fg: FormGroup;

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['questions'].currentValue !== changes['questions'].previousValue) {
      this.fg = this.toFormGroup(changes['questions'].currentValue);
      this.refreshForm(changes['questions'].currentValue, this.fg);
    }
  }

  public onSubmit() {
    this.submit.emit(this.fg.value);
    this.payLoad = JSON.stringify(this.fg.value);
  }

  public constructor(
    protected resolver: ComponentFactoryResolver,
    protected injector: Injector,
  ) {}

  private refreshForm(questions, form) {
    // 这一行可能会出错
    this.mainContainer.clear();
    questions.forEach((q, index) => {
      const componentResolver = this.resolver.resolveComponentFactory(ComponentList[q.componentName]);
      const compCloned = this.mainContainer.createComponent(
        componentResolver,
        index,
        this.injector,
      );
      const compInstance: any = compCloned.instance;
      compInstance.question = q;
      compInstance.form = form;
    });
  }

  private toFormGroup(questions: QuestionBase<any>[]) {
    let group: any = {};

    questions.forEach(q => {
      group[q.key] = new FormControl(q.value || '', q.validators);
    });
    return new FormGroup(group);
  }
}
