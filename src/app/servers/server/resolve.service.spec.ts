import { TestBed, inject } from '@angular/core/testing';

import { ResolveService } from './resolve.service';

describe('ResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveService]
    });
  });

  it('should be created', inject([ResolveService], (service: ResolveService) => {
    expect(service).toBeTruthy();
  }));
});
