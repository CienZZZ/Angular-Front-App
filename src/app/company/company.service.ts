import { EventEmitter, Injectable } from '@angular/core';
import { Company } from './company.model';

@Injectable()
export class CompanyService {
  companySelected = new EventEmitter<Company>();

  private companies: Company[] = [
    new Company('Weilandt', 'Weilandt Elektronik Sp. z o.o.', 'Marek Howaniec'),
    new Company('Fiat', 'Fiat Polska', 'Beata Jagusiak')
  ];

  getCompanies() {
    return this.companies.slice();
  }

  getCompany(index: number) {
    return this.companies[index];
  }
}
