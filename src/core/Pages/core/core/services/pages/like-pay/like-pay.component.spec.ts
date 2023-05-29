import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikePayComponent } from './like-pay.component';

describe('LikePayComponent', () => {
  let component: LikePayComponent;
  let fixture: ComponentFixture<LikePayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikePayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
