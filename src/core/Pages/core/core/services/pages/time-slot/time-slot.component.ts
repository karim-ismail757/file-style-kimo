import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProviderServicesService } from 'src/provider-services.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.scss']
})
export class TimeSlotComponent implements OnInit{

  daysOfYear:any;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    rtl: true,
    margin: 15,
    navSpeed: 700,
    navText: [
      "<i class='fas fa-angle-right'></i>",
      "<i class='fas fa-angle-left'></i>",
    ],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 4,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };
constructor(private provider:ProviderServicesService){

}
  ngOnInit(): void {
    this.getEmp(this.data);
    this.getTimeSlots(this.dataslot);


  }
  bookingDate:any;
  selected: any;
  datepipe: any;
  accountSetupId: any;
  employeeId: any;
  sharedService: any;
  providerService: any;
  hourSlots: any;
  chooseDate(d:any, i:any) {
    this.selected = i;
    
    
    this.bookingDate = this.datepipe.transform(
      d.setDate(d.getDate()),
      'yyyy-MM-dd'

    );
    

    let employee = {
      DateFrom: this.bookingDate,
      AccountSetupId: this.accountSetupId,
      PagingEnabled: false,
      EmployeeId: this.employeeId,
      ClientId: this.sharedService.ClientId,
    };
    this.provider.GetTimeSlots(employee).subscribe((response: any) => {
      if (response) {
        console.log(response)
        this.hourSlots = response.SingleHourSlots;
      }
    });
  }

  data:any={AccountSetupId: 18937, Status: 1}
  emp:any=[];

  getEmp(data:any){
    this.provider.getEmployee(this.data).subscribe((res:any)=>{
      this.emp=res.Employees;
      console.log(this.emp,"heloo");
      

    })

  }
   today = new Date();
   dd = String(this.today.getDate()).padStart(2, '0');
   mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
  yyyy = this.today.getFullYear();
  
  todayOne = this.mm + '-' + this.dd + '-' + this.yyyy;



dataslot={DateFrom:this.todayOne.toString(), AccountSetupId: 18937, PagingEnabled: false, EmployeeId: -1, ClientId: 230963}
timeSlote:any;
  getTimeSlots(data:any){
    this.provider.GetTimeSlots(this.dataslot).subscribe((res)=>{
      console.log(res);
      
      

    })
  }
}

