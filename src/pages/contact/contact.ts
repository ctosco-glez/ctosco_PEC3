import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: AlertController) {

  }

  doPrompt() {
    let prompt = this.navCtrl.create({
      title: 'La cruda realidad',
      message: "No tienes más amigos... :( ",
      buttons: [
        {
          text: 'Cierto',
          handler: data => {
            console.log('Negative clicked');
          }
        },
        {
          text: 'Buscaré más',
          handler: data => {
            console.log('Positive clicked');
          }
        }
      ]
    });
    prompt.present();
}

}
