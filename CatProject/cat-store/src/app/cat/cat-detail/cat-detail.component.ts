import { Component, OnInit, Input } from '@angular/core';
import { Cat } from "../cat.model";

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent implements OnInit {
  @Input()
  selectedCat:Cat;

    constructor() { }

  ngOnInit() {
  }

}
