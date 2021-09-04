import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateRegionComponent } from './add-update-region.component';

describe('AddUpdateRegionComponent', () => {
  let component: AddUpdateRegionComponent;
  let fixture: ComponentFixture<AddUpdateRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
