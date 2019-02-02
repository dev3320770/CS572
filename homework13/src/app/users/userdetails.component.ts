import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  template: `
       <p>User Datails</p>
          {{userInfo}}
  `,
  styles: []
})
export class UserdetailsComponent implements OnInit {
   userInfo;
  constructor(dataService: DataService, route: ActivatedRoute) {
    route.params.subscribe(param => {
      console.log(param.id);
      this.userInfo = JSON.stringify(dataService.getUserById(param.id));
      console.log(this.userInfo);
    });
   }

  ngOnInit() {
  }

}
