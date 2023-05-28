import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { WalletComponent } from './pages/account/pages/wallet/wallet.component';
import { AppointmentComponent } from './pages/account/pages/appointment/appointment.component';
import { FavouriteComponent } from './pages/account/pages/favourite/favourite.component';
import { PaymentComponent } from './pages/account/pages/payment/payment.component';
import { MyAddressComponent } from './pages/account/pages/my-address/my-address.component';
import { AccountSettingComponent } from './pages/account/pages/account-setting/account-setting.component';
import { LoyalityPointComponent } from './pages/account/pages/loyality-point/loyality-point.component';
import { RedeemPointsComponent } from './pages/account/pages/redeem-points/redeem-points.component';
import { PointToMoneyComponent } from './pages/account/pages/point-to-money/point-to-money.component';
import { MyBookingComponent } from './pages/account/pages/my-booking/my-booking.component';
import { BookingDoneComponent } from './pages/account/pages/my-booking/booking-done/booking-done.component';
import { BookingCancalledComponent } from './pages/account/pages/my-booking/booking-cancalled/booking-cancalled.component';
import { OrderDetailsComponent } from './pages/account/pages/my-booking/order-details/order-details.component';

const routes: Routes = [
  {
      path:'', 
      component: AccountComponent,
      children: [
 
        { path: 'wallet', component: WalletComponent },
        { path: 'appointment', component: AppointmentComponent },
        { path: 'fav', component: FavouriteComponent },
        { path: 'payment', component: PaymentComponent },
        { path: 'address', component: MyAddressComponent },
        { path: 'account-setting', component: AccountSettingComponent },
        { path: 'loyality', component: LoyalityPointComponent },
        { path: 'redeem', component: RedeemPointsComponent },
        { path: 'money-cal', component: PointToMoneyComponent },
        { path: 'my-booking', component: MyBookingComponent },
        { path: 'booking-done', component: BookingDoneComponent },
        { path: 'booking-cancalled', component: BookingCancalledComponent },
        { path: 'order-details', component: OrderDetailsComponent },












  
  
  
  
  
     
      ]
    },
  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
