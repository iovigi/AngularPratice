import { Component, OnInit } from '@angular/core';
import { CatService } from './cat.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css'],
  providers: [CatService]
})
export class CatComponent implements OnInit {
  constructor(private catService: CatService) {
  }

  ngOnInit() {
  }
}
