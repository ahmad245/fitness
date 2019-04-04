import { TestBed, inject } from '@angular/core/testing';

import { AuthServiceService } from './auth-service.service';

describe('AuthServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthServiceService]
    });
  });

  it('should be created', inject([AuthServiceService], (service: AuthServiceService) => {
    expect(service).toBeTruthy();
  }));
});
