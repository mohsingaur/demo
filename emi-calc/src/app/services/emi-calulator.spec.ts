import { TestBed } from '@angular/core/testing';

import { EmiCalulator } from './emi-calulator';

describe('EmiCalulator', () => {
  let service: EmiCalulator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmiCalulator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
