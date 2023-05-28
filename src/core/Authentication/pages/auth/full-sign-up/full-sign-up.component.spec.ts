import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullSignUpComponent } from './full-sign-up.component';

describe('FullSignUpComponent', () => {
  let component: FullSignUpComponent;
  let fixture: ComponentFixture<FullSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
