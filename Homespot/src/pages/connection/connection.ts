import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import {CustomizationPage } from '../customization/customization';
import { AdvancedPage} from '../advanced/advanced';
import { TimeoutsPage} from '../timeouts/timeouts'; 

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

/**
 * Generated class for the ConnectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connection',
  templateUrl: 'connection.html',
})
export class ConnectionPage {
   
     slideOptions;

  constructor(public menuCtrl:MenuController, public navCtrl: NavController, public navParams: NavParams, public  nativePageTransitions: NativePageTransitions ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectionPage');
  }
       
  
  ionViewWillEnter() {
    console.log('ion will Enter')
    //closing right side menu
    this.menuCtrl.swipeEnable( false, 'menu2' );
}

moveToCustomization(){
  let options:NativeTransitionOptions={
    direction:'right',
    duration:500,
    slowdownfactor:-1,
    slidePixels:0
}
this.nativePageTransitions.slide(options);
this.navCtrl.setRoot(CustomizationPage);


}


moveToAdvanced(){
  this.nativePageTransitions.slide(this.slideOptions)
  this.navCtrl.setRoot(AdvancedPage);
  }


moveToTimeouts(){
  this.nativePageTransitions.slide(this.slideOptions)
  this.navCtrl.setRoot(TimeoutsPage);
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
}
