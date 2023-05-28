import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyalityPointComponent } from './loyality-point.component';

describe('LoyalityPointComponent', () => {
  let component: LoyalityPointComponent;
  let fixture: ComponentFixture<LoyalityPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyalityPointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoyalityPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
