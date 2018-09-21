import { Component, OnInit } from '@angular/core';
import { Cat } from "./cat.model";

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  selectedCat: Cat;

  constructor() { }

  ngOnInit() {
  }
}
