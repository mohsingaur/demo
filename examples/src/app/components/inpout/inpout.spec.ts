import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inpout } from './inpout';

describe('Inpout', () => {
  let component: Inpout;
  let fixture: ComponentFixture<Inpout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inpout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inpout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
