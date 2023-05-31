import { Component, OnInit, Provider } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProviderServicesService } from 'src/provider-services.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  constructor(
    private router: Router,
    private provider: ProviderServicesService
  ) {}
  ngOnInit(): void {
    this.getCartData();
  }
  cart: any = [];
  totalPrice!: number;
  totalTime!: number;
  getCartData() {
    this.provider.getServicesToCart().subscribe((response) => {
      this.cart = response.Result;
      debugger;
      this.totalPrice = response?.Result?.TotalPrice;
      this.totalTime = response?.Result?.Booking?.Time;
      this.provider.cartNo = response?.Result?.Booking?.Services?.length;
    });
  }


}
