import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import * as CompanyActions from '../companies/store/company.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private myworkerSub: Subscription;

  // constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    // this.myworkerSub = this.authService.user.subscribe(user => {
    //   this.isAuthenticated = !!user;
    //   console.log(!user);
    //   console.log(!!user);
    // });
    this.myworkerSub = this.store
      .select('auth')
      .pipe(map(authState => authState.user))
      .subscribe(user => {
        this.isAuthenticated = !!user;
        console.log(!user);
        console.log(!!user);
      })
  }

  onSaveData() {
    // this.dataStorageService.storeCompanies();
    this.store.dispatch(new CompanyActions.StoreCompanies());
  }

  onFetchData() {
    // this.dataStorageService.fetchCompanies();
    this.store.dispatch(new CompanyActions.FetchCompanies());
  }

  onLogout() {
    // this.authService.logout();
    this.store.dispatch(new AuthActions.Logout());
  }

  ngOnDestroy() {
    this.myworkerSub.unsubscribe();
  }
}


