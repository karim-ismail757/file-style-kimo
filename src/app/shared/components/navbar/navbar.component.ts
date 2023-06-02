
import { Component, OnInit } from '@angular/core';
import { ProviderServicesService } from 'src/provider-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit  {
  cartNo!:number;
constructor(private provider:ProviderServicesService){

}
  ngOnInit(): void {
    this.getCartNo();
  }

  getCartNo(){
    this.provider.getServicesToCart().subscribe((res)=>{
      this.cartNo=res.Result?.Booking?.Services?.length;


    })
  }


}
