import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderServicesService } from 'src/provider-services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services: any = [];
  constructor(private provider: ProviderServicesService, private router: Router) {}
  ngOnInit(): void {
    this.getAllData();
  }

  category: any = [];

  data = {
    AccountSetupId: '17739',
    CompanyId: 17505,

    DoneInHome: 0,
  };
  getAllData() {
    this.provider
      .getAllServicesData({
        AccountSetupId: '17739',
        CompanyId: 17505,

        DoneInHome: 0,
      })
      .subscribe((res: any) => {
        console.log(res, 'hello');
        this.category = res.Result.Services;
        console.log(this.category, 'temsah');
      });
  }

  dataX(e: any) {

    console.log(e.target.value);
    this.services.push(e.target.value);
    this.provider.servicesIds = e.target.value;;
    this.provider.servicesIds = this.services;
    localStorage.setItem('services', this.services);
  
  }


}
