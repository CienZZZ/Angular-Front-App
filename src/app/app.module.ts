import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
