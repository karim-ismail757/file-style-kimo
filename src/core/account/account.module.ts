import { NgModule } from '@angular/core';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './pages/account/account.component';
import { AuthModule } from '../Authentication/pages/auth/auth.module';
import { WalletComponent } from './pages/account/pages/wallet/wallet.component';
import { AppointmentComponent } from './pages/account/pages/appointment/appointment.component';
import { FavouriteComponent } from './pages/account/pages/favourite/favourite.component';
import { PaymentComponent } from './pages/account/pages/payment/payment.component';
import { MyAddressComponent } from './pages/account/pages/my-address/my-address.component';
import { AccountSettingComponent } from './pages/account/pages/account-setting/account-setting.component';
import { LoyalityPointComponent } from './pages/account/pages/loyality-point/loyality-point.component';
import { RedeemPointsComponent } from './pages/account/pages/redeem-points/redeem-points.component';
import { MoneyToPointComponent } from './pages/account/pages/money-to-point/money-to-point.component';
import { PointToMoneyComponent } from './pages/account/pages/point-to-money/point-to-money.component';
import { MyBookingComponent } from './pages/account/pages/my-booking/my-booking.component';
import { BookingDoneComponent } from './pages/account/pages/my-booking/booking-done/booking-done.component';
import { BookingCancalledComponent } from './pages/account/pages/my-booking/booking-cancalled/booking-cancalled.component';
import { OrderDetailsComponent } from './pages/account/pages/my-booking/order-details/order-details.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AccountComponent,
    WalletComponent,
    AppointmentComponent,
    FavouriteComponent,
    PaymentComponent,
    MyAddressComponent,
    AccountSettingComponent,
    LoyalityPointComponent,
    RedeemPointsComponent,
    MoneyToPointComponent,
    PointToMoneyComponent,
    MyBookingComponent,
    BookingDoneComponent,
    BookingCancalledComponent,
    OrderDetailsComponent,
  ],
  imports: [
    AccountRoutingModule,
    AuthModule,
    CommonModule
    
    

],
  exports:[]
})
export class AccountModule { }
