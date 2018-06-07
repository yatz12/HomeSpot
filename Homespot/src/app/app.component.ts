import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, ModalController, ActionSheetController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CodecPage } from '../pages/codec/codec';
import{MenuPage} from '../pages/menu/menu';
import{ DeviceListPage } from '../pages/device-list/device-list';
import{ CustomizationPage } from '../pages/customization/customization';
import { ConnectionPage} from '../pages/connection/connection';
import { TimeoutsPage} from '../pages/timeouts/timeouts';
import { AdvancedPage} from '../pages/advanced/advanced';
import { FeatureRequestPage} from '../pages/feature-request/feature-request';
import { LrReceiverPage} from '../pages/lr-receiver/lr-receiver';
import {ContactUsPage } from '../pages/contact-us/contact-us';
import {AudioEffectPage } from '../pages/audio-effect/audio-effect';
import {ProductRegistrationPage } from '../pages/product-registration/product-registration';
import { InAppBrowser } from '@ionic-native/in-app-browser';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public modalCtrl:ModalController,public actionSheetCtrl: ActionSheetController, private iab: InAppBrowser, public statusBar: StatusBar, public menuCtrl: MenuController,  public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];
    // this.menuCtrl.enable(true, 'authenticated');
    // this.menuCtrl.enable(false, 'unauthenticated');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  moveToHome(){
    this.nav.setRoot(HomePage);
  }
  moveToProductRegistration(){
    this.nav.setRoot(ProductRegistrationPage);
  }
  moveToFeatureRequest(){
    this.nav.setRoot(FeatureRequestPage);
  }
  moveToContactUs(){
    this.nav.setRoot(ContactUsPage);
  }
  moveToCustomization(){
    this.nav.setRoot(CustomizationPage);

  }
  moveToAudioEffect(){
   this.nav.setRoot(AudioEffectPage);
  }
  moveToDeviceList(){
  // this.nav.setRoot(DeviceListPage);
  let profileModal = this.modalCtrl.create(DeviceListPage);
  profileModal.present();
   console.log("device");

  }

  openInBrowser(){
    const browser = this.iab.create('http://www.homespotdigital.com/');
  }
  unlink(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Unlink This Receiver. Are You Sure?',
      buttons: [
        {
          text: 'Unlink',
         
          handler: () => {
            console.log('Unlink clicked');
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
  goToLRReceiver(){
    this.menuCtrl.close();
    this.nav.setRoot(LrReceiverPage);
    console.log('LrReceiverPage');
  }
}
