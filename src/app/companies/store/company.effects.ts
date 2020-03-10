import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { Company } from '../company.model';
import * as CompaniesActions from './company.actions';
import * as fromApp from '../../store/app.reducer';


@Injectable()
export class CompanyEffects {
  @Effect()
  fetchCompanies = this.actions$.pipe(
    ofType(CompaniesActions.FETCH_COMPANIES),
    switchMap(() => {
      return this.http.get<Company[]>(
        'https://front-we-crm.firebaseio.com/company.json'
      );
    }),
    // map( companies => {
    //   return companies.map(company => {
    //     return {
    //       ...company
    //     };
    //   });
    // }),
    map(companies => {
      return new CompaniesActions.SetCompanies(companies);
    })
  );

  @Effect({dispatch: false})
  storeCompanies = this.actions$.pipe(
    ofType(CompaniesActions.STORE_COMPANIES),
    withLatestFrom(this.store.select('companies')),
    switchMap(([actionData, companiesState]) => {
      return this.http.put(
        'https://front-we-crm.firebaseio.com/company.json',
        companiesState.companies
      );
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}
