import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBookingDetailComponent } from './service-booking-detail.component';

describe('ServiceBookingDetailComponent', () => {
  let component: ServiceBookingDetailComponent;
  let fixture: ComponentFixture<ServiceBookingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceBookingDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceBookingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
