import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';


import {DeviceListPage } from '../device-list/device-list';
import {AudioEffectPage } from '../audio-effect/audio-effect';
import {HomePage } from '../home/home';


/**
 * Generated class for the LrReceiverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lr-receiver',
  templateUrl: 'lr-receiver.html',
})
export class LrReceiverPage {

  slideOptions;
  backOptions;
  on=1;

  constructor(public navCtrl: NavController, private nativePageTransitions: NativePageTransitions, public menuCtrl:MenuController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LrReceiverPage');
  }

  ionViewWillEnter() {

  this.menuCtrl.swipeEnable( true, 'menu2' );
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

     let backOptions: NativeTransitionOptions = {
      direction: 'back',
      duration: 400,
      slowdownfactor: -1,
      slidePixels: 0,
      iosdelay: 100,
      androiddelay: 250,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 0
     }; 
     
   this.slideOptions=options;
   this.backOptions=backOptions;
   }
   
  moveToDeviceList(){
    //this.navCtrl.setRoot(DeviceListPage);
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 400,
      slowdownfactor: -1,
      slidePixels: 0,
      iosdelay: 100,
      androiddelay: 250,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 0
     }; 
     this.nativePageTransitions.slide(options )
    let modal = this.modalCtrl.create(DeviceListPage);
modal.present();
  }

  moveToAudioEffect(){
    
   // alert(JSON.stringify(this.trans.options))
     this.nativePageTransitions.slide(this.slideOptions )
    this.navCtrl.setRoot(AudioEffectPage);
  }

  moveToHome(){
    if(this.navCtrl.canGoBack()){
      let options:NativeTransitionOptions={
        direction:'right',
        duration:500,
        slowdownfactor:-1,
        slidePixels:0
      }
      this.nativePageTransitions.slide(options);  
      this.navCtrl.pop();
    }
    else{
      console.log('else');
      let options:NativeTransitionOptions={
        direction:'right',
        duration:500,
        slowdownfactor:-1,
        slidePixels:0
    }
    this.nativePageTransitions.slide(options);
    this.navCtrl.setRoot(HomePage);
  }

  }

  openRightMenu(){

    this.menuCtrl.enable(false, 'authenticated');
    console.log("open right");
    this.menuCtrl.enable(true, 'unauthenticated');

  }

  syncOnOff(check){
    console.log("check ", check);
     this.on=check;
  }
}
