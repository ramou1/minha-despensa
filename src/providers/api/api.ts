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

  public produtos_adicionados: any = [
    {nome_produto: "Picanha", valor_unitario: 25.6}, 
    {nome_produto: "Pão de Alho", valor_unitario: 3.4}, 
    {nome_produto: "Pão francês", valor_unitario: 5.4}, 
    {nome_produto: "Sobre coxa", valor_unitario: 15.2}
  ]

  public categorias_produtos: any = [
    { id_categoria: 1, nome: "Doces", imagem:"doces.png", produtos: [ {nome_produto: "Balas de Gelatina Dentadura Fini 100g", valor_unitario: 4.6, imagem:"fini-dentaduras.png"}, {nome_produto: "Balas de Gelatina Minhoca Cítrica Fini 100g", valor_unitario: 3.4, imagem:"fini-minhocas.jpg"}, {nome_produto: "Chocolate Garoto Talento Branco Doce de Leite Tablete 90g", valor_unitario: 8.99, imagem:"garoto-talento.jpg"}, {nome_produto: "Creme de Avelã Nutella Ferrero Pote - 140g", valor_unitario: 9.99, imagem:"nutella01.jpg"}, {nome_produto: "Creme de Avelã Nutella Ferrero Pote - 350g", valor_unitario: 21.42, imagem:"nutella02.jpg"} ]  },
    { id_categoria: 4, nome: "Eletrônicos", imagem:"eletronicos.png", produtos: [ {nome_produto: "Smartphone Motorola One Macro Azul Espacial 64GB, Tela Max Vision de 6.2, Câmera Traseira Tripla, Android 9.0", valor_unitario: 1299, imagem:"motorola-one.jpg"}, {nome_produto: "Monitor LED 15.6 Widescreen", valor_unitario: 324.85, imagem:"monitor-lcd.jpg"}, {nome_produto: "iPhone XR Apple Preto 128GB, Tela Retina LCD 6,1, iOS 12, Câmera Traseira 12MP", valor_unitario: 3.799, imagem:"iphone-xr.jpg"}, { nome_produto: "Smartphone Samsung Galaxy A30s Branco 64GB RAM, Tela Infinita", valor_unitario: 1.499, imagem:"samsung-galaxy.jpg"} ]  },
    { id_categoria: 12, nome: "Infantil", imagem:"infantil.png", produtos: [ {nome_produto: null, valor_unitario: null, imagem:"doces.png"}, {nome_produto: "", valor_unitario: null, imagem:"doces.png"}, {nome_produto: "", valor_unitario: 0}, {} ]  },
    { id_categoria: 5, nome: "Limpeza", imagem:"limpeza.png", produtos: [ {nome_produto: "Semente Soja", valor_unitario: 10.2, imagem:"doces.png"}, {nome_produto: "Achocolatado Toddy", valor_unitario: 8.9, imagem:"doces.png"}, {nome_produto: "Semente Soja", valor_unitario: 10.7, imagem:"doces.png"}, {} ]  },
    { id_categoria: 2, nome: "Laticínios", imagem:"laticinios.png", produtos: [ {nome_produto: "GLI 720", valor_unitario: 3.4, imagem:"doces.png"}, {nome_produto: "Pão francês", valor_unitario: 3.4, imagem:"doces.png"}, {nome_produto: "Linguiça Calabresa", valor_unitario: 7.7, imagem:"doces.png"}, {} ]  },
    { id_categoria: 8, nome: "Frutas", imagem:"frutas.png", produtos: [ {nome_produto: "Soja Integrada", valor_unitario: 10.2, imagem:"doces.png"}, {nome_produto: "Linguiça Calabresa", valor_unitario: 15.6, imagem:"doces.png"}, {nome_produto: "Semente Soja", valor_unitario: 3.4, imagem:"doces.png"} ]  },
    { id_categoria: 7, nome: "Pets", imagem:"Pets.png", produtos: [ {nome_produto: "Preço Milho", valor_unitario: 8.9, imagem:"doces.png"}, {nome_produto: "Semente Soja", valor_unitario: 3.4, imagem:"doces.png"}, {nome_produto: "Semente Soja", valor_unitario: 3.4, imagem:"doces.png"}, {} ]  },
    { id_categoria: 3, nome: "Salgadinhos", imagem:"salgadinhos.png", produtos: [ {nome_produto: "Salgadinho Batata Ruffles Original 300g", valor_unitario: 18.2, imagem:"ruffles.png"}, {nome_produto: "Salgadinho Sabor Requeijão Cheetos Onda 45g", valor_unitario: 3.2, imagem:"cheetos01.jpg"}, {nome_produto: "Salgadinho Sabor Queijo Cheddar Cheetos Tubo 45g", valor_unitario: 3.2, imagem:"cheetos02.jpg"}, {nome_produto: "Salgadinho de Queijo Nacho Doritos 167g", valor_unitario: 9.99, imagem:"doritos.jpg"}, {nome_produto: "Salgadinho de Milho Presunto Fandangos 45g", valor_unitario: 2.99, imagem:"fandangos.png"}, {nome_produto:"Salgadinho De Milho Elma Chips Cebolitos 110g", valor_unitario: 7.69, imagem: "cebolitos.jpg"} ]  },

  ]

  public lista_fazer: any = [
    { id_lista: 4, descricao: "Churrasco", data: "2020-05-22", finalizada: false, produtos: [ {nome_produto: "Coxão duro", valor_unitario: 15.6}, {nome_produto: "Pão de Alho", valor_unitario: 3.4}, {nome_produto: "Pão francês", valor_unitario: 5.4}, {nome_produto: "Sobre coxa", valor_unitario: 15.2} ]  } 
  ]

  public lista_finalizada: any = [
    { id_lista: 4, descricao: "Churras", data: "2020-05-23", finalizada: true, produtos: [ {nome_produto: "Coxão duro", valor_unitario: 15.6}, {nome_produto: "Pão de Alho", valor_unitario: 3.4}, {nome_produto: "Pão francês", valor_unitario: 5.4}, {nome_produto: "Sobre coxa", valor_unitario: 15.2} ]  },
    { id_lista: 8, descricao: "", data: "2020-06-27", finalizada: true, produtos: [ {nome_produto: "Semente Soja", valor_unitario: 10.2}, {nome_produto: "Achocolatado Toddy", valor_unitario: 8.9}, {nome_produto: "Semente Soja", valor_unitario: 10.7}, {} ]  },
    { id_lista: 9, descricao: "Para a mãe", data: "2020-07-23", finalizada: true, produtos: [ {nome_produto: "GLI 720", valor_unitario: 3.4}, {nome_produto: "Pão francês", valor_unitario: 3.4}, {nome_produto: "Linguiça Calabresa", valor_unitario: 7.7}, {} ]  }
  ]

  public estabelecimentos: any = [
    {nome_estabelecimento: "Mercado Extra", imagem: null, endereco: "Rua Adão Mariano Gomes, 234", distancia: 3.1}, 
    {nome_estabelecimento: "Mercado Carrefour", imagem: null, endereco: "Travessa Zilma Martins, 463", distancia: 4.3}, 
    {nome_estabelecimento: "Mercado BIG", imagem: null, endereco: "Rua Antônio M. Arruda, 276", distancia: 1.61}, 
    {nome_estabelecimento: "Mercado Tenda", imagem: null, endereco: "Rua Dom Pedro II, 1609", distancia: 6.2}
  ]

  // public produtos_gastos: any = {
  //   iduser: 10, email: "email@gmail.com",
  //   meses: [
  //     {
  //       id: 1,
  //       mes_descricao: "Novembro",
  //       ano: 2019,
  //       produtos: [
  //         { id: 1, data_emissao: "2020-05-17T00:00:00.000Z", categoria: "Sementes", valor_unit: 4.2, qtd: 300, unidade: "kg", descricao: "Semente de Soja RR - Terceiros", valor_total: 10200, tipo: 1, tipo_descricao: "gasto" },
  //         { id: 2, data_emissao: "2020-09-26T00:00:00.000Z", categoria: "Inseticida", valor_unit: 3.2, qtd: 300, unidade: "kg", descricao: "GLI-UP 720 WG C/05 kg", valor_total: 8499, tipo: 1, tipo_descricao: "gasto" },
  //         { id: 3, data_emissao: "2021-06-10T00:00:00.000Z", categoria: "Festicida", valor_unit: 3, qtd: 300, unidade: "kg", descricao: "Pesticida 8319 J&L", valor_total: 5988, tipo: 1, tipo_descricao: "gasto" }
  //       ]
  //     },
  //     {
  //       id: 2,
  //       mes_descricao: "Outubro",
  //       ano: 2019,
  //       produtos: [
  //         { id: 5, data_emissao: "2020-04-10T00:00:00.000Z", categoria: "Sementes", valor_unit: 18.2, qtd: 30, unidade: "saca", descricao: "Semente de Feijão", valor_total: 5988, tipo: 0, tipo_descricao: "gasto" },
  //         { id: 6, data_emissao: "2020-08-26T00:00:00.000Z", categoria: "Inseticida", valor_unit: 2.4, qtd: 200, unidade: "kg", descricao: "LOPE 99 C/05 kg", valor_total: 2499, tipo: 0, tipo_descricao: "gasto" }
  //       ]
  //     }
  //   ]
  // };

  public ofertas: any = [
    { idoferta: 1, produto: "Achocolatado Toddy 2kg", valor: 25, estabelecimento: "Mercado Extra", cidade: "São José dos Campos", bairro: "Colinas", localizacao: null, distancia: 3, data_insercao: "2020-06-27T00:00:00.000Z", valido_ate: "2020-08-17T00:00:00.000Z", status: 1,  imagem: null, estado: "Válida" },
    { idoferta: 2, produto: "Sabonete Dove 100g", valor: 6, estabelecimento: "Mercado Carrefour", cidade: "São José dos Campos", bairro: "Colinas", localizacao: null, distancia: 4, data_insercao: "2020-06-17T00:00:00.000Z", valido_ate: "2020-06-30T00:00:00.000Z", status: 1, imagem: null, estado: "Próxima do fim" },
    { idoferta: 9, produto: "Achocolatado Prestígio 250g", valor: 14.5, estabelecimento: "Mercado Extra", cidade: "São José dos Campos", bairro: "Jardim Oswaldo Cruz", localizacao: null, distancia: 3.7, data_insercao: "2020-06-12T00:00:00.000Z", valido_ate: "2020-06-17T00:00:00.000Z", status: 1, imagem: null, estado: "Válida" }];

  public ofertas_favoritadas: any = [
      { idoferta: 2, produto: "Sabonete Dove 100g", valor: 6, estabelecimento: "Mercado Carrefour", cidade: "São José dos Campos", bairro: "Colinas", localizacao: null, distancia: 4, data_insercao: "2020-06-17T00:00:00.000Z", valido_ate: "2020-06-30T00:00:00.000Z", status: 1, imagem: null, estado: "Próxima do fim" },
      { idoferta: 9, produto: "Achocolatado Prestígio 250g", valor: 14.5, estabelecimento: "Mercado Extra", cidade: "São José dos Campos", bairro: "Jardim Oswaldo Cruz", localizacao: null, distancia: 3.7, data_insercao: "2020-06-12T00:00:00.000Z", valido_ate: "2020-06-17T00:00:00.000Z", status: 1, imagem: "default-product.png", estado: "Válida" }];
  
    public itens_nota: any = [
    { id_nota: 4, nome_produto: "Semente de Soja BMX Potência RR - Terceiros", qtd: 300, unity: "kg", valor_unitario: 3.4 },
    { id_nota: 8, nome_produto: "Semente de Soja BMX Potência RR - Terceiros", qtd: 300, unity: "kg", valor_unitario: 3.4 },
    { id_nota: 8, nome_produto: "GLI-UP 720 WG C/05 kg", qtd: 300, unity: "kg", valor_unitario: 3.4 },
    { id_nota: 8, nome_produto: "Soja Integrada", qtd: 300, unity: "kg", valor_unitario: 3.4 },
    { id_nota: 8, nome_produto: "Comp. Preço Milho - Insutria", qtd: 300, unity: "kg", valor_unitario: 3.4 }
  ]
  
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
