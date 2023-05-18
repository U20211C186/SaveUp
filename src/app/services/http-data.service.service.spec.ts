import { TestBed } from '@angular/core/testing';

import { HttpDataServiceService } from './http-data.service.service';

describe('HttpDataServiceService', () => {
  let service: HttpDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
