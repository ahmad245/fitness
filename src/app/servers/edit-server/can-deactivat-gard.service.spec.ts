import { TestBed, inject } from '@angular/core/testing';

import { CanDeactivatGardService } from './can-deactivat-gard.service';

describe('CanDeactivatGardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactivatGardService]
    });
  });

  it('should be created', inject([CanDeactivatGardService], (service: CanDeactivatGardService) => {
    expect(service).toBeTruthy();
  }));
});
