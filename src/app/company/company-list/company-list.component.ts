import { OnInit, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Company } from '../company.model';
import { CompanyService } from '../company.service';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})

export class CompanyListComponent implements OnInit {
  companies: Company[];

  constructor(private companyService: CompanyService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.companies = this.companyService.getCompanies();
  }

  onNewCompany() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
