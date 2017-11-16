import { Input, Component, DoCheck, SimpleChanges, OnChanges } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { QuestionBase } from "../../models/question-base";

@Component({
  selector: 'url-input',
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.scss']
})
export class UrlInputComponent {
  @Input()
  public question: QuestionBase<any>;
  @Input()
  public form: FormGroup;

  get ifShowErr() {
        const val = this.form.get(this.question.key);
        return val.invalid && (val.touched || val.dirty);
  }
}
