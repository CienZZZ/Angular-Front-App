import { Injectable } from '@angular/core';
import { Company } from './company.model';

@Injectable()
export class CompanyService {

  private companies: Company[] = [
    new Company('Weilandt', 'Weilandt Elektronik Sp. z o.o.', 'Marek Howaniec'),
    new Company('Fiat', 'Fiat Polska', 'Beata Jagusiak')
  ];

  setCompanies(companies: Company[]) {
    this.companies = companies;
    this.comapniesChanged.next(this.companies.slice());
  }

  getCompanies() {
    return this.companies.slice();
  }

  getCompany(index: number) {
    return this.companies[index];
  }
}
