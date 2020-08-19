import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { ApiProvider } from '../../providers/api/api';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public utils: UtilsProvider, public api: ApiProvider) {
  }

  lista: any = { id: '', descricao: '', produtos: [] };
  produto: any = {nome: '', valor: '' };
  produtos_adicionados: any = this.api.produtos_adicionados;
  disableButton: boolean = false;
  total: number = 0;

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovaListaPage');
    this.loadData();
  }

  loadData() {
    for(let x = 0; x < this.produtos_adicionados.length; x++) {
      this.total += this.produtos_adicionados[x].valor_unitario;
    }

    console.log("Produtos: ", this.produtos_adicionados);
    
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
    const confirm = this.alertCtrl.create({
      title: 'Deseja cancelar a lista?',
      subTitle: 'Todo conteúdo será perdido.',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            console.log('Lista cancelada.');
            this.navCtrl.pop();
          }
        },
        {
          text: 'Não',
          cssClass: 'cancelButton',
          handler: () => {
            console.log('Não cancelar lista.');
          }
        }
      ]
    });
    confirm.present();
  }

  addProduto() {
    var dados: any = {nome_produto: this.produto.nome, valor_unitario: this.produto.valor };
    this.produtos_adicionados.push(dados);

    this.produto.nome = "";
    this.produto.valor = "";

    // this.loading = this.loadingCtrl.create({
    //   // content: 'Carregando...',
    // });

    // this.loading.present().then(() => {

    //   this.api.criarEstoque(this.produto.qtd, this.idarmazem, this.idproduto, this.produto.cliente, this.idmedida).then((result: any) => {
    //     this.loading.dismiss().then(() => {
    //     });
    //   }).catch((error: any) => {
    //     console.log("Erro ao cadastrar!", error.message);
    //     this.loading.dismiss();
    //     this.utils.presentErrorToast("Erro ao cadastrar!");
    //   });
    // });
  }

  retirarProduto(produto) {
    console.log("Retirar produto: ", produto);
  }

}
