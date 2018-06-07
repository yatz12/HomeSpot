import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, ActionSheetController, MenuController } from 'ionic-angular';

import { ConnectionPage} from '../connection/connection';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

/**
 * Generated class for the AdvancedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-advanced',
  templateUrl: 'advanced.html',
})
export class AdvancedPage {

  constructor(public navCtrl: NavController,public  nativePageTransitions: NativePageTransitions, public menuCtrl:MenuController, public navParams: NavParams, public nav: Nav, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvancedPage');
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
  this.navCtrl.setRoot(ConnectionPage);
    //this.nav.setRoot(ConnectionPage);
  }

  connectTimeoutOptions(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Connect Timeout To Options',
      buttons: [
        {
          text: 'Pairing',
          handler: () => {
            console.log('Pairing clicked');
          }
        },
        {
          text: 'Connectable',
          handler: () => {
            console.log('Connectable clicked');
          }
        },
        {
          text: 'Idle',
          handler: () => {
            console.log('Idle clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }


  connectPolicy(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Connect Policy Options',
      buttons: [
        {
          text: 'Connect To Last Device',
          handler: () => {
            console.log('Connect To Last Deviceclicked');
          }
        },
        {
          text: 'Connect To List',
          handler: () => {
            console.log('Connect To List clicked');
          }
        },
       
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();

  }

}
