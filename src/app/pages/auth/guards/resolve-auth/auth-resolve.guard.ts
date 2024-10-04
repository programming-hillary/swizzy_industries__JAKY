import { ActivatedRouteSnapshot, CanActivateFn, ResolveFn, RouterStateSnapshot } from '@angular/router';

export const authResolveGuard: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return '';
};
