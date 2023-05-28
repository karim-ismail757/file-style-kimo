import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from 'src/core/Authentication/pages/auth/auth.module';
import { CoreModule } from 'src/core/Pages/core/core.module';

import * as $ from "jquery";
import {} from 'ngx-mat-intl-tel-input';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { AccountModule } from 'src/core/account/account.module';
import { CartModule } from 'src/core/cart/cart/cart.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperIcon } from '@angular/material/stepper';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
import { HttpClientModule } from '@angular/common/http';




@NgModule({

  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    CoreModule,
    NgxIntlTelInputModule,
    AccountModule,
    Ng2TelInputModule,
    CartModule,
    ReactiveFormsModule,
    MatSelectCountryModule,
    MatSelectCountryModule.forRoot('de'), // you can use 'br' | 'de' | 'en' | 'es' | 'fr' | 'hr' | 'hu' | 'it' | 'nl' | 'pt' --> MatSelectCountrySupportedLanguages
    HttpClientModule,



    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // See: https://material.angular.io/components/icon/overview#svg-icons.
    iconRegistry.addSvgIcon('angular', sanitizer.bypassSecurityTrustResourceUrl('/assets/angular.svg'));
  }
}
