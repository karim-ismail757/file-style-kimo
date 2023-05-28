import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManWomanCardComponent } from './man-woman-card.component';

describe('ManWomanCardComponent', () => {
  let component: ManWomanCardComponent;
  let fixture: ComponentFixture<ManWomanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManWomanCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManWomanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
