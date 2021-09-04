import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BESComponent } from './bes.component';

describe('BESComponent', () => {
  let component: BESComponent;
  let fixture: ComponentFixture<BESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
