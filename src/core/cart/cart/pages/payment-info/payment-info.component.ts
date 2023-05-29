import { Component, OnInit, Provider } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderServicesService } from 'src/provider-services.service';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.scss']
})
export class PaymentInfoComponent implements OnInit {

  cartDate:any;
  totalPrice!:number;
  Tax!:number;
  priceAfterTax!:number;
  TotalPriceWithTaxDiscount!:number;
constructor(private router :Router,private Provider:ProviderServicesService){

}
  ngOnInit(): void {

    this.getCartDate()
  }
NavigateToCheckOut(){
  this.router.navigate(['/checkout'])
}

getCartDate(){
  this.Provider.getServicesToCart().subscribe((res)=>{
    this.cartDate=res?.Result;
    this.Tax=res?.Result?.TaxRate;
    this.totalPrice=res?.Result?.TotalPrice;
    this.priceAfterTax=res?.Result?.TotalPriceWithTax;
    this.TotalPriceWithTaxDiscount=res?.Result?.TotalPriceWithTaxAfterDiscount


  })

}
}
