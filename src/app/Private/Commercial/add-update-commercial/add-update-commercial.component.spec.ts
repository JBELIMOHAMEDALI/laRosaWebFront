import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateCommercialComponent } from './add-update-commercial.component';

describe('AddUpdateCommercialComponent', () => {
  let component: AddUpdateCommercialComponent;
  let fixture: ComponentFixture<AddUpdateCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateCommercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
