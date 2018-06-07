import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';

import {ConnectionPage} from '../connection/connection';
import {CodecPage } from '../codec/codec';
import {LrReceiverPage } from '../lr-receiver/lr-receiver';


import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

/**
 * Generated class for the CustomizationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customization',
  templateUrl: 'customization.html',
})
export class CustomizationPage {

  slideOptions;  

  constructor(public menuCtrl:MenuController, public nativePageTransitions: NativePageTransitions, public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomizationPage');
  }


  ionViewWillEnter() {
    console.log('ion will Enter')
    //closing right side menu
    this.menuCtrl.swipeEnable( false, 'menu2' );
}


  ionViewWillLeave() {
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

moveToConnection(){
  this.nativePageTransitions.slide(this.slideOptions)
this.navCtrl.setRoot(ConnectionPage);
}

moveToCodec(){
  this.nativePageTransitions.slide(this.slideOptions)
  this.navCtrl.setRoot(CodecPage);
}


moveToCustomization(){
  let options:NativeTransitionOptions={
    direction:'right',
    duration:500,
    slowdownfactor:-1,
    slidePixels:0
}
this.nativePageTransitions.slide(options);
  this.navCtrl.setRoot(LrReceiverPage);
}
 
bluetoothName(){
  let alert = this.alertCtrl.create({
    title: 'Bluetooth Name',
    subTitle:'Enter a new receiver name',
    inputs: [
      {
        name: 'username',
        placeholder: 'LR-Receiver-1234'
      },
     
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Done',
        handler: data => {
          console.log('Done clicked');
        }
      }
    ]
  });
  alert.present();
}

}
