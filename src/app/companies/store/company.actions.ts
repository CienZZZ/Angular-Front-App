import { Action } from '@ngrx/store';
import { Company } from '../company.model';

export const SET_COMPANIES = '[Companies] Set Companies';
export const FETCH_COMPANIES = '[Companies] Fetch Companies';
export const ADD_COMPANY = '[Company] Add Company';
export const UPDATE_COMPANY = '[Company] Update Company';
export const DELETE_COMPANY = '[Company] Delete Company';
export const STORE_COMPANIES = '[Companies] Store Companies';

export class SetCompanies implements Action {
  readonly type = SET_COMPANIES;
  constructor(public payload: Company[]) {}
}

export class FetchCompanies implements Action {
  readonly type = FETCH_COMPANIES;
}

export class AddCompany implements Action {
  readonly type = ADD_COMPANY;
  constructor(public payload: Company) {}
}

export class UpdateCompany implements Action {
  readonly type = UPDATE_COMPANY;
  constructor(public payload: { index: number, newCompany: Company}) {}
}

export class DeleteCompany implements Action {
  readonly type = DELETE_COMPANY;
  constructor(public payload: number) {}
}

export class StoreCompanies implements Action {
  readonly type = STORE_COMPANIES;
}

export type CompaniesActions =
  | SetCompanies
  | FetchCompanies
  | AddCompany
  | UpdateCompany
  | DeleteCompany
  | StoreCompanies;
