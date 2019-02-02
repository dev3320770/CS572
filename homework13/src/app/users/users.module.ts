import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserdetailsComponent } from './userdetails.component';
import { MyGuardGuard } from '../guards/my-guard.guard';

@NgModule({
  declarations: [UsersComponent, UserdetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UsersComponent },
      {
        path: 'users/:id',
        component: UserdetailsComponent,
        canActivate: [MyGuardGuard]
      }
    ])
  ],
  bootstrap: [UsersComponent]
})
export class UsersModule {}
