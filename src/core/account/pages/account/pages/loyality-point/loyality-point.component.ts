import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { loyality } from 'src/app/models/loyality';
import { ProviderServicesService } from 'src/provider-services.service';

@Component({
  selector: 'app-loyality-point',
  templateUrl: './loyality-point.component.html',
  styleUrls: ['./loyality-point.component.scss']
})
export class LoyalityPointComponent {
  loyality:any=[];

  ClientId:loyality={ClientId: 230963}
  ConsumePointHistory:any=[] ;
  GainPointHistory:any=[];
  
  constructor(private ProviderService:ProviderServicesService,private router:Router){}

  ngOnInit(){
    this.getLoyalityPoint(this.ClientId);
  }
  getLoyalityPoint(clientId:loyality){
    this.ProviderService.getLoyalityPoints(this.ClientId).subscribe((res: any)=>{
      this.loyality=res;
      console.log(this.loyality);
      

    })

  }

  goToRedeemPoint(){

    this.router.navigate(['/redeem']);
  }
}
