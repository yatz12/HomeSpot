import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav,MenuController } from 'ionic-angular';

import { ConnectionPage } from '../connection/connection';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

/**
 * Generated class for the TimeoutsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timeouts',
  templateUrl: 'timeouts.html',
})
export class TimeoutsPage {

  constructor(public navCtrl: NavController, private nativePageTransitions: NativePageTransitions, public navParams: NavParams, public nav: Nav, public menuCtrl:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimeoutsPage');
  }

  ionViewWillEnter() {
    console.log('ion will Enter')
    //closing right side menu
    this.menuCtrl.swipeEnable( false, 'menu2' );
}

  moveToConnection(){
    let options:NativeTransitionOptions={
      direction:'right',
      duration:500,
      slowdownfactor:-1,
      slidePixels:0
  }
  this.nativePageTransitions.slide(options);
  //this.navCtrl.setRoot(ConnectionPage);
    //this.nav.setRoot(ConnectionPage);
this.nav.setRoot(ConnectionPage);
  }

}
