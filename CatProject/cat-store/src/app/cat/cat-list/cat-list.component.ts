import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat.model';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  cats: Cat[] = [];

  constructor(private catService:CatService) {
   }

  ngOnInit() {
    this.cats = this.catService.getCats();
  }

  onSelectCat(cat: Cat) {
    this.catService.selectCat(cat);
  }
}
