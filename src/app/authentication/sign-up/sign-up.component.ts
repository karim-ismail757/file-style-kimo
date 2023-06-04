import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Country } from '@angular-material-extensions/select-country';
import { AuthService } from 'src/app/core/services/auth.service';

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
      mobile: [null, Validators.required],
    });
  }

  onChangeCountry(country: Country): void {
    console.log('country => ', country);
  }
}
