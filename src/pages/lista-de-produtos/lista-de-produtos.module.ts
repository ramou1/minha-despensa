import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaDeProdutosPage } from './lista-de-produtos';

@NgModule({
  declarations: [
    ListaDeProdutosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaDeProdutosPage),
  ],
})
export class ListaDeProdutosPageModule {}
