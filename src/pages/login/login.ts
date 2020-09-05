import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ApiProvider } from '../../providers/api/api';
import { UtilsProvider } from '../../providers/utils/utils';
import { CadastroPage } from '../cadastro/cadastro';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider, public utils:UtilsProvider, public loadingCtrl: LoadingController) {
  }

  user: any = { email: '', senha: '' };

  ionViewDidEnter() {
    // this.api.carregarUsuario().then((res: any) => {
    //   if(res.token) {
        // this.navCtrl.setRoot(TabsPage);
    //   }
    // }).catch((e) => {
    //   console.log("Usuário não encontrado."); 
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

    this.user.email = 'emailteste@gmail.com';
    this.user.senha = 'senha012';

    // this.user.email = 'ciclano@gmail.com';
    // this.user.senha = '44444';
  }


  fazerLogin() {

    // this.loading = this.loadingCtrl.create({ 
    //   // content: 'Carregando...',
    // });

    // this.loading.present().then(() => {

    //   this.api.login(this.user.email, this.user.senha).then((result: any) => {
    //     this.loading.dismiss().then(() => {

    //       if(result.status == 400) {
    //         let alert = this.alertCtrl.create({
    //           title: result.message,
    //           buttons: ['Ok']
    //         });
    //         alert.present()
    //       }
    //       else {
    //         this.navCtrl.setRoot(TabsPage);
    //       }

    //       // this.api.carregarUsuario().then((res: any) => {
    //       //   this.api.atualizarUsuario({ idFirebase: this.meuPush, idFirebaseReceptor: this.meuPush }).then((res) => console.log(res)
    //       //   ).catch((e) => console.log(e));
    //       // });
          
    //     });
    //   }).catch((error: any) => {
    //     this.loading.dismiss().then(() => {
    //       console.log("Erro no login: ", error);
    //       this.utils.presentErrorToast("Erro ao fazer o Login.");
    //       let alert = this.alertCtrl.create({
    //         title: error.message,
    //         buttons: ['Ok']
    //       });
    //       alert.present()
    //     });
    //   });
    // });
  }

  entrarSemConta() {
    this.navCtrl.setRoot(TabsPage);
  }

  cadastrar() {
    this.navCtrl.push(CadastroPage);
  }

}
