import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseFinalCardComponent } from './purchase-final-card.component';

describe('PurchaseFinalCardComponent', () => {
  let component: PurchaseFinalCardComponent;
  let fixture: ComponentFixture<PurchaseFinalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseFinalCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseFinalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
