import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from 'src/core/Authentication/pages/auth/auth.module';
import { CoreModule } from 'src/core/Pages/core/core.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

import * as $ from "jquery";
import {} from 'ngx-mat-intl-tel-input';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { AccountModule } from 'src/core/account/account.module';
import { CartModule } from 'src/core/cart/cart/cart.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperIcon } from '@angular/material/stepper';
import { MatIconRegistry } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ProviderServicesService } from 'src/provider-services.service';
import { CommonModule } from '@angular/common';




@NgModule({

  declarations: [
    AppComponent,

  ],
  imports: [
    
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    CoreModule,
    NgxIntlTelInputModule,
    AccountModule,
    Ng2TelInputModule,
    CartModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    FormsModule,
     AppRoutingModule ,
     CommonModule,
    AccountModule,
    BrowserModule,
    CarouselModule




    
  ],
  providers: [    ProviderServicesService
  ],
  bootstrap: [AppComponent],
  exports:[CommonModule,CarouselModule]
})
export class AppModule { 

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // See: https://material.angular.io/components/icon/overview#svg-icons.
    iconRegistry.addSvgIcon('angular', sanitizer.bypassSecurityTrustResourceUrl('/assets/angular.svg'));
  }
}
