import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat.model';
import { CatService } from '../cat.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  cats: Cat[] = [];

  constructor(private catService: CatService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.cats = this.catService.getCats();
  }

  onNew() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
