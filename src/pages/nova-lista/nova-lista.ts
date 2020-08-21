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
    this.produtos_adicionados = [];
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
    this.total += parseInt(this.produto.valor);

    this.produto.nome = "";
    this.produto.valor = "";
  }

  removerProduto(produto, i) {
    console.log("Remover produto: ", produto);
    this.total -= parseInt(produto.valor_unitario);
    this.produtos_adicionados.splice(i, 1);
  }

  salvar() {
    this.disableButton = true;
    // this.loading = this.loadingCtrl.create({
    //   // content: 'Carregando...',
    // });

    // this.loading.present().then(() => {

    //   this.api.criarLista(this.produto.nome, this.produto.valor).then((result: any) => {
    //     this.loading.dismiss().then(() => {
          this.utils.presentSuccessToast("Lista criada com sucesso!");
          setTimeout(() => {
            this.navCtrl.pop();
          }, 1500);
    //     });
    //   }).catch((error: any) => {
    //     console.log("Erro ao criar a lista!", error.message);
    //     this.loading.dismiss();
    //     this.utils.presentErrorToast("Erro ao criar a lista!");
    //   });
    // });
  }

}
