import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRedeemComponent } from './purchase-redeem.component';

describe('PurchaseRedeemComponent', () => {
  let component: PurchaseRedeemComponent;
  let fixture: ComponentFixture<PurchaseRedeemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseRedeemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseRedeemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
