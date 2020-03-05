import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private myworkerSub: Subscription;

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}

  ngOnInit() {
    this.myworkerSub = this.authService.my_worker.subscribe(my_worker => {
      this.isAuthenticated = !!my_worker;
      console.log(!my_worker);
      console.log(!!my_worker);
    });
  }

  onSaveData() {
    this.dataStorageService.storeCompanies();
  }

  onFetchData() {
    this.dataStorageService.fetchCompanies();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.myworkerSub.unsubscribe();
  }
}


