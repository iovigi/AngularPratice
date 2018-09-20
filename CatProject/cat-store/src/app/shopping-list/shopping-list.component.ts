import { Component, OnInit } from '@angular/core';
import { Behavior } from '../shared/behavior.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  behaviors: Behavior[] = [
    new Behavior("nasty", 1),
    new Behavior("nice", 5)
  ];


  constructor() { }

  ngOnInit() {
  }

}
