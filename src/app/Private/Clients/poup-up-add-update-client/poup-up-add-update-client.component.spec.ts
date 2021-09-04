import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoupUpAddUpdateClientComponent } from './poup-up-add-update-client.component';

describe('PoupUpAddUpdateClientComponent', () => {
  let component: PoupUpAddUpdateClientComponent;
  let fixture: ComponentFixture<PoupUpAddUpdateClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoupUpAddUpdateClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoupUpAddUpdateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
