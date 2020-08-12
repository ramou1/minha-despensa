import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { ApiProvider } from '../../providers/api/api';
import { NovaListaPage } from '../nova-lista/nova-lista';
import { DetalheListaPage } from '../detalhe-lista/detalhe-lista';

/**
 * Generated class for the ListaDeComprasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-de-compras',
  templateUrl: 'lista-de-compras.html',
})
export class ListaDeComprasPage {

  teste: any;
  listas_fazer: any = this.api.lista_fazer;
  listas_finalizadas: any = this.api.lista_finalizada;
  escolha: string = "a-fazer";
  loading: Loading;

  constructor(public navCtrl: NavController, public utils: UtilsProvider, public api: ApiProvider, public loadingCtrl: LoadingController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaDeComprasPage');
    this.loadData();
  }

  loadData() {
    console.log("Compras a fazer: ", this.listas_fazer); 
    console.log("Compras finalizadas: ", this.listas_finalizadas); 
    // this.teste = this.navParams.get('produtos');
    // console.log("produto: ", this.teste);
    

    // this.loading = this.loadingCtrl.create({
    //   // content: 'Carregando Estoque...',
    // });

    // this.loading.present().then(() => {
    //   this.api.getEstoque().then((res1: any) => {
    //       this.loading.dismiss().then(() => {
    //         this.estoques = res1;
    //   }).catch((e) => {
    //     console.log("Não foi possível listar os estoques. Detalhes: " + JSON.stringify(e));
    //     this.utils.presentErrorToast("Não foi possível listar os estoques.");
    //     this.loading.dismiss();
    //   });
    // });
  }

  abrirLista(lista) {
    this.navCtrl.push(DetalheListaPage, {
      lista: lista
    });
  }

  // editarLista(lista) {
  //   this.navCtrl.push(EditListaPage, {
  //     lista: lista
  //   });
  // }

  addLista() {
    this.navCtrl.push(NovaListaPage);
  }

}
