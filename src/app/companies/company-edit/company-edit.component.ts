import { OnInit, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import * as fromApp from '../../store/app.reducer';
import * as CompaniesActions from '../store/company.actions';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})

export class CompanyEditComponent implements OnInit, OnDestroy {
  id: number;
  editMode = false;
  companyForm: FormGroup;

  private storeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        });
  }

  onSubmit() {
    if(this.editMode) {
      this.store.dispatch(
        new CompaniesActions.UpdateCompany({
          index: this.id,
          newCompany: this.companyForm.value
        })
      );
    } else {
      this.store.dispatch(new CompaniesActions.AddCompany(this.companyForm.value));
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }

  private initForm() {
    let companyName = '';
    let companyFullName = '';
    let companyCreatedBy = '';

    if(this.editMode) {
      this.storeSub = this.store
        .select('companies')
        .pipe(
          map(companiesState => {
            return companiesState.companies.find((company, index) => {
              return index === this.id;
            });
          })
        )
        .subscribe(company => {
          companyName = company.name;
          companyFullName = company.full_name;
          companyCreatedBy = company.createdBy;
        });
    }

    this.companyForm = new FormGroup({
      name: new FormControl(companyName, Validators.required),
      full_name: new FormControl(companyFullName, Validators.required),
      createdBy: new FormControl(companyCreatedBy, Validators.required)
    });

  }

}
