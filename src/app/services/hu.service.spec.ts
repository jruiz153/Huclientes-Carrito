import { TestBed } from '@angular/core/testing';

import { HuService } from './hu.service';

describe('HuService', () => {
  let service: HuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
