import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displaySecretPassword: boolean = false;
  clicksCounter: number = 0;
  clicks: any[] = [];

  toggleDisplaySecretPassword() {
    this.displaySecretPassword = !this.displaySecretPassword;
    this.clicks.push(
      {
        id: ++this.clicksCounter,
        timestamp: new Date()
      }
    );
  }
}
