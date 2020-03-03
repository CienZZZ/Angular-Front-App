import { Component, OnInit } from '@angular/core';
import { Company } from './company.model';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [CompanyService]
})
export class CompanyComponent implements OnInit {
  selectedCompany: Company;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.companySelected
    .subscribe(
      (company: Company) => {
        this.selectedCompany = company;
      }
    );
  }

}
