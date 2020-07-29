import { Component } from '@angular/core';

import { ListaDeComprasPage } from '../lista-de-compras/lista-de-compras';
import { OndeTemPage } from '../onde-tem/onde-tem';
import { OfertasPage } from '../ofertas/ofertas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListaDeComprasPage;
  tab2Root = OndeTemPage;
  tab3Root = OfertasPage;

  constructor() {

  }
}
