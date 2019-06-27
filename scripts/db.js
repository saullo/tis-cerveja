var db = JSON.parse(localStorage.getItem('produtos'))

if (!db) {
  dbFake = [
    {
      id: 1,
      nome: 'EISENBAHN PILSEN 355ML',
      preco: 3.29,
      img: 'https://www.supernossoemcasa.com.br/e-commerce/api/doc/produto/176420/img/main_image/0/176420_430.jpg?width=800&height=800',
      type: 1,
      flavor: 1,
      marca: 'EISENBAHN',
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 3.29,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 3.50,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 4.79,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 4.20,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 4.50,
          img: 'imagens/epa.png'
        },
      ]
    },
    {
      id: 2,
      nome: 'EISENBAHN PALE LONG NECK 355ML',
      preco: 4.99,
      img: 'https://www.sondadelivery.com.br/img.aspx/sku/1247263/530/1247263.jpg',
      type: 1,
      flavor: 3,
      marca: 'EISENBAHN',
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 4.99,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 7.26,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 6.70,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 6.25,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 7.30,
          img: 'imagens/epa.png'
        },
      ]
    },
    {
      id: 3,
      nome: 'EISENBAHN PILSEN 600ML',
      preco: 6.20,
      img: 'https://www.supernossoemcasa.com.br/e-commerce/api/doc/produto/176420/img/main_image/0/176420_430.jpg?width=800&height=800',
      type: 1,
      flavor: 4,
      marca: 'EISENBAHN',
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 6.49,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 6.20,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 7.20,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 6.80,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 6.95,
          img: 'imagens/epa.png'
        },
      ]
    },
    {
      id: 4,
      nome: 'BACKER Capitão Senra Long Neck 355ml',
      preco: 5.99,
      img: 'https://holmes.com.br/clientes/backer/imagens/cervejas/grande/BACKER-CAPITAO-SENRA.png',
      type: 2,
      flavor: 6,
      marca: 'EISENBAHN',
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 5.99,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 7.20,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 10.39,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 6.99,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 6.50,
          img: 'imagens/epa.png'
        },
      ]
    },
    {
      id: 5,
      nome: 'BACKER Julieta Fruit Bier 600ml',
      preco: 21.90,
      img: 'https://images.tcdn.com.br/img/img_prod/657582/cerveja_backer_julieta_600_ml_165_1_20190327160638.jpg',
      type: 2,
      marca: 'BACKER',
      flavor: 2,
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 21.90,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 25.00,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 28.50,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 24.50,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 29.90,
          img: 'imagens/epa.png'
        },
      ]
    },
    {
      id: 6,
      nome: 'BACKER Belorizontina Long Neck 355ml',
      preco: 3.50,
      img: 'https://apoioentrega.vteximg.com.br/arquivos/ids/443889-1000-1000/194365.jpg?v=636861918424870000',
      type: 2,
      marca: 'BACKER',
      flavor: 5,
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 3.99,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 5.00,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 5.50,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 3.50,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 4.50,
          img: 'imagens/epa.png'
        },
      ]
    },
    {
      id: 7,
      nome: 'BACKER Las Mafiosas Tommy Gun Double Ipa 600ml',
      preco: 13.50,
      img: 'https://www.supernossoemcasa.com.br/e-commerce/api/doc/produto/178436/img/main_image/0/178436.jpg?width=800&height=800',
      type: 2,
      marca: 'BACKER',
      flavor: 2,
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 14.99,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 13.50,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 16.00,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 17.00,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 13.99,
          img: 'imagens/epa.png'
        },
      ]
    },
    {
      id: 8,
      nome: 'BACKER Pilsen Garrafa 600ml',
      preco: 5.90,
      img: 'https://www.supernossoemcasa.com.br/e-commerce/api/doc/produto/132316/img/main_image/0/132316_430.jpg?width=800&height=800',
      type: 2,
      marca: 'BACKER',
      flavor: 4,
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 7.90,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 5.90,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 9.50,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 7.50,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 8.25,
          img: 'imagens/epa.png'
        },
      ]
    },
    {
      id: 9,
      nome: 'BACKER Pale Ale Garrafa 600ml',
      preco: 10.39,
      img: 'https://apoioentrega.vteximg.com.br/arquivos/ids/427191-1000-1000/135497.jpg?v=636619378863500000',
      type: 2,
      marca: 'BACKER',
      flavor: 3,
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 10.99,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 11.50,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 10.39,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 10.60,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 13.00,
          img: 'imagens/epa.png'
        },
      ]
    },
    {
      id: 10,
      nome: 'BACKER Tres Lobos Exterminador Wheat Bear 600ml',
      preco: 12.00,
      img: 'https://thebeerplanet.vteximg.com.br/arquivos/ids/433483-1000-1000/Cerveja-Tres-Lobos-Exterminador-de-Trigo-600ml.jpg?v=636735382842800000',
      type: 2,
      marca: 'BACKER',
      flavor: 1,
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 13.90,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 15.00,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 12.00,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 13.50,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 12.50,
          img: 'imagens/epa.png'
        },
      ]
    },
    {
      id: 11,
      nome: 'X-WALS Pilsen Garrafa 600ml',
      preco: 7.10,
      img: 'https://apoioentrega.vteximg.com.br/arquivos/ids/428527-1000-1000/141336.jpg?v=636619412272900000',
      type: 3,
      marca: 'WALS',
      flavor: 2,
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 7.80,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 7.50,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 7.30,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 7.25,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 7.10,
          img: 'imagens/epa.png'
        },
      ]
    },
    {
      id: 12,
      nome: 'WALS Super Nossa Vienna Lager 600ml',
      preco: 6.00,
      img: 'https://www.supernossoemcasa.com.br/e-commerce/api/doc/produto/190690/img/main_image/0/190690.jpg?width=800&height=800',
      type: 3,
      marca: 'WALS',
      flavor: 3,
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 9.99,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 6.00,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 7.00,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 8.00,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 9.50,
          img: 'imagens/epa.png'
        },
      ]
    },
    {
      id: 13,
      nome: 'WALS Witte Trigo 600ml',
      preco: 11.90,
      img: 'https://emporiodacerveja.vteximg.com.br/arquivos/ids/164712-1000-1000/Wals-Belgian-Witte-600ml.jpg?v=636274383323170000',
      type: 3,
      marca: 'WALS',
      flavor: 3,
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 11.90,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 13.20,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 14.00,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 12.50,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 13.50,
          img: 'imagens/epa.png'
        },
      ]
    },
    {
      id: 14,
      nome: 'WALS Niobium Long Neck 375ml',
      preco: 15.99,
      img: 'https://www.supernossoemcasa.com.br/e-commerce/api/doc/produto/160463/img/main_image/0/160463_1.jpg?width=800&height=800',
      type: 3,
      marca: 'WALS',
      flavor: 5,
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 15.99,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 16.50,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 16.20,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 16.35,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 17.20,
          img: 'imagens/epa.png'
        },
      ]
    },
    {
      id: 15,
      nome: 'WALS Quadruppel Long Neck 375ml',
      preco: 15.99,
      img: 'https://www.supernossoemcasa.com.br/e-commerce/api/doc/produto/132327/img/main_image/0/132327.jpg?width=800&height=800',
      type: 3,
      marca: 'WALS',
      flavor: 4,
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 15.99,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 13.50,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 17.99,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 16.30,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 16.00,
          img: 'imagens/epa.png'
        },
      ]
    },
    {
      id: 16,
      nome: 'COLORADO Vixnu Imperial Ipa 600ml',
      preco: 14.50,
      img: 'https://http2.mlstatic.com/D_NQ_NP_694315-MLB26931011857_022018-O.jpg',
      type: 4,
      marca: 'COLORADO',
      flavor: 2,
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 16.90,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 17.25,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 14.50,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 16.25,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 17.20,
          img: 'imagens/epa.png'
        },
      ]
    },
    {
      id: 17,
      nome: 'COLORADO Cauim Garrafa 600ml',
      preco: 5.50,
      img: 'https://a-static.mlcdn.com.br/618x463/cerveja-colorado-appia-600ml/emporio-da-cerveja/26/1585f47f82ddd29090c485b676ff8189.jpg',
      type: 4,
      marca: 'COLORADO',
      flavor: 2,
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 9.90,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 7.49,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 5.50,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 6.90,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 7.70,
          img: 'imagens/epa.png'
        },
      ]
    },
    {
      id: 18,
      nome: 'COLORADO Demoiselle Garrafa 600ml',
      preco: 13.50,
      img: 'https://emporiodacerveja.vteximg.com.br/arquivos/ids/169377-1000-1000/ColoradoDemoiselle1000x1000.jpg?v=636538052294430000',
      type: 4,
      marca: 'COLORADO',
      flavor: 6,
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 16.20,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 15.70,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 13.50,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 20.30,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 21.60,
          img: 'imagens/epa.png'
        },
      ]
    },
    {
      id: 19,
      nome: 'COLORADO Appia Weiss 300ml',
      preco: 6.99,
      img: 'https://www.paodeacucar.com/img/uploads/1/880/559880.jpg?type=product',
      type: 4,
      marca: 'COLORADO',
      flavor: 1,
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 7.90,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 7.49,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 6.99,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 7.20,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 7.99,
          img: 'imagens/epa.png'
        },
      ]
    },
    {
      id: 20,
      nome: 'KRUG Sarcasmo Bitter Garrafa 500mll',
      preco: 13.50,
      img: 'https://assets.xtechcommerce.com/uploads/images/medium/a01c1c65a78c5cfe0e8c1844423b5dad.jpg',
      type: 5,
      marca: 'KRUG',
      flavor: 6,
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 17.99,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 15.99,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 19.50,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 13.50,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 20.00,
          img: 'imagens/epa.png'
        },
      ]
    },
    {
      id: 21,
      nome: 'Áustria Lager Pilsen 355ml',
      preco: 3.99,
      img: 'https://images-americanas.b2w.io/produtos/01/00/oferta/58680/9/58680930_1GG.jpg',
      type: 5,
      marca: 'KRUG',
      flavor: 2,
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 3.99,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 4.50,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 4.50,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 5.30,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 6.20,
          img: 'imagens/epa.png'
        },
      ]
    },
    {
      id: 22,
      nome: 'KRUG Skank Pilsen 500ml',
      preco: 10.50,
      img: 'https://www.supernossoemcasa.com.br/e-commerce/api/doc/produto/178414/img/main_image/0/178414.jpg?width=800&height=800',
      type: 5,
      marca: 'KRUG',
      flavor: 1,
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 12.79,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 17.20,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 16.99,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 15.40,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 10.50,
          img: 'imagens/epa.png'
        },
      ]
    },
    {
      id: 23,
      nome: 'KRUG Inocencia tripel Garrafa 500ml',
      preco: 12.50,
      img: 'https://a-static.mlcdn.com.br/1500x1500/cerveja-krug-inocencia-tripel-garrafa-500-ml/lojainfomix/apoio-5494/9a374a4d99aee673df31a9081bb68d4a.jpg',
      type: 5,
      marca: 'KRUG',
      flavor: 4,
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 13.98,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 19.50,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 17.90,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 12.50,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 15.99,
          img: 'imagens/epa.png'
        },
      ]
    },
    {
      id: 24,
      nome: 'KRUG Rancor Ipa Garrfa 500ml ',
      preco: 15.60,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDnZpqFnMnhkgQ-AltozYkq7UZKITp7V-K4Mt8gME6HltKIw1Q',
      type: 5,
      marca: 'KRUG',
      flavor: 5,
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 17.99,
          img: 'imagens/supernosso.png'
        },
        {
          id: 2,
          nome: 'Extra',
          type: 4,
          preco: 20.00,
          img: 'imagens/extra.jpg'
        },
        {
          id: 3,
          nome: 'ABC',
          type: 5,
          preco: 17.99,
          img: 'imagens/abc.png'
        },
        {
          id: 4,
          nome: 'Verdemar',
          type: 1,
          preco: 15.60,
          img: 'imagens/verdemar.jpg'
        },
        {
          id: 5,
          nome: 'Epa',
          type: 2,
          preco: 18.90,
          img: 'imagens/epa.png'
        },
      ]
    }
  ]
  db = dbFake
  console.log(db.length)
  //localStorage.setItem('produtos', JSON.stringify(dbFake))
}