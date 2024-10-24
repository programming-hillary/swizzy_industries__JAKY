import { TestBed } from '@angular/core/testing';
import { CanActivateFn, ResolveFn } from '@angular/router';

import { authResolveGuard } from './auth-resolve.guard';

describe('authResolveGuard', () => {
  const executeGuard: ResolveFn<any> = (...guardParameters) =>
      TestBed.runInInjectionContext(() => authResolveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
