import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      Counter componet <button (click)="dec($event)">-</button> {{counter}} <button (click)="inc($event)">+</button>
    </p>
    <p>Componet Counter Value={{counter}}</p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  constructor() {}
  @Input() counter =  0;
  ngOnInit() {
  }

  dec(e) {
    this.counter --;
  }

  inc(e) {
    this.counter ++;
  }

}
