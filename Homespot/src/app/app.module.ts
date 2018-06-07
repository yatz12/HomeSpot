import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CodecPage } from '../pages/codec/codec';
import{ MenuPage } from '../pages/menu/menu';
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
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { DatePicker } from '@ionic-native/date-picker';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CodecPage,
    MenuPage,
    DeviceListPage,
    CustomizationPage,
    ConnectionPage,
    TimeoutsPage,
    AdvancedPage,
    FeatureRequestPage,
    LrReceiverPage,
    ContactUsPage,
    AudioEffectPage,
    ProductRegistrationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CodecPage,
    MenuPage,
    DeviceListPage,
    CustomizationPage,
    ConnectionPage,
    TimeoutsPage,
    AdvancedPage,
    FeatureRequestPage,
    LrReceiverPage,
    ContactUsPage,
    AudioEffectPage,
    ProductRegistrationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativePageTransitions,
    DatePicker
  ]
})
export class AppModule {


}
