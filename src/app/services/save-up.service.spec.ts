import { TestBed } from '@angular/core/testing';

import { SaveUpService } from './save-up.service';

describe('SaveUpService', () => {
  let service: SaveUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
