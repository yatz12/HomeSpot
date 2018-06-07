import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController, AlertController } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';


import {LrReceiverPage } from '../lr-receiver/lr-receiver';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 slideOptions;

  constructor(public navCtrl: NavController, public menuCtrl:MenuController, private alertCtrl: AlertController, private nativePageTransitions: NativePageTransitions) {

  }


  openLeftMenu(){
  this.menuCtrl.enable(true, 'authenticated');
    this.menuCtrl.enable(false, 'unauthenticated');
  }

  presentAlert(){
    let alert = this.alertCtrl.create({
      title: 'Connection Alert',
      subTitle: 'Timeout interrogating the receiver',
      buttons: ['Dismiss']
    });
    alert.present();
  }
  ionViewWillEnter() {
    console.log('ion will Enter')
    this.menuCtrl.swipeEnable( false, 'menu2' );

    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      slidePixels: 0,
      iosdelay: 100,
      androiddelay: 250,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 0
     }; 
   this.slideOptions=options;

}

  ionViewWillLeave() {
   
   }


   moveToLRReceiver(){
   
    this.nativePageTransitions.slide(this.slideOptions)
  
  this.navCtrl.setRoot(LrReceiverPage);
  }

  doRefresh(event){
    console.log('refresh');
    event.complete();
  }
   
}
