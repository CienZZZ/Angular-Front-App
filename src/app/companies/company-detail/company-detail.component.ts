import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Company } from '../company.model';
import { CompanyService } from '../company.service';


@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company: Company;
  id: number;

  constructor(private companyService: CompanyService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.company = this.companyService.getCompany(this.id);
        }
      );
  }

  onEditCompany() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteCompany() {
    this.companyService.deleteCompany(this.id);
    this.router.navigate(['/companies']);
  }

}
