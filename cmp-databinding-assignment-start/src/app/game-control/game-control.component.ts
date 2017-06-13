import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  currentNumber: number = 0;
  timerId;

  @Output() numberGenerated = new EventEmitter<{ num: number }>();

  constructor() { }

  ngOnInit() {
  }

  startGame() : void {
    console.log('Starting the game!');
    this.timerId = setInterval(() => {
      this.numberGenerated.emit({
        num: ++this.currentNumber
      });
    }, 1000);
  }

  stopGame() : void {
    console.log('Stopping the game!');
    clearInterval(this.timerId);
  }
}
