import { Component, OnInit } from '@angular/core';
import { Cat } from "./cat.model";
import { CatService } from './cat.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css'],
  providers: [CatService]
})
export class CatComponent implements OnInit {
  selectedCat: Cat;

  constructor(private catService: CatService) {
  }

  ngOnInit() {
    this.catService.catSelected.subscribe(cat => this.selectedCat = cat);
  }
}
