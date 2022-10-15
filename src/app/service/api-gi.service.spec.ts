import { TestBed } from '@angular/core/testing';

import { ApiGIService } from './api-gi.service';

describe('ApiGIService', () => {
  let service: ApiGIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
