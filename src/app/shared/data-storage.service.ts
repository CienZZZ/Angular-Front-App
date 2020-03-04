import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyService } from '../company/company.service';
import { Company } from '../company/company.model';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private companyService: CompanyService) {}

  storeCompanies() {
    const companies = this.companyService.getCompanies();
    this.http.put('https://front-we-crm.firebaseio.com/companies.json', companies)
    .subscribe(response => {
      console.log(response);
    });
  }

  fetchCompanies() {
    this.http.get<Company[]>('https://front-we-crm.firebaseio.com/companies.json')
    .subscribe(companies => {
      this.companyService.setCompanies(companies);
    });
  }
}
