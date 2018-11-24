import { Component, OnInit } from '@angular/core';
import * as filebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    filebase.initializeApp({
      apiKey: "AIzaSyCb-KjLG41t7i-6dLXNy1gJK0BhOKnQigA",
      authDomain: "api-project-992217266006.firebaseapp.com"
    })
  }
}
