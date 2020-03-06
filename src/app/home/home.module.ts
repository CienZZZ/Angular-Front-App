import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: HomeComponent}]),
    SharedModule
  ]
})
export class HomeModule {

}
