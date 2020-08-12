import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalheProdutoPage } from '../detalhe-produto/detalhe-produto';

/**
 * Generated class for the ListaDeProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-de-produtos',
  templateUrl: 'lista-de-produtos.html',
})
export class ListaDeProdutosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  categoriaEscolhida: any = this.navParams.get('categoria');

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaDeProdutosPage');
    this.loadData();
  }
  
  loadData() {
    console.log("Categoria escolhida: ", this.categoriaEscolhida);
  }

  abrirDetalhes(produto) {
    this.navCtrl.push(DetalheProdutoPage, {
      produto: produto
    });
  }

  cancelar() {
    this.navCtrl.pop();
  }

}
