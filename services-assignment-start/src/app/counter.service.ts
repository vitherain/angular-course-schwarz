import { EventEmitter } from '@angular/core';

export class CounterService {

  private activeToInactiveCount: number = 0;
  private inactiveToActiveCount: number = 0;

  activeToInactiveCountIncremented: EventEmitter<void> = new EventEmitter<void>();
  inactiveToActiveCountIncremented: EventEmitter<void> = new EventEmitter<void>();

  incrementA2ICount() {
    this.activeToInactiveCount++;
    this.activeToInactiveCountIncremented.emit();
  }

  incrementI2ACount() {
    this.inactiveToActiveCount++;
    this.inactiveToActiveCountIncremented.emit();
  }
}
