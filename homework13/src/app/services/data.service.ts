import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public http: HttpClient) {}

  getUserData(): Observable<any> {
    return this.http.get('https://randomuser.me/api/?results=10');
  }

  getOlineData(): any {
    this.getUserData().subscribe(
      resp => {
        window.localStorage.setItem('data', JSON.stringify(resp.results));
        return JSON.stringify(resp.results);
      },
      err => {
        console.log(err);
      }
    );
  }

  getCachData(): any {
    const userData: string = window.localStorage.getItem('data');
    if (userData != null) {
      return userData;
    } else {
      return null;
    }
  }
  getUserById(uuid: string) {
    const userRawData: string = window.localStorage.getItem('data');
    if (userRawData === null) {
      return null;
    } else {
      const userData = JSON.parse(userRawData);
      console.log(userData);
      for (const user of userData) {
        if (user.login.uuid === uuid) {
          return user;
        }
      }
    }
   return null;
  }

  isUserExists(uuid: string): boolean {
    const userDataRaw: string = window.localStorage.getItem('data');
    if (userDataRaw == null) {
      return false;
    } else {
      const userData = JSON.parse(userDataRaw);
      for (const user of userData) {
        if (user.login.uuid === uuid) {
          return true;
        }
      }
      return false;
    }
  }
}
