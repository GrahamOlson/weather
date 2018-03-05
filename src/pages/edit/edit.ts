import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

import { WeatherProvider } from '../../providers/weather/weather';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  station: any =  {
    location:{
      state: '',
      city:  ''
    },
    weather:  {},
    settings: {}
  };

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
  }

  cancel() {
    this.viewCtrl.dismiss(null);
  }

}
