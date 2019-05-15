
$(document).ready(function() {
  init()
})

var markets = []
var product = {}

function init() {
  checkIfLogged()
  // Get product from db by query in url
  getProduct()
  // Show the product
  showProduct()
  // Show the top markets of product
  showTopMarkets()
  // Show all the markets of product
  showMarkets()
}

function checkIfLogged() {
  let db = localStorage.getItem('isLogged')
  console.log(db)
  if (db == false || db == null) {
    window.location.replace('login.html')
  }
}

function getProduct() {
  // Load products from db
  let products = db.produtos
  // Get url params
  let urlParams = new URLSearchParams(window.location.search);
  let id = urlParams.get('id')
  // Find the item in db
  products.forEach(function(element) {
    if (element.id == id) {
      product = element
      markets = product.mercados
    }
  })
}

function showProduct() {
  let image = $('#product-image')
  let title = $('#product-title')
  let desc = $('#product-desc')

  title.html(product.nome)
  desc.html(product.marca)
  image.attr('src', product.img)
}

function showMarkets() {
  let mercado = $("#mercado")
  let mercadoCard = $('#mercado-card')
  markets.forEach(function(element) {
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

function showTopMarkets(items) {
  let mercado = $("#mercado-precos")
  let mercadoCard = $("#mercado-precos-card")

  //markets.sorter();

  markets.slice(0, 2).forEach(function(element) {
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