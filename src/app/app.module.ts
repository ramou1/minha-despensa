import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { UtilsProvider } from '../providers/utils/utils';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { HttpClientModule } from '@angular/common/http';
import { ListaDeComprasPage } from '../pages/lista-de-compras/lista-de-compras';
import { OndeTemPage } from '../pages/onde-tem/onde-tem';
import { OfertasPage } from '../pages/ofertas/ofertas';
import { NovaListaPage } from '../pages/nova-lista/nova-lista';
import { DetalheListaPage } from '../pages/detalhe-lista/detalhe-lista';
import { ListaDeProdutosPage } from '../pages/lista-de-produtos/lista-de-produtos';
import { DetalheProdutoPage } from '../pages/detalhe-produto/detalhe-produto';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    ListaDeComprasPage,
    NovaListaPage,
    DetalheListaPage,
    OndeTemPage,
    ListaDeProdutosPage,
    DetalheProdutoPage,
    OfertasPage,
    LoginPage,
    CadastroPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__minhadespensa',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListaDeComprasPage,
    NovaListaPage,
    DetalheListaPage,
    OndeTemPage,
    ListaDeProdutosPage,
    DetalheProdutoPage,
    OfertasPage,
    LoginPage,
    CadastroPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    InAppBrowser,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    UtilsProvider
  ]
})
export class AppModule {}
