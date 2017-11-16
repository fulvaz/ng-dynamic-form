import { Component, Input } from '@angular/core';
import { BaseInputComponent } from "../base-input/base-input.component";
import { QuestionSelect } from "../../models/question-select";


@Component({
  selector: 'select-input',
  templateUrl: './select-input-component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent extends BaseInputComponent {
  @Input()
  public question: QuestionSelect;
}
