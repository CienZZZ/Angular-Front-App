import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { CompanyDetailComponent } from './company/company-detail/company-detail.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyItemComponent } from './company/company-list/company-item/company-item.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyStartComponent } from './company/company-start/company-start.component';
import { CompanyService } from './company/company.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CompanyComponent,
    DropdownDirective,
    CompanyDetailComponent,
    CompanyEditComponent,
    CompanyItemComponent,
    CompanyListComponent,
    CompanyStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
