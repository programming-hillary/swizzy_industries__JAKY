import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { UserService } from '../../providers/users/user-service.service'
import { inject } from '@angular/core'
import { map, take } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { toObservable } from '@angular/core/rxjs-interop'

export const homeAuthGuardGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | boolean
  | Promise<boolean | UrlTree>
  | Observable<boolean | UrlTree>
  | UrlTree =>
    {
  const userSubject: UserService = inject(UserService)
  const router: Router = inject(Router)

  let userSub = toObservable(userSubject.createdUser)

  return userSub.pipe(
    take(1),
    map((user) => {

      const authenticated = user ? true : false

      if (authenticated) {
        return true
      } else {
        return router.createUrlTree(['auth'])
      }
    })

  )
}
