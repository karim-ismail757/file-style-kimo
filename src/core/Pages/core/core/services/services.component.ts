import { Component, OnInit } from '@angular/core';
import { ProviderServicesService } from 'src/provider-services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit{

  constructor(private provider:ProviderServicesService){

  }
  ngOnInit(): void {
  
  this.getAllData()
  }

  category:any=[];


  data={
    AccountSetupId: "17739",
CompanyId: 17505,

 

DoneInHome: 0
  }
  getAllData(){
    this.provider.getAllServicesData({
      AccountSetupId: "17739",
      CompanyId: 17505,
      
       
      
      DoneInHome: 0
    }).subscribe((res:any)=>{
      console.log(res,"hello");
      this.category=res.Result.Services;;
      console.log(this.category,"temsah")

    })
    
  }



}
