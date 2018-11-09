import { Component, OnInit } from '@angular/core';
import { Behavior } from '../shared/behavior.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  behaviors: Behavior[] = [];
  private subscription: Subscription;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.behaviors = this.shoppingListService.getBehaviors();
    this.subscription = this.shoppingListService.updateList.subscribe(behaviors => this.behaviors =behaviors);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEditItem(i: number) {
    this.shoppingListService.startedEditting.next(i);
  }
}
