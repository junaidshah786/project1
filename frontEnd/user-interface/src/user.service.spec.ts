import { TestBed } from '@angular/core/testing';

import { USERService } from './user.service';

describe('USERService', () => {
  let service: USERService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(USERService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
