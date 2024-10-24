import { TestBed } from '@angular/core/testing';
import { CanActivateFn, ResolveFn } from '@angular/router';
import { preloadResolveGuard } from './preload-guard';

describe('authResolveGuard', () => {
  const executeGuard: ResolveFn<any> = (...guardParameters) =>
      TestBed.runInInjectionContext(() => preloadResolveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
