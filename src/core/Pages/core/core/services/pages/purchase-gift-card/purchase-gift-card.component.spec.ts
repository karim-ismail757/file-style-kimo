import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseGiftCardComponent } from './purchase-gift-card.component';

describe('PurchaseGiftCardComponent', () => {
  let component: PurchaseGiftCardComponent;
  let fixture: ComponentFixture<PurchaseGiftCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseGiftCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
