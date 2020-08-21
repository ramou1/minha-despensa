import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { UtilsProvider } from '../../providers/utils/utils';

/**
 * Generated class for the DetalheListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-lista',
  templateUrl: 'detalhe-lista.html',
})
export class DetalheListaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public api: ApiProvider, public utils: UtilsProvider, public loadingCtrl: LoadingController) {
  }

  loading: Loading;
  total: number = 0;
  peso_total: number = 0;
  disableButton: boolean = false;
  itens_nota: any = this.api.itens_nota;
  notaEscolhida: any = this.navParams.get('lista');
  produto: any = {nome: '', valor: '' };


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheListaPage');
    this.loadData();
  }
  
  loadData() {
    console.log("Nota escolhida: ", this.notaEscolhida);

    for(let x = 0; x < this.notaEscolhida.produtos.length; x++) {
      this.total += this.notaEscolhida.produtos[x].valor_unitario;
    }
  }

  cancelar() {
    this.navCtrl.pop();
  }

  addProduto() {
    var dados: any = {nome_produto: this.produto.nome, valor_unitario: this.produto.valor };
    this.notaEscolhida.produtos.push(dados);
    this.total += parseInt(this.produto.valor);

    this.produto.nome = "";
    this.produto.valor = "";
  }

  removerProduto(nota, i) {
    console.log("Remover: ", nota);
    this.total -= parseInt(nota.valor_unitario);
    this.notaEscolhida.produtos.splice(i, 1);
  }

  // finalizar() {
  //   if(!this.notaEscolhida.finalizada) {
  //     const confirm = this.alertCtrl.create({
  //       title: 'Deseja finalizar a lista?',
  //       subTitle: 'Ainda há produtos sem marcação.',
  //       buttons: [
  //         {
  //           text: 'Sim',
  //           handler: () => {
  //             this.disableButton = true;
  //             this.utils.presentSuccessToast("Lista finalizada com sucesso!");
  //               setTimeout(() => {
  //                 this.navCtrl.pop();
  //               }, 1500);
  //           }
  //         },
  //         {
  //           text: 'Não',
  //           cssClass: 'cancelButton',
  //           handler: () => {
  //             // console.log('Não finalizar.');
  //           }
  //         }
  //       ]
  //     });
  //     confirm.present();
  //   }

  //   else {
  //     this.disableButton = true;
  //     setTimeout(() => {
  //       this.navCtrl.pop();
  //     }, 1500);
  //   }  
  // }

}
