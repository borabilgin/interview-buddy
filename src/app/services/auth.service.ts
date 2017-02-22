import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {

private _isAuthenticated: boolean = false;

  constructor(
    private _http: Http,
    private _af: AngularFire) {        
  }

  login(username: string, password: string): firebase.Promise<FirebaseAuthState> {
    return this._af.auth.login({ email: username, password: password }).then(resolve => {
        this._isAuthenticated = true;            
    });
  }

  logout(): Promise<void> {
     return this._af.auth.logout();
  }

  checkIsAuthenticated(): boolean {
      return this._isAuthenticated;
  }
}
