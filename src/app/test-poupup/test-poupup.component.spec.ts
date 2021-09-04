import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPoupupComponent } from './test-poupup.component';

describe('TestPoupupComponent', () => {
  let component: TestPoupupComponent;
  let fixture: ComponentFixture<TestPoupupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPoupupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPoupupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
