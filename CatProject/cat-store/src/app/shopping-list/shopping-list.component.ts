import { Component, OnInit } from '@angular/core';
import { Behavior } from '../shared/behavior.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {
  behaviors: Behavior[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.behaviors = this.shoppingListService.getBehaviors();
    this.shoppingListService.added.subscribe(behavior => this.behaviors = this.shoppingListService.getBehaviors());
  }
}
