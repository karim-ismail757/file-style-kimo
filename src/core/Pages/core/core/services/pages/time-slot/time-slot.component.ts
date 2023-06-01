import { Component, Provider } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProviderServicesService } from 'src/provider-services.service';
import { OnInit } from '@angular/core';
import { CurrentObjectDate } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';

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

  currentMonthObj!: CurrentObjectDate;

  constructor(
    private provider: ProviderServicesService,
    private activatedRoute: ActivatedRoute
  ) {
    const data: any = this.activatedRoute.snapshot.data;
    console.log(data);
  }

  serId: any;
  finalIds: any = [];
  ngOnInit(): void {
    this.getEmp(this.data);
    this.getTimeSlots(this.dataslot);
    this.currentMonthObj = this.getCurrentMonthDays();
    console.log('current month => ', this.currentMonthObj);
    this.serId = localStorage.getItem('services');
    this.finalIds = this.serId.parseInt(this.serId);
  }
  Time: any;
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
  serviceTime!: number;
  dateHour: any;
  dataslot = {
    DateFrom: '2023-06-03', // this.returnCurrentDate(),
    AccountSetupId: 18937,
    PagingEnabled: false,
    EmployeeId: -1,
    ClientId: 230963,
  };
  timeSlote: any;
  getTimeSlots(data: any) {
    this.provider.getTimeSlot(data).subscribe((res) => {
      console.log(res);
      this.dateHour = res;
      console.log(this.dateHour, 'temsah');
    });
  }

  ngAfterContentInit() {
    this.serId = localStorage.getItem('services');
    this.finalIds = this.serId.parseInt(this.serId);
  }

  onItemClicked(date: string): void {
    this.dataslot = { ...this.dataslot, DateFrom: date };
    this.getTimeSlots(this.dataslot);
  }

  returnCurrentDate(): string {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    const todayOne = yyyy + '-' + mm + '-' + dd;
    return todayOne;
  }

  getCurrentMonthDays(): CurrentObjectDate {
    const days = [];
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const dayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const numDays = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= numDays; i++) {
      const date = new Date(year, month, i);
      days.push({ name: dayNames[date.getDay()], number: i });
    }

    return {
      year: year,
      month: { name: monthNames[month + 1], number: month + 1 },
      days: days,
    };
  }

  dataX(e: any) {
    console.log(e.target.innerText);
    this.serviceTime = e.target.innerText;
    this.finalIds = this.serId.parseInt(this.serId);
  }
  dataM: any = {
    
    AccountSetupId: 18937,
    Booking: {
      IsVirusFree: false,
      ClientAddressId: null,
      DoneInHome: 0,
      ServiceIds: this.provider.servicesIds,
      EmployeeId: -1,
      Date: this.dataslot,
      Time: this.serviceTime,
    },
  };

  addNewServices(body: any) {
    this.provider.BookNewServices(this.dataM).subscribe((res) => {
      console.log(res);
    });
  }
}
