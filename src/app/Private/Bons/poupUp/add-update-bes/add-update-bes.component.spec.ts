import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateBesComponent } from './add-update-bes.component';

describe('AddUpdateBesComponent', () => {
  let component: AddUpdateBesComponent;
  let fixture: ComponentFixture<AddUpdateBesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateBesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateBesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
