import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeBsDetaileComponent } from './add-be-bs-detaile.component';

describe('AddBeBsDetaileComponent', () => {
  let component: AddBeBsDetaileComponent;
  let fixture: ComponentFixture<AddBeBsDetaileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBeBsDetaileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBeBsDetaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
