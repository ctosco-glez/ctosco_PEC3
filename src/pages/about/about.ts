import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: AlertController) {

  }


  findFriend() {
    let alert = this.navCtrl.create({
      title: 'Nuevo amigo???',
      subTitle: 'Acabas de enviar una solicitud de amistad',
      buttons: ['OK']
    });
    alert.present();
  }
}
