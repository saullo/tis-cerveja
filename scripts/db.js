$(document).ready(function() {
  init()
})

var dbfake = {
  "produtos": [
    {
      "id": 1,
      "nome": "Eisenbahn Pilsen Long Neck",
      "marca": "Eisenbahn",
      "img": "imagens/cerveja1.webp",
      "preco": "13,00",
      "mercados": [
        {
          "id": 1,
          "mercado": "Epa",
          "img": "imagens/abc.png",
          "preco": "13,00"
        },
        {
          "id": 2,
          "mercado": "Extra",
          "img": "imagens/extra.jpg",
          "preco": "13,45"
        },
        {
          "id": 3,
          "mercado": "Supermercado Bh",
          "img": "imagens/bh.jpg",
          "preco": "13,50"
        },
        {
          "id": 4,
          "mercado": "Dia",
          "img": "imagens/dia.png",
          "preco": "13,55"
        },
        {
          "id": 5,
          "mercado": "Supernosso",
          "img": "imagens/supernosso.png",
          "preco": "13,60"
        }
      ]
    },
    {
      "id": 2,
      "nome": "Backer",
      "marca": "Cevejaria Backer",
      "img": "imagens/backer.png",
      "preco": "7,00",
      "mercados": [
        {
          "id": 1,
          "mercado": "Epa",
          "img": "imagens/abc.png",
          "preco": "13,00"
        },
        {
          "id": 2,
          "mercado": "Extra",
          "img": "imagens/extra.jpg",
          "preco": "13,45"
        },
        {
          "id": 3,
          "mercado": "Supermercado Bh",
          "img": "imagens/bh.jpg",
          "preco": "13,50"
        },
        {
          "id": 4,
          "mercado": "Dia",
          "img": "imagens/dia.png",
          "preco": "13,55"
        },
        {
          "id": 5,
          "mercado": "supernosso",
          "img": "imagens/supernosso.png",
          "preco": "13,60"
        }
      ]
    },
    {
      "id": 3,
      "nome": "Damata",
      "marca": "munich helles",
      "img": "imagens/hells.webp",
      "preco": "16,00",
      "mercados": [
        {
          "id": 1,
          "mercado": "Epa",
          "img": "imagens/abc.png",
          "preco": "43,00"
        },
        {
          "id": 2,
          "mercado": "Extra",
          "img": "imagens/extra.jpg",
          "preco": "13,45"
        },
        {
          "id": 3,
          "mercado": "Supermercado Bh",
          "img": "imagens/bh.jpg",
          "preco": "13,50"
        },
        {
          "id": 4,
          "mercado": "Dia",
          "img": "imagens/dia.png",
          "preco": "13,55"
        },
        {
          "id": 5,
          "mercado": "supernosso",
          "img": "imagens/supernosso.png",
          "preco": "13,60"
        }
      ]
    },
    {
      "id": 4,
      "nome": "Brewing",
      "marca": "Ceverjaria Brewing",
      "img": "imagens/brewing.webp",
      "preco": "14,00",
      "mercados": [
        {
          "id": 1,
          "mercado": "Epa",
          "img": "imagens/abc.png",
          "preco": "13,00"
        },
        {
          "id": 2,
          "mercado": "Extra",
          "img": "imagens/extra.jpg",
          "preco": "13,45"
        },
        {
          "id": 3,
          "mercado": "Supermercado Bh",
          "img": "imagens/bh.jpg",
          "preco": "13,50"
        },
        {
          "id": 4,
          "mercado": "Dia",
          "img": "imagens/dia.png",
          "preco": "13,55"
        },
        {
          "id": 5,
          "mercado": "supernosso",
          "img": "imagens/supernosso.png",
          "preco": "13,60"
        }
      ]
    }
  ],
}

var db = JSON.parse(localStorage.getItem('db'));
if (!db) {
  db = dbfake;
};

function init() {
}

function adiciona() {
  
}

function edita() {

}

function remove() {

}