import { Component } from '@angular/core';
import { CounterService } from "../counter.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  activeToInactiveCount: number = 0;
  inactiveToActiveCount: number = 0;

  constructor(private counterService: CounterService) {
    this.counterService.activeToInactiveCountIncremented.subscribe(() => this.activeToInactiveCount++);
    this.counterService.inactiveToActiveCountIncremented.subscribe(() => this.inactiveToActiveCount++);
  }
}
