import { Component, OnInit } from '@angular/core';
import { Cat } from "../cat.model";
import { CatService } from "../cat.service";
import { ActivatedRoute, Params } from "@angular/router"
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Behavior } from '../../shared/behavior.model';
import *  as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../../shopping-list/store/shopping-list.reducers';
import * as fromApp from '../../store/app.reducers';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent implements OnInit {
  selectedCat: Cat;
  id:number;

  constructor(private catService: CatService,private store:Store<fromApp.AppState>, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.selectedCat = this.catService.getCat(this.id);

    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.selectedCat = this.catService.getCat(this.id);
      });
  }

  toShoppingList() {
    this.store.dispatch(new ShoppingListActions.AddBehaviors(this.selectedCat.behaviors));
  }

  deleteCat(){
    this.catService.deleteCat(this.id);
    this.router.navigate(['/cats']);
  }
}
