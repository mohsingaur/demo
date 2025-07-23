import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempDrivenForms } from './temp-driven-forms';

describe('TempDrivenForms', () => {
  let component: TempDrivenForms;
  let fixture: ComponentFixture<TempDrivenForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempDrivenForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempDrivenForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
