import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaymentPoupComponent } from './update-payment-poup.component';

describe('UpdatePaymentPoupComponent', () => {
  let component: UpdatePaymentPoupComponent;
  let fixture: ComponentFixture<UpdatePaymentPoupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePaymentPoupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePaymentPoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
