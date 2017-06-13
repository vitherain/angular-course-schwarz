import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onNumberGenerated(event): void {
    console.log('event.num is:', event.num);
  }
}
