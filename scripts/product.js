$(document).ready(function() {
  init()
})

function init() {
  var dbfake = {
    "mercados": [
      {
        "id": 1,
        "mercado": "ABC",
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
  // Caso exista no Local Storage, recupera os dados salvos
  var db = JSON.parse(localStorage.getItem('db'));
  if (!db) {
    db = dbfake
  };
  
  var items = db.mercados
  mercadoMelhor(items)
  mercadoPrecos(items)
}

function mercadoPrecos(items) {
  let mercado = $("#mercado")
  let mercadoCard = $('#mercado-card')
  items.forEach(function(element) {
    let cardAtual = mercadoCard.clone()
    let title = cardAtual.children().children('#title')
    let preco = cardAtual.children().children('#preco')
    let imagem = cardAtual.children('#imagem')

    title.html(element.mercado)
    preco.html(`R$${element.preco}`)
    imagem.attr('src', element.img)

    mercado.append(cardAtual)
  })
  mercadoCard.hide()
}

function mercadoMelhor(items) {
  let mercado = $("#mercado-precos")
  let mercadoCard = $("#mercado-precos-card")
  items.slice(0, 2).forEach(function(element) {
    let cardAtual = mercadoCard.clone()
    let title = cardAtual.children().children('#title')
    let preco = cardAtual.children().children('#preco')
    let imagem = cardAtual.children('#imagem')

    title.html(element.mercado)
    preco.html(`R$${element.preco}`)
    imagem.attr('src', element.img)

    mercado.append(cardAtual)
  })
  mercadoCard.hide()
}

function adiciona() {
  // Calcula novo Id a partir do último código existente no array
  let novoId = db.data[db.data.length - 1].id + 1;
  let novoContato = {
      "id": novoId,
      "nome": contato.nome,
      "email": contato.email,
      "telefone": contato.telefone,
      "website": contato.website
  };

  // Insere o novo objeto no array
  db.data.push(novoContato);
  displayMessage("Contato inserido com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem('db', JSON.stringify(db));
}

function edita() {

}

function remove() {

}