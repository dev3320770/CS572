import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  template: `
    <p>Users</p>
    <ul>
      <li *ngFor="let user of data">
        <a [routerLink]="['users', user.login.uuid]"
          >{{ user.name.first }} {{ user.name.last }}
        </a>
      </li>
    </ul>
  `,
  styles: []
})
export class UsersComponent implements OnInit {
  public data: Object;
  constructor(private userService: DataService) {
    const Data: string = userService.getCachData();
    if (Data != null) {
      console.log(Data);
      this.data = JSON.parse(Data);
    } else {
      console.log('something is not working in users component');
    }
  }

  ngOnInit() {}
}
