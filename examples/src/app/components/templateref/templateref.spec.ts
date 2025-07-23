import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templateref } from './templateref';

describe('Templateref', () => {
  let component: Templateref;
  let fixture: ComponentFixture<Templateref>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Templateref]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Templateref);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
