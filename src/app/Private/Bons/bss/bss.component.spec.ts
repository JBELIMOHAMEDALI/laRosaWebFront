import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BSSComponent } from './bss.component';

describe('BSSComponent', () => {
  let component: BSSComponent;
  let fixture: ComponentFixture<BSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BSSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
