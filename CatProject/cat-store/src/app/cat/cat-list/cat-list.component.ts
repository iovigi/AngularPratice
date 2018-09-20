import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat.model';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  cats: Cat[] = [
    new Cat("test", "test", "https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"),
    new Cat("test", "test", "https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
