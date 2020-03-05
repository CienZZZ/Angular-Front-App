import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError, BehaviorSubject } from 'rxjs';

import { MyWorker } from '../my_workers/my_worker.model';

@Injectable({providedIn: 'root'})
export class AuthService {
  my_worker = new BehaviorSubject<MyWorker>(null);

  constructor(private http: HttpClient, private router: Router) {}

  login(login_name: string, password: string) {
    // return this.http.post(

    //   {
    //     login_name: login_name,
    //     password: password;
    //   }
    // );
  }

  autoLogin() {

  }

  logout() {

  }

  autoLogout() {

  }

  private handleAuthentication() {

  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }
}
