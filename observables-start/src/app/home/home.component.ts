import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { Subscription, interval, pipe } from 'rxjs';
import {map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObSubscription: Subscription;
  myCustomObSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumber = interval(1000)
      pipe(map((data: number) => { return "number:" + data; });
    this.numbersObSubscription = myNumber.subscribe(
      (number) => {
        console.log(number);
      }
    ));

    const myObservable = Observable.create((observer: Observer<any>) => {
      setTimeout(() => {
        observer.next('first package!');
      }, 2000);

      setTimeout(() => {
        observer.next('second package!');
      }, 4000);

      setTimeout(() => {
        //observer.error('Error!');
        observer.complete();
      }, 5000);

      setTimeout(() => {
        //observer.error('Error!');
        observer.next('haha package!');
      }, 6000);
    });

    this.myCustomObSubscription = myObservable.subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        console.log("complete");
      }
    );
  }

  ngOnDestroy(): void {
    this.numbersObSubscription.unsubscribe();
    this.myCustomObSubscription.unsubscribe();
  }
}
