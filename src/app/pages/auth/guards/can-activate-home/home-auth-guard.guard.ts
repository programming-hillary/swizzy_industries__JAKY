import { CanActivateFn } from '@angular/router';

export const homeAuthGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
