import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { AboutUsComponent } from './core/about-us/about-us.component';
import { ContactUsComponent } from './core/contact-us/contact-us.component';
import { ServicesComponent } from './core/services/services.component';
import { CoreComponent } from './core/core.component';
import { AuthModule } from 'src/core/Authentication/pages/auth/auth.module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Ng2TelInputModule} from 'ng2-tel-input';
import {NgxMatIntlTelInputComponent} from 'ngx-mat-intl-tel-input';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { ServiceDetailsComponent } from './core/services/pages/service-details/service-details.component';
import { ServiceBookingDetailComponent } from './core/services/pages/service-booking-detail/service-booking-detail.component';
import { FinalBookingComponent } from './core/services/pages/final-booking/final-booking.component';
import { PurchaseGiftCardComponent } from './core/services/pages/purchase-gift-card/purchase-gift-card.component';
import { PurchaseFinalCardComponent } from './core/services/pages/purchase-final-card/purchase-final-card.component';
import { PurchaseRedeemComponent } from './core/services/pages/purchase-redeem/purchase-redeem.component';
import { LikePayComponent } from './core/services/pages/like-pay/like-pay.component';
import { SummaryComponent } from './core/services/pages/summary/summary.component';
import { NewAddressComponent } from './core/services/pages/new-address/new-address.component';
import { ManWomanCardComponent } from './core/services/pages/man-woman-card/man-woman-card.component';

@NgModule({
  declarations: [
    ServicesComponent,
    ContactUsComponent,
    AboutUsComponent,
    CoreComponent,
    ServiceDetailsComponent,
    ServiceBookingDetailComponent,
    FinalBookingComponent,
    PurchaseGiftCardComponent,
    PurchaseFinalCardComponent,
    PurchaseRedeemComponent,
    LikePayComponent,
    SummaryComponent,
    NewAddressComponent,
    ManWomanCardComponent

  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AuthModule,
    MatInputModule,
    MatFormFieldModule,
    Ng2TelInputModule,
    NgxMatIntlTelInputComponent,
    NgxIntlTelInputModule,
    
    
    
  ],


  exports:[]
})
export class CoreModule { }
