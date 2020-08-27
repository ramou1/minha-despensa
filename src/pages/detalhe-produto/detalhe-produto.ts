import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the DetalheProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-produto',
  templateUrl: 'detalhe-produto.html',
})
export class DetalheProdutoPage {

  constructor(public navCtrl: NavController, public iab: InAppBrowser, public navParams: NavParams, public api: ApiProvider) {
  }

  produtoEscolhido: any = this.navParams.get('produto');
  estabelecimentos: any = this.api.estabelecimentos;

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheProdutoPage');
    this.loadData();
  }
  
  loadData() {
    console.log("Produto escolhido: ", this.produtoEscolhido);
    console.log("Estabelecimentos: ", this.estabelecimentos);
  }

  cancelar() {
    this.navCtrl.pop();
  }

  abrirMapa(estabelecimento) {
    const browser = this.iab.create("http://maps.google.com/maps?q="+estabelecimento.lat+","+estabelecimento.lng);
    browser.show();
    console.log("Abrir mapa da localização: ", estabelecimento.endereco);
  }

}
