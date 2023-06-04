import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartMainComponent } from './pages/cart-main/cart-main.component';
import { CartComponent } from './pages/cart/cart.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PaymentInfoComponent } from './pages/payment-info/payment-info.component';
import { PaymentSummaryComponent } from './pages/payment-summary/payment-summary.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CartMainComponent,
    CartComponent,
    SummaryComponent,
    CheckoutComponent,
    PaymentInfoComponent,
    PaymentSummaryComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    SharedModule,
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class CartModule {}
