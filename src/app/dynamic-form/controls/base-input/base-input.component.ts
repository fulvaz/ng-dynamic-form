import { Input, Component, DoCheck, SimpleChanges, OnChanges } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { QuestionBase } from "../../models/question-base";

@Component({
  selector: 'base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.scss']
})
export class BaseInputComponent {


  @Input()
  public question: QuestionBase<any>;
  @Input()
  public form: FormGroup;

  get ifShowErr() {
        const val = this.form.get(this.question.key);
        return val.invalid && (val.touched || val.dirty);
  }
}
