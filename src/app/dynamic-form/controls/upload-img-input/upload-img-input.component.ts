import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { BaseInputComponent } from "../base-input/base-input.component";

@Component({
  selector: 'app-upload-img-input',
  templateUrl: './upload-img-input.component.html',
  styleUrls: ['./upload-img-input.component.scss'],
})
export class UploadImgInputComponent extends BaseInputComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
