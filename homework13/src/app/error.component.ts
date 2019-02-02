import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <p>
      Not a Valid User
    </p>
  `,
  styles: []
})
export class ErrorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
