import { TestBed, inject } from '@angular/core/testing';

import { HttpIntercepterBasicAuthServiceService } from './http-intercepter-basic-auth-service.service';

describe('HttpIntercepterBasicAuthServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpIntercepterBasicAuthServiceService]
    });
  });

  it('should be created', inject([HttpIntercepterBasicAuthServiceService], (service: HttpIntercepterBasicAuthServiceService) => {
    expect(service).toBeTruthy();
  }));
});
