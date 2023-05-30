import { Component, EventEmitter, Output } from '@angular/core';
import { Country } from '@angular-material-extensions/select-country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent {
  @Output() changeCountry = new EventEmitter<Country>();
  predefinedCountries: Country[] = [
    {
      name: 'Germany',
      alpha2Code: 'DE',
      alpha3Code: 'DEU',
      numericCode: '276',
      callingCode: '+49',
    },
    {
      name: 'Greece',
      alpha2Code: 'GR',
      alpha3Code: 'GRC',
      numericCode: '300',
      callingCode: '+30',
    },
    {
      name: 'France',
      alpha2Code: 'FR',
      alpha3Code: 'FRA',
      numericCode: '250',
      callingCode: '+33',
    },
    {
      name: 'Belgium',
      alpha2Code: 'BE',
      alpha3Code: 'BEL',
      numericCode: '056',
      callingCode: '+32',
    },
  ];

  onCountrySelected($event: Country) {
    this.changeCountry.emit($event);
  }
}
