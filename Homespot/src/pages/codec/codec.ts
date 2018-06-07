import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, MenuController } from 'ionic-angular';

import { CustomizationPage} from '../customization/customization';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

/**
 * Generated class for the CodecPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-codec',
  templateUrl: 'codec.html',
})
export class CodecPage {

  constructor(public navCtrl: NavController, public  nativePageTransitions: NativePageTransitions, public navParams: NavParams, public nav: Nav, public menuCtrl:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CodecPage');
  }


  ionViewWillEnter() {
    console.log('ion will Enter')
    //closing right side menu
    this.menuCtrl.swipeEnable( false, 'menu2' );
}

  moveTocustomization(){
    let options:NativeTransitionOptions={
      direction:'right',
      duration:500,
      slowdownfactor:-1,
      slidePixels:0
  }
  this.nativePageTransitions.slide(options);
  this.navCtrl.setRoot(CustomizationPage);
//this.nav.setRoot(CustomizationPage); 
  }
}
