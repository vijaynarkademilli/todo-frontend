import { TestBed, inject } from '@angular/core/testing';

import { RouteGaurdService } from './route-gaurd.service';

describe('RouteGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteGaurdService]
    });
  });

  it('should be created', inject([RouteGaurdService], (service: RouteGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
