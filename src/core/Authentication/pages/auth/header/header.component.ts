import { Component, OnInit } from "@angular/core";
import { NgxMatIntlTelInputComponent  } from "ngx-mat-intl-tel-input";
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

declare var jQuery:any;

declare var $: any;  
declare var jQuery: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],




})
export class HeaderComponent implements OnInit {
	separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});

	changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}
  ngOnInit(): void {
    
  }

  onCountryChange(event:any)
{
  console.log(event.dialCode);
  console.log(event.name);
  console.log(event.iso2);
}

}
