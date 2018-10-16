import { Component, OnInit } from '@angular/core';
import { Cat } from "../cat.model";
import { CatService } from "../cat.service";
import { ActivatedRoute, Params } from "@angular/router"

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent implements OnInit {
  selectedCat: Cat;

  constructor(private catService: CatService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.selectedCat = this.catService.getCat(id);

    this.route.params
      .subscribe((params: Params) => {
        const id = +params['id'];
        this.selectedCat = this.catService.getCat(id);
      });
  }

  toShoppingList() {
    this.catService.addBehaviorsToShoppingList(this.selectedCat.behaviors);
  }
}
