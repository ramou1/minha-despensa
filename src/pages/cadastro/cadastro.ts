import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { UtilsProvider } from '../../providers/utils/utils';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public api: ApiProvider, public utils: UtilsProvider, public loadingCtrl: LoadingController) {
  }

  user: any = {nome: '', email: '', senha: '', confirmasenha: '', idPerfil: '' };

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  registrar() {
    this.navCtrl.setRoot(TabsPage);
    console.log("Dados cadastrados: ", this.user);

    // this.loading = this.loadingCtrl.create({
    //   content: 'Carregando...',
    // });

    // this.loading.present().then(() => {
    //   this.api.criarConta(this.user.nome, this.user.email, this.user.senha, this.user.confirmasenha).then((result: any) => {
    //     this.loading.dismiss().then(() => {

    //       if (!result.statusCode) {
    //         console.log("Cadastrado com sucesso!", result);
    //         this.utils.presentSuccessToast("Usuário cadastrado com sucesso!");

    //         this.api.login(this.user.email, this.user.senha).then((res: any) => {
    //           console.log("Resultado login: ", res);
    //             this.navCtrl.setRoot(TabsPage);
    //         }).catch((error: any) => {
    //             console.log("Erro no login: ", error);
    //             this.utils.presentErrorToast("Erro ao fazer o Login.");
    //             let alert = this.alertCtrl.create({
    //               title: error.message,
    //               buttons: ['Ok']
    //             });
    //             alert.present()
    //         });
    //       }
    //       else {
    //         console.log("Erro no cadastro!", result.message);
    //         this.utils.presentErrorToast("Erro no cadastro! " + result.message);
    //       }
          
    //     });
    //   }).catch((error: any) => {
    //     console.log("Erro ao cadastrar!", error.message);
    //     this.loading.dismiss();
    //     this.utils.presentErrorToast("Erro ao cadastrar! " + error.message);
    //   });
    // });
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  cancelar() {
    const confirm = this.alertCtrl.create({
      title: 'Deseja cancelar o cadastro?',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            console.log('Cadastro cancelado.');
            this.navCtrl.pop();
          }
        },
        {
          text: 'Não',
          cssClass: 'cancelButton',
          handler: () => {
            console.log('Não cancelar cadastro.');
          }
        }
      ]
    });
    confirm.present();

  }

}
