import { HttpClient } from '@angular/common/http';
// import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { config } from '../../config';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  headers = new Headers();
  options: any;

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');

    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    // this.options = new RequestOptions({ headers: this.headers });
  }

  mountURL(path, token = '', params = '') {
    var url = '';
    if (token) {
      url = config.API_URL + path + '?access-token=' + token
    } else {
      url = config.API_URL + path
    }

    if (params) {
      url += params
    }
    return url;
  }

  public lista: any = [
    { id_nota: 4, nome_produto: "Semente de Soja BMX Potência RR - Terceiros", qtd: 300, unity: "kg", valor_unitario: 3.4 },
    { id_nota: 8, nome_produto: "Semente de Soja BMX Potência RR - Terceiros", qtd: 300, unity: "kg", valor_unitario: 3.4 },
    { id_nota: 8, nome_produto: "GLI-UP 720 WG C/05 kg", qtd: 300, unity: "kg", valor_unitario: 3.4 },
    { id_nota: 8, nome_produto: "Soja Integrada", qtd: 300, unity: "kg", valor_unitario: 3.4 },
    { id_nota: 8, nome_produto: "Comp. Preço Milho - Insutria", qtd: 300, unity: "kg", valor_unitario: 3.4 }
  ]

  public produtos_gastos: any = {
    iduser: 10, email: "email@gmail.com",
    meses: [
      {
        id: 1,
        mes_descricao: "Novembro",
        ano: 2019,
        produtos: [
          { id: 1, data_emissao: "2020-05-17T00:00:00.000Z", categoria: "Sementes", valor_unit: 4.2, qtd: 300, unidade: "kg", descricao: "Semente de Soja RR - Terceiros", valor_total: 10200, tipo: 1, tipo_descricao: "gasto" },
          { id: 2, data_emissao: "2020-09-26T00:00:00.000Z", categoria: "Inseticida", valor_unit: 3.2, qtd: 300, unidade: "kg", descricao: "GLI-UP 720 WG C/05 kg", valor_total: 8499, tipo: 1, tipo_descricao: "gasto" },
          { id: 3, data_emissao: "2021-06-10T00:00:00.000Z", categoria: "Festicida", valor_unit: 3, qtd: 300, unidade: "kg", descricao: "Pesticida 8319 J&L", valor_total: 5988, tipo: 1, tipo_descricao: "gasto" }
        ]
      },
      {
        id: 2,
        mes_descricao: "Outubro",
        ano: 2019,
        produtos: [
          { id: 5, data_emissao: "2020-04-10T00:00:00.000Z", categoria: "Sementes", valor_unit: 18.2, qtd: 30, unidade: "saca", descricao: "Semente de Feijão", valor_total: 5988, tipo: 0, tipo_descricao: "gasto" },
          { id: 6, data_emissao: "2020-08-26T00:00:00.000Z", categoria: "Inseticida", valor_unit: 2.4, qtd: 200, unidade: "kg", descricao: "LOPE 99 C/05 kg", valor_total: 2499, tipo: 0, tipo_descricao: "gasto" }
        ]
      }
    ]
  };

  public ofertas: any = [
    { idoferta: 1, produto: "Achocolatado Toddy 2kg", valor: 25, estabelecimento: "Mercado Extra", cidade: "São José dos Campos", bairro: "Colinas", localizacao: null, distancia: 3, data_insercao: "2020-06-27T00:00:00.000Z", valido_ate: "2020-08-17T00:00:00.000Z", status: 1,  imagem: "default-product.png", estado: "Válida" },
    { idoferta: 2, produto: "Sabonete Dove 100g", valor: 6, estabelecimento: "Mercado Carrefour", cidade: "São José dos Campos", bairro: "Colinas", localizacao: null, distancia: 4, data_insercao: "2020-06-17T00:00:00.000Z", valido_ate: "2020-06-30T00:00:00.000Z", status: 1, imagem: null, estado: "Próxima do fim" },
    { idoferta: 9, produto: "Achocolatado Prestígio 250g", valor: 14.5, estabelecimento: "Mercado Extra", cidade: "São José dos Campos", bairro: "Jardim Oswaldo Cruz", localizacao: null, distancia: 3.7, data_insercao: "2020-06-12T00:00:00.000Z", valido_ate: "2020-06-17T00:00:00.000Z", status: 1, imagem: "default-product.png", estado: "Válida" }];

  public ofertas_favoritadas: any = [
      { idoferta: 2, produto: "Sabonete Dove 100g", valor: 6, estabelecimento: "Mercado Carrefour", cidade: "São José dos Campos", bairro: "Colinas", localizacao: null, distancia: 4, data_insercao: "2020-06-17T00:00:00.000Z", valido_ate: "2020-06-30T00:00:00.000Z", status: 1, imagem: null, estado: "Próxima do fim" },
      { idoferta: 9, produto: "Achocolatado Prestígio 250g", valor: 14.5, estabelecimento: "Mercado Extra", cidade: "São José dos Campos", bairro: "Jardim Oswaldo Cruz", localizacao: null, distancia: 3.7, data_insercao: "2020-06-12T00:00:00.000Z", valido_ate: "2020-06-17T00:00:00.000Z", status: 1, imagem: "default-product.png", estado: "Válida" }];
  
    // mostrar todas as ofertas
    getOfertas() {
      return this.ofertas;
    //   return new Promise((res, rej) => {
    //     this.http.get(this.mountURL('notas/icons'), this.options).subscribe((result: any) => {
    //       res(result.json());
    //     }, (error) => rej(error.json()));
    //   });
    }

    // desfavoritar oferta
    desfavoritarOferta(idoferta) {
      // return new Promise((res, rej) => {
      //   this.http.get(config.API_URL + 'categoria/desfavoritar/' + idoferta).subscribe((result: any) => {
      //     res(result.json());
      //   }, (error) => rej(error.json()));
      // });
    }

    
  
    // // criar nova categoria
    // criarCategoria(nome, tipo, icon) {
    //   var data = { nome: nome, tipo: tipo, icon: icon };
    //   return new Promise((res, rej) => {
    //     this.http.post(config.API_URL + 'categoria', data).subscribe((resultUser: any) => {
    //       res(resultUser.json());
    //     }, (error) => rej(error.json()));
    //   });
    // }
  
    // // editar categoria criada pelo usuário
    // editarCategoria(idcategoria, nome, icon) {
    //   var data = { idcategoria: idcategoria, nome: nome, icon: icon };
    //   return new Promise((res, rej) => {
    //     this.http.put(config.API_URL + 'mobile/categoria', data).subscribe((resultUser: any) => {
    //       res(resultUser.json());
    //     }, (error) => rej(error.json()));
    //   });
    // }
  
}
