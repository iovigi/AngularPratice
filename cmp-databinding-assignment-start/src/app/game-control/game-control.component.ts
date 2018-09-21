import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  private number: number = 0;
  private refInterval;

  @Output()
  incremented= new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.refInterval = setInterval(() => {
      this.number++;
      this.incremented.emit(this.number);
    }, 1000);
  }

  onStop() {
    clearInterval(this.refInterval);
    this.number = 0;
  }
}
