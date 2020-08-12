import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
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
    console.log("Abrir mapa da localização: ", estabelecimento.endereco);
  }

}
