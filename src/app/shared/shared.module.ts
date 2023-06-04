import { NgModule } from '@angular/core';
import { CountryComponent } from './components/country/country.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {
  MatSelectCountryLangToken,
  MatSelectCountryModule,
} from '@angular-material-extensions/select-country';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
  CountryComponent,
  CarouselComponent,
  FooterComponent,
  NavbarComponent,
  NotFoundComponent,
];

const MATERIAL_MODULES = [
  CarouselModule,
  HttpClientModule,
  MatSelectCountryModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ...MATERIAL_MODULES,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    ...MATERIAL_MODULES,
    ...COMPONENTS,
  ],
  providers: [{ provide: MatSelectCountryLangToken, useValue: 'en' }],
})
export class SharedModule {}
