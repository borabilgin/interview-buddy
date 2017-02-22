import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';

import { AuthService } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isAuthenticated = this._authService.checkIsAuthenticated();

    if (!isAuthenticated) {
      this._router.navigate(['/login']);
    }

    return isAuthenticated;
  }
}

export const APP_GUARDS = [AuthGuard];