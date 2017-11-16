import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseInputComponent } from "../base-input/base-input.component";
import { QuestionRadio } from "../../models/question-radio";

@Component({
  selector: 'radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RadioInputComponent extends BaseInputComponent implements OnInit {
  public question: QuestionRadio<any>;
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
