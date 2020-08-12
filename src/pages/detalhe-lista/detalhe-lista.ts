import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { UtilsProvider } from '../../providers/utils/utils';
import { NovoProdutoPage } from '../novo-produto/novo-produto';

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


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheListaPage');
    this.loadData();
  }
  
  loadData() {
    console.log("Nota escolhida: ", this.notaEscolhida);

    for(let x = 0; x < this.notaEscolhida.produtos.length; x++) {
      this.total += this.notaEscolhida.produtos[x].valor_unitario;
    }

    // this.loading = this.loadingCtrl.create({
    //   // content: 'Carregando...',
    // });

    // this.loading.present().then(() => {

    //   this.api.getDetalhesNota(this.notaEscolhida.id).then((res: any) => {
    //     this.loading.dismiss().then(() => {
    //       this.itens_nota = res;
    //       console.log("Itens da nota original: ", this.itens_nota);
    //       for(let x = 0; x < this.itens_nota.length; x++) {
    //         this.total += this.itens_nota[x].valor_total;
    //         this.peso_total += this.itens_nota[x].qtd;
    //       }
    //     });
    //   }).catch((e) => {
    //     console.log("Não foi possível listar os itens da nota. Detalhes: " + JSON.stringify(e));
    //     this.utils.presentErrorToast("Não foi possível listar os itens da nota.");
    //   });

    //   // console.log("Itens da nota mockado: ", this.itens_nota1);
    // });

  }

  cancelar() {
    this.navCtrl.pop();
  }

  finalizar() {
    if(!this.notaEscolhida.finalizada) {
      const confirm = this.alertCtrl.create({
        title: 'Deseja finalizar a lista?',
        subTitle: 'Ainda há produtos sem marcação.',
        buttons: [
          {
            text: 'Sim',
            handler: () => {
              this.disableButton = true;
              this.utils.presentSuccessToast("Lista finalizada com sucesso!");
                setTimeout(() => {
                  this.navCtrl.pop();
                }, 1500);
            }
          },
          {
            text: 'Não',
            cssClass: 'cancelButton',
            handler: () => {
              // console.log('Não finalizar.');
            }
          }
        ]
      });
      confirm.present();
    }

    else {
      this.disableButton = true;
      setTimeout(() => {
        this.navCtrl.pop();
      }, 1500);
    }
    
  }

  addProduto() {
    this.navCtrl.push(NovoProdutoPage);
  }

}
