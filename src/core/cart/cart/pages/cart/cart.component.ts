import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProviderServicesService } from 'src/provider-services.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  totalPrice!: number;
  totalTime!: any;
  ngOnInit(): void {
    this.getCartData();
  }
  cart: any = [];
  constructor(private provider: ProviderServicesService) {}



  getCartData(){
    this.provider.getServicesToCart().subscribe((response)=>{
      this.cart=response.Result;
      debugger;
      this.totalPrice=response?.Result?.TotalPrice;
      this.totalTime=response?.Result?.Booking?.Time;
      this.provider.cartNo=response?.Result?.Booking?.Services?.length;

    })
  }




}
