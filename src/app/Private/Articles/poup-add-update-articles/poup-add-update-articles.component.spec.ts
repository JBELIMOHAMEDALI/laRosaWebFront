import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoupAddUpdateArticlesComponent } from './poup-add-update-articles.component';

describe('PoupAddUpdateArticlesComponent', () => {
  let component: PoupAddUpdateArticlesComponent;
  let fixture: ComponentFixture<PoupAddUpdateArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoupAddUpdateArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoupAddUpdateArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
