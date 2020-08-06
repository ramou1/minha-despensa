import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the OndeTemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onde-tem',
  templateUrl: 'onde-tem.html',
})
export class OndeTemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
  }

  categorias_produtos: any = this.api.categorias_produtos;

  ionViewDidLoad() {
    console.log('ionViewDidLoad OndeTemPage');
  }

}
