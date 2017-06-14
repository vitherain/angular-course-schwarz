import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenIndexes: number[] = [];
  oddIndexes: number[] = [];

  onNumberGenerated(event): void {
    console.log('event.num is:', event.num);
    if (event.num % 2 == 0) {
      this.evenIndexes.push(event.num);
    } else {
      this.oddIndexes.push(event.num);
    }
  }
}
