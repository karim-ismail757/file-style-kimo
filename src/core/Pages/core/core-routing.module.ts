import { LikePayComponent } from './core/services/pages/like-pay/like-pay.component';
import { PurchaseRedeemComponent } from './core/services/pages/purchase-redeem/purchase-redeem.component';
import { PurchaseFinalCardComponent } from './core/services/pages/purchase-final-card/purchase-final-card.component';
import { PurchaseGiftCardComponent } from './core/services/pages/purchase-gift-card/purchase-gift-card.component';
import { FinalBookingComponent } from './core/services/pages/final-booking/final-booking.component';
import { ServiceBookingDetailComponent } from './core/services/pages/service-booking-detail/service-booking-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './core/about-us/about-us.component';
import { ContactUsComponent } from './core/contact-us/contact-us.component';
import { CoreComponent } from './core/core.component';
import { ServicesComponent } from './core/services/services.component';
import { NewAddressComponent } from './core/services/pages/new-address/new-address.component';
import { ManWomanCardComponent } from './core/services/pages/man-woman-card/man-woman-card.component';

const routes: Routes = [
{
    path:'core', 
    component: CoreComponent,
    children: [
      
{ path: 'contact-us', component: ContactUsComponent },
{ path: 'about-us', component:AboutUsComponent },
{ path: 'service', component: ServicesComponent},
{ path: 's-booking-detail', component: ServiceBookingDetailComponent},
{ path: 'final-booking', component: FinalBookingComponent},
{ path: 'gift-card', component: PurchaseGiftCardComponent},
{ path: 'final-card', component: PurchaseFinalCardComponent},
{ path: 'redeem', component: PurchaseRedeemComponent},
{ path: 'like-pay', component: LikePayComponent},
{ path: 'n-address', component: NewAddressComponent},
{ path: 'choose-card', component: ManWomanCardComponent},













   
    ]
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
