import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';

import { Company } from '../company.model';
import * as fromApp from '../../store/app.reducer';
import * as CompaniesActions from '../store/company.actions';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company: Company;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(
        map(params => {
          return +params['id'];
        }),
        switchMap(id => {
          this.id = id;
          return this.store.select('companies');
        }),
        map(comapniesState => {
          return comapniesState.companies.find((company, index) => {
            return index === this.id;
          });
        })
      )
      .subscribe(company => {
        this.company = company;
      });
  }

  onEditCompany() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteCompany() {
    this.store.dispatch(new CompaniesActions.DeleteCompany(this.id));
    this.router.navigate(['/companies']);
  }

}
