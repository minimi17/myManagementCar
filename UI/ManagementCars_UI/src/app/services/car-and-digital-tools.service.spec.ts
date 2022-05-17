import { TestBed } from '@angular/core/testing';

import { CarAndDigitalToolsService } from './car-and-digital-tools.service';

describe('CarAndDigitalToolsService', () => {
  let service: CarAndDigitalToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarAndDigitalToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
