import { Component } from '@angular/core';
import { Validators, FormBuilder,  } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],


})
export class CheckoutComponent {
  
  constructor(private _formBuilder: FormBuilder) {}

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

}
