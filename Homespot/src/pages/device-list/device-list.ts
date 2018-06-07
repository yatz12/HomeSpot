import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ActionSheetController,AlertController, MenuController } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
/**
 * Generated class for the DeviceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device-list',
  templateUrl: 'device-list.html',
})
export class DeviceListPage {

  constructor(public menuCtrl:MenuController, private nativePageTransitions: NativePageTransitions, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public viewCtrl:ViewController,public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceListPage');
  }

  ionViewWillEnter() {
    console.log('ion will Enter')
    //closing right side menu
    this.menuCtrl.swipeEnable( false, 'menu2' );
}

goBack(){
  //this.navCtrl.pop();
  let options: NativeTransitionOptions = {
    direction: 'down',
    duration: 400,
    slowdownfactor: -1,
    slidePixels: 0,
    iosdelay: 100,
    androiddelay: 250,
    fixedPixelsTop: 0,
    fixedPixelsBottom: 0
   }; 
   this.nativePageTransitions.slide(options)
  this.viewCtrl.dismiss();
}

selectOptions(){
  let actionSheet = this.actionSheetCtrl.create({
    title: 'Active Device Actions',
    buttons: [
      {
        text: 'Disconnect',
       
        handler: () => {
          console.log('Disconnect clicked');
        }
      },
      {
        text: 'Rename',
        handler: () => {
          console.log('Rename clicked');
        }
      },
      {
        text: 'Remove',
        role:'destructive',
        handler: () => {
          console.log('Remove clicked');
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

pairNew(){
  let alert = this.alertCtrl.create({
    title: 'Pairing Mode On',
    subTitle: "The receiver's pairing mode is now turned on. Go the source device's Bluetooth Settings, then pair and connect to this receiver named LR-Receiver-1234 ",
    buttons: [ 
      {
        text: 'OK',
        
        handler: () => {
          this.choose();
          console.log('Cancel clicked');
        }
      },
    ]});
  alert.present();
}

choose(){
  let alert = this.alertCtrl.create({
    title: 'Connection Alert',
    subTitle: "A new device [00-01-02-03-04-05] is paire and connected. Do you want to give me a name to this Device?",
    buttons: [ 
      {
        text: 'Yes',
        handler: () => {
          this.giveName();
          console.log('Yes clicked');
        }
      },
      {
        text: 'No',
        
        handler: () => {
          console.log('No clicked');
        }
      },
    ]});
  alert.present();
}

giveName(){
  let alert = this.alertCtrl.create({
    title: 'Device Name',
    subTitle:"Enter a new name for [00-01-02-03-04-05]",
    inputs: [
      {
        name: 'username',
        placeholder: "Kyle's iphone"
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
         
        }
      }
    ]
  });
  alert.present();
}

}
