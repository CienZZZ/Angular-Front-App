import { NgModule } from '@angular/core';
import { CompaniesComponent } from './companies.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyItemComponent } from './company-list/company-item/company-item.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyStartComponent } from './company-start/company-start.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CompaniesRoutingModule } from './companies-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CompaniesComponent,
    CompanyDetailComponent,
    CompanyEditComponent,
    CompanyItemComponent,
    CompanyListComponent,
    CompanyStartComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CompaniesRoutingModule,
    SharedModule
  ]
})

export class CompaniesModule {

}
