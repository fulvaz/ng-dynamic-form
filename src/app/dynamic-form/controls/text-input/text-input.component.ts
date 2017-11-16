import { Component, OnChanges } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BaseInputComponent } from "../base-input/base-input.component";


@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent extends BaseInputComponent{
  constructor() {
    super();
  }
}
