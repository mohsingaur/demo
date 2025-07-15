import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEmi } from './display-emi';

describe('DisplayEmi', () => {
  let component: DisplayEmi;
  let fixture: ComponentFixture<DisplayEmi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayEmi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayEmi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
