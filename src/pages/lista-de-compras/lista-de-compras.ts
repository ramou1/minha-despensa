import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { ApiProvider } from '../../providers/api/api';
import { EditListaPage } from '../edit-lista/edit-lista';
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

  listas: any = this.api.lista;
  // listas: any;
  medidas: any;
  loading: Loading;

  constructor(public navCtrl: NavController, public utils: UtilsProvider, public api: ApiProvider, public loadingCtrl: LoadingController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad ListaDeComprasPage');
    this.loadData();
  }

  loadData() {
    // this.loading = this.loadingCtrl.create({
    //   // content: 'Carregando Estoque...',
    // });

    // this.loading.present().then(() => {
    //   this.api.getEstoque().then((res1: any) => {
    //     this.api.getMedidas().then((res2: any) => {

    //       this.loading.dismiss().then(() => {
    //         this.estoques = res1;
    //         this.medidas = res2;
            
    //         // alterando os números para o nome da unidade
    //         for(var x = 0; x < this.estoques.length; x++) {
    //           for(var y = 0; y < this.medidas.length; y++) {
    //             if(this.medidas[y].idTipo == this.estoques[x].unidade) {
    //               this.estoques[x].unidade = this.medidas[y].nome;
    //             }
                  
    //           }
    //         }
    //         console.log("MEDIDAS: ", this.medidas);
    //         console.log("GET ESTOQUES: ", this.estoques);
    //       });

    //     }).catch((e) => {
    //       console.log("Não foi possível listar as medidas. Detalhes: " + JSON.stringify(e));
    //     });
    //   }).catch((e) => {
    //     console.log("Não foi possível listar os estoques. Detalhes: " + JSON.stringify(e));
    //     this.utils.presentErrorToast("Não foi possível listar os estoques.");
    //     this.loading.dismiss();
    //   });
    // });
  }

  abrirLancamentos(lista) {
    this.navCtrl.push(DetalheListaPage, {
      lista: lista
    });
    // this.utils.presentErrorToast("Detalhe do estoque indisponível.");
  }

  editarLista(lista) {
    this.navCtrl.push(EditListaPage, {
      lista: lista
    });
  }

  addLista() {
    this.navCtrl.push(NovaListaPage);
  }

}
