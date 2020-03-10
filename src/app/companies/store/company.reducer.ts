import { Company } from '../company.model';
import * as CompaniesActions from './company.actions';

export interface State {
  companies: Company[];
}

const initialState: State = {
  companies: []
}

export function companyReducer(
  state = initialState,
  action: CompaniesActions.CompaniesActions
) {
  switch (action.type) {
    case CompaniesActions.SET_COMPANIES:
      return {
        ...state,
        companies: [...action.payload]
      };
    case CompaniesActions.ADD_COMPANY:
      return {
        ...state,
        companies: [...state.companies, action.payload]
      };
    case CompaniesActions.UPDATE_COMPANY:
      const updatedCompany = {
        ...state.companies[action.payload.index],
        ...action.payload.newCompany
      };

      const updatedCompanies = [...state.companies];
      updatedCompanies[action.payload.index] = updatedCompany;

      return {
        ...state,
        companies: updatedCompanies
      };
    case CompaniesActions.DELETE_COMPANY:
      return {
        ...state,
        companies: state.companies.filter((company, index) => {
          return index !== action.payload;
        })
      };
    default:
      return state;
  }
}
