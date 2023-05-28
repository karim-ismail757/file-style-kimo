import { Component, OnInit } from "@angular/core";
import { NgxMatIntlTelInputComponent  } from "ngx-mat-intl-tel-input";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { AuthService } from './../auth-services/auth.service';
import { MatIcon } from "@angular/material/icon";
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { Router } from "@angular/router";
import { countries } from "src/core/Authentication/models/country-data-store";
import { Country } from "@angular-material-extensions/select-country";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  countryFormControl = new FormControl();
  countryFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder,private AuthService:AuthService) {
  }

  ngOnInit(): void {

    this.countryFormGroup = this.formBuilder.group({
      country: []
    });

//     this.countryFormGroup.get('country').valueChanges
// .subscribe(country => console
// .log('this.countryFormGroup.get("country").valueChanges', country));

//     this.countryFormControl.valueChanges
// .subscribe(country => console
// .log('this.countryFormControl.valueChanges', country));


}


// signUp(form: FormGroup) {
//   this.AuthService.SignUp(this.myForm.value).subscribe((response: any)=> {
//     console.log(this.myForm.value);

//   })


}