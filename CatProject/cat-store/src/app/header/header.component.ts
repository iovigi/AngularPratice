import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FetchDataService } from '../shared/fetch-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private fetchDataService: FetchDataService) { }

  ngOnInit(): void {
    this.fetchDataService.FetchData();
  }

  onSave() {
    this.fetchDataService.SaveData();
  }

  onFetch(){
    this.fetchDataService.FetchData();
  }
}