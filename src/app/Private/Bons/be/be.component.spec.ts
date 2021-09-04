import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BEComponent } from './be.component';

describe('BEComponent', () => {
  let component: BEComponent;
  let fixture: ComponentFixture<BEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
