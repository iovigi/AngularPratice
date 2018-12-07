import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { FetchDataService } from '../../shared/fetch-data.service';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from '../../auth/store/auth.actions';
import * as CatActions from '../../cat/store/cat.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   authState:Observable<fromAuth.State>;

  constructor(private fetchDataService: FetchDataService,
    private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.authState = this.store.select('auth');
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }

  onSave() {
    this.store.dispatch(new CatActions.StoreCats());
  }

  onFetch() {
    this.store.dispatch(new CatActions.FetchCats());
  }
}