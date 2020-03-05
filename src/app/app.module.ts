import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { CompanyDetailComponent } from './companies/company-detail/company-detail.component';
import { CompanyEditComponent } from './companies/company-edit/company-edit.component';
import { CompanyItemComponent } from './companies/company-list/company-item/company-item.component';
import { CompanyListComponent } from './companies/company-list/company-list.component';
import { CompanyStartComponent } from './companies/company-start/company-start.component';
import { CompanyService } from './companies/company.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CompaniesComponent,
    DropdownDirective,
    CompanyDetailComponent,
    CompanyEditComponent,
    CompanyItemComponent,
    CompanyListComponent,
    CompanyStartComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CompanyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
