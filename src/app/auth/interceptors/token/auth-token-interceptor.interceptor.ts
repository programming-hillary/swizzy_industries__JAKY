import { HttpInterceptorFn } from '@angular/common/http';

export const authTokenInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
