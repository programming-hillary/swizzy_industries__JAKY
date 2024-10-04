import { HttpInterceptorFn } from '@angular/common/http';

export const keycloakInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
