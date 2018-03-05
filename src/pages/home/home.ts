import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { EditPage } from '../edit/edit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  stations: any  = [];

  constructor(public navCtrl: NavController,
              private modalCtrl: ModalController,
              private storage: Storage) {

    this.storage.get('stations').then( stations => {
      if ( stations ) 
          this.stations = stations;
    });

  }

  saveStations() {

    this.storage.set('stations', this.stations);

  }

  addStation() {

    let editModal = this.modalCtrl.create( EditPage );
    editModal.present();
    editModal.onDidDismiss( newStation => {
      if ( newStation != null ) {
        this.stations.push( newStation );
        this.saveStations();
      }
    });

  }

  editStation(stationIndex) {

      let editModal = this.modalCtrl.create( EditPage, {station: this.stations[stationIndex]} );
    editModal.present();
    editModal.onDidDismiss( newStation => {
      if ( newStation != null ) {
        this.stations.splice(stationIndex, 1, newStation);
        this.saveStations();
      }
    });

  }

  reorderStation: boolean = false;

  toggleEditView() {
    
  }

}
