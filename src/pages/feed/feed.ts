import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'p age-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nombre_usuario: string = "Diego Mancipe do codigo";

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }
  sumaDeDosNumeros(num1:number, num2:number) {
  num2=num1;

  let alert = this.alertCtrl.create({
    title: 'num2',
    subTitle: '10% of baretty remaining',
    buttons: ['Capiche?']
  });
  alert.present();
}


  ionViewDidLoad() {
   // this.sumaDeDosNumeros(10,9);
  }

}
