import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NovoProdutoPage } from '../novo-produto/novo-produto';
import { UtilsProvider } from '../../providers/utils/utils';

/**
 * Generated class for the NovaListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nova-lista',
  templateUrl: 'nova-lista.html',
})
export class NovaListaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public utils: UtilsProvider) {
  }

  lista: any = { id: '', descricao: '', produtos: [] };
  disableButton: boolean = false;

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovaListaPage');
    this.loadData();
  }

  loadData() {
  }

  salvar() {
    this.disableButton = true;
    // this.loading = this.loadingCtrl.create({
    //   // content: 'Carregando...',
    // });

    // this.loading.present().then(() => {

    //   this.api.criarEstoque(this.produto.qtd, this.idarmazem, this.idproduto, this.produto.cliente, this.idmedida).then((result: any) => {
    //     this.loading.dismiss().then(() => {
          this.utils.presentSuccessToast("Lista criada com sucesso!");
          setTimeout(() => {
            this.navCtrl.pop();
          }, 1500);
    //     });
    //   }).catch((error: any) => {
    //     console.log("Erro ao cadastrar!", error.message);
    //     this.loading.dismiss();
    //     this.utils.presentErrorToast("Erro ao cadastrar!");
    //   });
    // });
  }

  cancelar() {
    this.navCtrl.pop();
  }

  addProduto() {
    this.navCtrl.push(NovoProdutoPage);
  }

}
