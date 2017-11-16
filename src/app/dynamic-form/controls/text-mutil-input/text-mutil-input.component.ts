import { Component, OnChanges, OnInit, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BaseInputComponent } from "../base-input/base-input.component";
import { QuestionTextMutil } from "../../models/question-text-mutil-input";


@Component({
  selector: 'text-mutil-input',
  templateUrl: './text-mutil-input.component.html',
  styleUrls: ['./text-mutil-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TextMultiInputComponent extends BaseInputComponent implements OnInit {
  public question: QuestionTextMutil<string>;
  ngOnInit(): void {
    this.addControls(this.question.questions, this.form);
  }
  constructor() {
    super();
  }

  protected addControls(questions, form: FormGroup) {
    questions.forEach(q => {
      form.addControl(q.key, new FormControl(q.value || '', q.validators));
    });
  }
}
