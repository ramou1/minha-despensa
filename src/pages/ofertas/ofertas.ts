import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { UtilsProvider } from '../../providers/utils/utils';



@IonicPage()
@Component({
  selector: 'page-ofertas',
  templateUrl: 'ofertas.html',
})
export class OfertasPage {

  // icone_padrao: any = [];
  icone_padrao: string = "star-outline";
  escolha: string = "promocoes";
  ofertas: any = this.api.ofertas;
  ofertas_favoritadas: any = this.api.ofertas_favoritadas;
  produtos: any;
  loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public api: ApiProvider, public utils: UtilsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfertasPage');
    this.loadData();
  }

  loadData() {
    console.log("Ofertas: ", this.ofertas); 

    // this.loading = this.loadingCtrl.create({
      // content: 'Carregando...',
    // });

    // this.loading.present().then(() => {

          // this.api.getOfertas().then((res: any) => {
          //     this.loading.dismiss().then(() => {
          //       this.ofertas = res;
          //       console.log("Ofertas: ", this.ofertas);
          //     });
          //   }).catch((e) => {
          //     console.log("Não foi possível listar as ofertas. Detalhes: " + e);
          //   });
    // });
  }

  favoritarOferta(oferta) {
    this.icone_padrao = "star";

    // this.categorias = !this.categorias;
    // this.subcategoria1 = !this.subcategoria1;
    // this.filtro = 'Categoria';

    this.utils.presentSuccessToast("Oferta favoritada com sucesso!");
    this.loadData();
  }

  desfavoritarOferta(oferta) {
    console.log("Oferta a ser desfavoritada: ", oferta);

    const confirm = this.alertCtrl.create({
      title: 'Deseja desfavoritar a oferta?',
      message: 'O processo é irreversível',
      buttons: [
        {
          text: 'Desfavoritar oferta',
          handler: () => {
            // this.api.desfavoritarOferta(oferta.id).then((result: any) => {
              console.log("Oferta desfavoritada!");
              this.utils.presentSuccessToast("Oferta desfavoritada com sucesso!");
              this.loadData();
            // }).catch((e) => {
            //   console.log("Não foi possível desfavoritar a oferta. Detalhes: " + e);
            //   this.utils.presentErrorToast("Não foi possível desfavoritar a oferta.");
            //   this.loading.dismiss();
            // });
          }
        },
        {
          text: 'Cancelar',
          cssClass: 'cancelButton',
          handler: () => {
            console.log('Não desfavoritar oferta.');
          }
        }
      ]
    });
    confirm.present();
  }

}
