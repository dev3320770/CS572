import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      Counter componet <button (click)="dec()">-</button> {{count}} <button (click)="inc()">+</button>
    </p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  @Input() count: number;
  @Output() counterEvent =  new EventEmitter<number>();
  constructor() {
    this.count = 0;
  }
  ngOnInit() {
  }

  dec() {
    this.count --;
    this.counterEvent.emit(this.count);
  }

  inc() {
    this.count ++;
    this.counterEvent.emit(this.count);
  }

}
