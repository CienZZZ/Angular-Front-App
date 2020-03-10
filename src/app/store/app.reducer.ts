import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from '../auth/store/auth.reducer';
import * as fromCompanies from '../companies/store/company.reducer';
import * as fromHome from '../home/store/home.reducer';

export interface AppState {
  auth: fromAuth.State;
  companies: fromCompanies.State;
  home: fromHome.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  companies: fromCompanies.companyReducer,
  home: fromHome.homeReducer
};
