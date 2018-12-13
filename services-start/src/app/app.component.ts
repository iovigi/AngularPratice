import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';
import { Injector } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { MyComponent } from './my/my.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  accounts: { name: string, status: string }[] = [];
  content:any;

  constructor(private accountsService: AccountsService, injector: Injector, domSanitizer: DomSanitizer) {
    const myElement = createCustomElement(MyComponent, { injector: injector });
    customElements.define('my-el', myElement);

    setTimeout(() => {
 
      this.content ="test";
      this.content = domSanitizer.bypassSecurityTrustHtml("<my-el name='test'></my-el>");
    }, 1000);
  }

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
}
