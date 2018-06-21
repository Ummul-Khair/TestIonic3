import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-page',
  templateUrl: 'page.html'
})
export class PagePage {

  constructor(public navCtrl: NavController) {
  }
  goToPage(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
}
