import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dates = [];
  showText=false;

  onAddDate() {
    this.showText=!this.showText;
    this.dates.push(new Date(Date.now()).toTimeString());
  }

  getColor(i: number) {
    if (i > 3) {
      return "blue";
    }

    return "";
  }
}
