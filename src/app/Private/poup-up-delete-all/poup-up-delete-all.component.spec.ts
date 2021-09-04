import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoupUpDeleteAllComponent } from './poup-up-delete-all.component';

describe('PoupUpDeleteAllComponent', () => {
  let component: PoupUpDeleteAllComponent;
  let fixture: ComponentFixture<PoupUpDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoupUpDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoupUpDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
