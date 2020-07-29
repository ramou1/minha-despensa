import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

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

@NgModule({
  declarations: [
    MyApp,
    ListaDeComprasPage,
    OndeTemPage,
    OfertasPage,
    LoginPage,
    CadastroPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListaDeComprasPage,
    OndeTemPage,
    OfertasPage,
    LoginPage,
    CadastroPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    UtilsProvider
  ]
})
export class AppModule {}
