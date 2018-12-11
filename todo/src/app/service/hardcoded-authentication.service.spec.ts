import { TestBed, inject } from '@angular/core/testing';

import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

//noinspection TypeScriptUnresolvedFunction
describe('HardcodedAuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HardcodedAuthenticationService]
    });
  });

  it('should be created', inject([HardcodedAuthenticationService], (service: HardcodedAuthenticationService) => {
    //noinspection TypeScriptUnresolvedFunction
    expect(service).toBeTruthy();
  }));
});
