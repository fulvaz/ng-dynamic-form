import { Component, OnChanges } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BaseInputComponent } from "../base-input/base-input.component";


@Component({
  selector: 'textarea-input',
  templateUrl: './textarea-input.component.html',
  styleUrls: ['./textarea-input.component.scss']
})
export class TextareaInputComponent extends BaseInputComponent {
  constructor() {
    super();
  }
}
