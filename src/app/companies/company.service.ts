// import { Injectable } from '@angular/core';
// import { Company } from './company.model';
// import { Subject } from 'rxjs';

// @Injectable()
// export class CompanyService {
//   companiesChanged = new Subject<Company[]>();

//   // private companies: Company[] = [
//   //   new Company('Weilandt', 'Weilandt Elektronik Sp. z o.o.', 'Marek Howaniec'),
//   //   new Company('Fiat', 'Fiat Polska', 'Beata Jagusiak')
//   // ];

//   private companies: Company[] = [];

//   constructor() {}

//   setCompanies(companies: Company[]) {
//     this.companies = companies;
//     this.companiesChanged.next(this.companies.slice());
//   }

//   getCompanies() {
//     return this.companies.slice();
//   }

//   getCompany(index: number) {
//     return this.companies[index];
//   }

//   addCompany(company: Company) {
//     this.companies.push(company);
//     this.companiesChanged.next(this.companies.slice());
//   }

//   updateCompany(index: number, newCompany: Company) {
//     this.companies[index] = newCompany;
//     this.companiesChanged.next(this.companies.slice());
//   }

//   deleteCompany(index: number) {
//     this.companies.splice(index, 1);
//     this.companiesChanged.next(this.companies.slice());
//   }

// }
