import { Component, OnInit, Input } from '@angular/core';
import { Cat } from "../cat.model";
import { CatService } from "../cat.service";

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent implements OnInit {
  @Input()
  selectedCat: Cat;

  constructor(private catService: CatService) { }

  ngOnInit() {
  }

  toShoppingList() {
    this.catService.addBehaviorsToShoppingList(this.selectedCat.behaviors);
  }
}
