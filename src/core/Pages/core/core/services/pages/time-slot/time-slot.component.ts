import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProviderServicesService } from 'src/provider-services.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.scss'],
})
export class TimeSlotComponent implements OnInit {
  daysOfYear: any;
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    rtl: true,
    margin: 15,
    navSpeed: 700,
    navText: [
      "<i class='fas fa-angle-right'></i>",
      "<i class='fas fa-angle-left'></i>",
    ],

    autoHeight: true,
    lazyLoad: true,
  };
  constructor(private provider: ProviderServicesService) {}
  ngOnInit(): void {
    this.getEmp(this.data);
    this.getTimeSlots(this.dataslot);
  }
  bookingDate: any;
  selected: any;
  datepipe: any;
  accountSetupId: any;
  employeeId: any;
  sharedService: any;
  providerService: any;
  hourSlots: any;

  data: any = { AccountSetupId: 18937, Status: 1 };
  emp: any = [];

  getEmp(data: any) {
    this.provider.getEmployee(this.data).subscribe((res: any) => {
      this.emp = res.Employees;
      console.log(this.emp, 'heloo');
    });
  }
  today = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
  yyyy = this.today.getFullYear();

  todayOne = this.yyyy + '-' + this.mm + '-' + this.dd;

  dateHour: any;
  dataslot = {
    DateFrom: `${this.todayOne}`,
    AccountSetupId: 18937,
    PagingEnabled: false,
    EmployeeId: -1,
    ClientId: 230963,
  };
  timeSlote: any;
  getTimeSlots(data: any) {
    this.provider.getTimeSlot(this.dataslot).subscribe((res) => {
      console.log(res);
      this.dateHour = res;
      console.log(this.dateHour, 'temsah');
    });
  }

  onItemClicked(item: string): void {
    console.log(item);
  }
}
