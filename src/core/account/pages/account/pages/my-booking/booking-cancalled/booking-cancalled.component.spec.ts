import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCancalledComponent } from './booking-cancalled.component';

describe('BookingCancalledComponent', () => {
  let component: BookingCancalledComponent;
  let fixture: ComponentFixture<BookingCancalledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingCancalledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingCancalledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
