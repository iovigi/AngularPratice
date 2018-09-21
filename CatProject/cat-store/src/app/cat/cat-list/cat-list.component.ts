import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Cat } from '../cat.model';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  @Output()
  selectedCat = new EventEmitter<Cat>();

  cats: Cat[] = [
    new Cat("test", "test", "https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"),
    new Cat("test", "test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuN7f1YONvVzPSSmTp7nNBQGQglSjR6L4Hz37EC8yZIMk_HVhVQ")
  ];

  constructor() {
   }

  ngOnInit() {
  }

  onSelectCat(cat: Cat) {
    this.selectedCat.emit(cat);
  }
}
