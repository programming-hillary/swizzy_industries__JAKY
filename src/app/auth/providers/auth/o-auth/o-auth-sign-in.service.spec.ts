import { TestBed } from '@angular/core/testing';

import { OAuthSignInService } from './o-auth-sign-in.service';

describe('OAuthSignInService', () => {
  let service: OAuthSignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OAuthSignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
