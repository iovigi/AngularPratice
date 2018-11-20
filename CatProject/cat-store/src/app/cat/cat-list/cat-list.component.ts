import { Component, OnInit,OnDestroy } from '@angular/core';
import { Cat } from '../cat.model';
import { CatService } from '../cat.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  cats: Cat[] = [];

  constructor(private catService: CatService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.cats = this.catService.getCats();
    this.subscription = this.catService.catsChanged.subscribe((cats:Cat[])=>{
      this.cats = cats;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onNew() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
