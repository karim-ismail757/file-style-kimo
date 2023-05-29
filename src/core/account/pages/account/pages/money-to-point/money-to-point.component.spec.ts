import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyToPointComponent } from './money-to-point.component';

describe('MoneyToPointComponent', () => {
  let component: MoneyToPointComponent;
  let fixture: ComponentFixture<MoneyToPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyToPointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyToPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
