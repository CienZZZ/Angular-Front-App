import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
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
    .pipe(

      tap(companies => {
      this.companyService.setCompanies(companies);
    }));
  }
}
