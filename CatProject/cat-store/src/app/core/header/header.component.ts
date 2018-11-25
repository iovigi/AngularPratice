import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FetchDataService } from '../../shared/fetch-data.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private fetchDataService: FetchDataService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.authService.logout();
  }

  onSave() {
    this.fetchDataService.SaveData();
  }

  onFetch() {
    this.fetchDataService.FetchData();
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }
}