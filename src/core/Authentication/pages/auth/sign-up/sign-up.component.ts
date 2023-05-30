import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
// import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { AuthService } from './../auth-services/auth.service';
import { Country } from '@angular-material-extensions/select-country';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  countryFormControl = new FormControl();
  countryFormGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private AuthService: AuthService
  ) {}

  ngOnInit(): void {
    this.countryFormGroup = this.formBuilder.group({
      country: [],
    });
  }

  onChangeCountry(country: Country): void {
    console.log('country => ', country);
  }
}
