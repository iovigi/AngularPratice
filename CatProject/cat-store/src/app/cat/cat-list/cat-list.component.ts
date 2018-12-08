import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromCat from '../store/cat.reducers';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  public catState:Observable<fromCat.State>;

  constructor(private router: Router, private route: ActivatedRoute, public store: Store<fromCat.FeatureState>) {
  }

  ngOnInit() {
    this.catState = this.store.select('cats');
  }

  onNew() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
