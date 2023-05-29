import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartMainComponent } from './pages/cart-main/cart-main.component';
import { CartComponent } from './pages/cart/cart.component';
import { PaymentInfoComponent } from './pages/payment-info/payment-info.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

const routes: Routes = [
  {
      path:'', 
      component: CartMainComponent,
      children: [
 
        { path: 'cart', component:CartComponent  },
        { path: 'pay-info', component:PaymentInfoComponent  },
        { path: 'summary', component:SummaryComponent  },
        { path: 'checkout', component:CheckoutComponent  },



       












  
  
  
  
  
     
      ]
    },
  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
