import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ListaDeProdutosPage } from '../lista-de-produtos/lista-de-produtos';
import { DetalheProdutoPage } from '../detalhe-produto/detalhe-produto';

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

  listaFiltrada: any[];
  categorias_produtos: any;
  produto;
  // categorias_produtos: any = this.api.categorias_produtos;

  ionViewDidLoad() {
    console.log('ionViewDidLoad OndeTemPage');
    this.loadData();
  }


  loadData() {
    this.categorias_produtos = this.api.categorias_produtos;
    console.log("Categorias: ", this.categorias_produtos);
    
  }

  // filtrar(pesquisa) {
  //   // Reset items back to all of the items
  //   this.loadData();

  //   // set val to the value of the ev target
  //   var val = pesquisa.target.value;

  //   // if the value is an empty string don't filter the items
  //   if (val && val.trim() != '') {
  //     this.produto = this.produto.filter((item) => {
  //       return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }
  abrirCategoria(categoria) {
    this.navCtrl.push(ListaDeProdutosPage, {
      categoria: categoria
    });
  }

  abrirProduto(produto) {
    this.navCtrl.push(DetalheProdutoPage, {
      produto: produto
    });
  }

  filtrar(pesquisa) {
    this.listaFiltrada = this.categorias_produtos.filter(produto => {
        return (produto.nome.toLowerCase().indexOf(pesquisa.toLowerCase()) > -1);
    });
  }

}
