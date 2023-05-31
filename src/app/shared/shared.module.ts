import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './components/country/country.component';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './components/carousel/carousel.component';

const COMPONENTS = [CountryComponent, CarouselComponent];

const MATERIAL_MODULES = [MatSelectCountryModule, CarouselModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ...MATERIAL_MODULES],
  exports: [...MATERIAL_MODULES, ...COMPONENTS],
})
export class SharedModule {}
