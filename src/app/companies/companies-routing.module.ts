import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies.component';
import { AuthGuard } from '../auth/auth.guard';
import { CompanyStartComponent } from './company-start/company-start.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompaniesResolverService } from './companies-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: CompaniesComponent,
    canActivate: [AuthGuard],
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule {

}
