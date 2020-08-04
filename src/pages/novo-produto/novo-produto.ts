import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { UtilsProvider } from '../../providers/utils/utils';

/**
 * Generated class for the NovoProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-novo-produto',
  templateUrl: 'novo-produto.html',
})
export class NovoProdutoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public api: ApiProvider, public utils: UtilsProvider) {
  }

  // produtos: any =  this.api.produtos; // mockado
  produtos: any;
  estoquistas: any;
  produto: any = { id: '', nome: '', qtd: '', valor: '' };
  medidas: any;
  loading: Loading;
  disableButton: boolean = false;
  idarmazem: any;
  idproduto: any;
  idmedida: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovoEstoquePage');
    this.loadData();
  }


  loadData() {
    // this.api.getTiposProdutos().then((res: any) => {
    //   this.produtos = res;
    //   this.produto.nome = this.produtos[0].nome;
    //   this.idproduto = this.produtos[0].idproduto;
    //   console.log("Produtos: ", this.produtos);
    // }).catch((e) => {
    //   console.log("Não foi possível listar os produtos. Detalhes: " + e);
    // });

    // this.api.getEstoquistas().then((res: any) => {
    //   this.estoquistas = res;
    //   this.produto.estoquista = this.estoquistas[0].nome;
    //   this.idarmazem = this.estoquistas[0].idarmazem;
    //   this.produto.cliente = this.estoquistas[0].cliente;
    //   console.log("Estoquistas: ", this.estoquistas);
    // }).catch((e) => {
    //   console.log("Não foi possível listar os estoquistas. Detalhes: " + e);
    // });
  }


  produtoEscolhido(produto) {
    console.log("produto escolhido: ", produto);
    this.idproduto = produto.idproduto;
  }

  salvar() {
    this.disableButton = true;
    // this.loading = this.loadingCtrl.create({
    //   // content: 'Carregando...',
    // });

    // this.loading.present().then(() => {

    //   this.api.criarEstoque(this.produto.qtd, this.idarmazem, this.idproduto, this.produto.cliente, this.idmedida).then((result: any) => {
    //     this.loading.dismiss().then(() => {
          this.utils.presentSuccessToast("Produto adicionado com sucesso!");
          setTimeout(() => {
            this.navCtrl.pop();
          }, 1000);
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

}