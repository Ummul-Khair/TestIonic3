import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'https://proxyu.maktebi.com/token';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  /*getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }*/
  //ecp.submitter
  //M$ktebi2018
  addUser(username, password) {
    return new Promise((resolve, reject) => {
      
      let body = new HttpParams().set('username', username).set('password', password).set('client_id', '18c271cdc06744df93e548f6180574c5').set('grant_type', 'password');

let options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
};
      this.http.post(this.apiUrl , body.toString(), options)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
}