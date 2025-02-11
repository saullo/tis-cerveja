checkIsLogged()

$(document).ready(function() {
  init()
})

var markets = []
var product = {}

function init() {
  // Get product from db by query in url
  getProduct()
  // Show the product
  showProduct()
  // Show the top markets of product
  showTopMarkets()
  // Show all the markets of product
  showMarkets()
}

function getProduct() {
  // Load products from db
  let products = db
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
    initMarkets(cardAtual, element)

    mercado.append(cardAtual)
  })
  mercadoCard.hide()
}

function initMarkets(cardAtual, element) {
  let title = cardAtual.children().children('#title')
  let preco = cardAtual.children().children('#preco')
  let imagem = cardAtual.children('#imagem')
  let local = cardAtual.children().children('#local')

  title.html(element.nome)
  preco.html(`R$${element.preco}`)
  imagem.attr('src', element.img)
  
  local.click(() => {
    $('#modal').modal('show')
    initMap(element.type)
  })

  $('#modal').on('hidden.bs.modal', function (e) {
    $('#map').html('')
  })
}

function showTopMarkets(items) {
  let mercado = $("#mercado-precos")
  let mercadoCard = $("#mercado-precos-card")

  //markets.sorter();

  markets.slice(0, 2).forEach(function(element) {
    let cardAtual = mercadoCard.clone()
    initMarkets(cardAtual, element)

    mercado.append(cardAtual)
  })
  mercadoCard.hide()
}