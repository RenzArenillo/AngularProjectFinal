import { TestBed } from '@angular/core/testing';

import { PassOrdersService } from './pass-orders.service';

describe('PassOrdersService', () => {
  let service: PassOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
