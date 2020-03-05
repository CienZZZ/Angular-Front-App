import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { CompanyStartComponent } from './company/company-start/company-start.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyDetailComponent } from './company/company-detail/company-detail.component';
import { CompanyResolverService } from './company/company-resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'company', component: CompanyComponent,
  children: [
    { path: '', component: CompanyStartComponent },
    { path: 'new', component: CompanyEditComponent },
    {
      path: ':id',
      component: CompanyDetailComponent,
      resolve: [CompanyResolverService]
    },
    {
      path: ':id/edit',
      component: CompanyEditComponent,
      resolve: [CompanyResolverService]
    }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
