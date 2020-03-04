import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyStartComponent } from './companies/company-start/company-start.component';
import { CompanyEditComponent } from './companies/company-edit/company-edit.component';
import { CompanyDetailComponent } from './companies/company-detail/company-detail.component';
import { CompaniesResolverService } from './companies/companies-resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'companies', component: CompaniesComponent,
  children: [
    { path: '', component: CompanyStartComponent },
    { path: 'new', component: CompanyEditComponent },
    {
      path: ':id',
      component: CompanyDetailComponent,
      resolve: [CompaniesResolverService]
    },
    {
      path: ':id/edit',
      component: CompanyEditComponent,
      resolve: [CompaniesResolverService]
    }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
