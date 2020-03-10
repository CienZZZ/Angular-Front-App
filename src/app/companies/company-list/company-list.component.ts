import { OnInit, Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { Company } from '../company.model';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})

export class CompanyListComponent implements OnInit, OnDestroy {
  companies: Company[];
  subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.subscription = this.store
    .select('companies')
    .pipe(map(companiesState => companiesState.companies))
    .subscribe((companies: Company[]) => {
      this.companies = companies;
    });
    // this.subscription = this.companyService.companiesChanged
    //   .subscribe(
    //     (companies: Company[]) => {
    //       this.companies = companies;
    //     }
    //   )
    // this.companies = this.companyService.getCompanies();
  }

  onNewCompany() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
