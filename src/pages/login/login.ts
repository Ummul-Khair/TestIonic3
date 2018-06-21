import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { PagePage } from '../page/page';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username: string;
  password: string;
  users: any;
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public alertCtrl: AlertController, public restProvider: RestProvider) {

    
  }
  
  getUsers() {
    
    this.restProvider.addUser(this.username, this.password)
    .then(data => { 
      
      this.navCtrl.push(PagePage);
  
       
    }).catch(e => {
      const alert = this.alertCtrl.create({
        title: 'Error!',
        subTitle: 'Sorry, the combination you have entered is wrong!',
        buttons: ['OK']
      });
      alert.present();
      console.log(e);
    });
  }

}