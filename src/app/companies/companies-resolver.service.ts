import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { take, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Company } from './company.model';
import * as fromApp from '../store/app.reducer';
import * as CompaniesActions from '../companies/store/company.actions';

@Injectable({providedIn: 'root'})
export class CompaniesResolverService implements Resolve<Company[]> {
  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('companies').pipe(
      take(1),
      map(companiesState => {
        return companiesState.companies;
      }),
      switchMap(companies => {
        if (companies.length === 0) {
          this.store.dispatch(new CompaniesActions.FetchCompanies());
          return this.actions$.pipe(
            ofType(CompaniesActions.SET_COMPANIES),
            take(1)
          );
        } else {
          return of(companies);
        }
      })
    );
  }
}
