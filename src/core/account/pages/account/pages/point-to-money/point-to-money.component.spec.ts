import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointToMoneyComponent } from './point-to-money.component';

describe('PointToMoneyComponent', () => {
  let component: PointToMoneyComponent;
  let fixture: ComponentFixture<PointToMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointToMoneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointToMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
