import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `<app-counter (counterEvent) ="receiveCounter($event)"></app-counter>
                <p>Componet Counter Value={{count}}</p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework11';
  count: number;
  constructor() {
    this.count = 0;
  }
  receiveCounter(e) {
    this.count = e;
  }
}
