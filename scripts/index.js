checkIsLogged()

var beerFlavor, beerType, marketType, maxPrice

$(document).ready(() => {
  beerFlavor = ''
  beerType = 0
  marketType = 0
  maxPrice = 150
  filter()
  getProducts()
})

function filter() {
  $('#select_brands').change((event) => {
    $( "#select_brands option:selected").each(function() {
      beerType = $(this).val()
      getProducts()
    });
  })

  $('#select_markets').change(() => {
    $( "#select_markets option:selected").each(function() {
      marketType = $(this).val()
      getProducts()
    });
  })

  $('#price_range').change(function(){
    maxPrice = $(this).val()
    getProducts()
  });

  $('#flavor').find('img').click((event) => {
    beerFlavor = event.target.getAttribute('value')
    getProducts()
  })
}

function getProducts () {
  // Load products from db
  let products = db
  let productsEl = $("#products")
  productsEl.html('')
  let productsFilter = products.filter((element) => {
    return element.preco <= maxPrice
  })
  productsFilter.forEach(function(element) {
    let markets = element.mercados.filter((element) => {
      return element.type == marketType
    })
    if (
      element.type == beerType && marketType == 0 && beerFlavor == 0 || // Lista pela marca da cerveja
      element.type == beerType && marketType == 0 && element.flavor == beerFlavor || // List pela marca e pelo sabor
      element.type == beerType && markets.length > 0 && beerFlavor == 0 || // List pela marca e pelo mercado
      element.type == beerType && marketType.length > 0 && element.flavor == beerFlavor || // Lista pela marca, mercado e sabor
      beerType == 0 && markets.length > 0 && beerFlavor == 0 || // Lista pelo mercado
      beerType == 0 && markets.length > 0 && element.flavor == beerFlavor || // List pelo mercado e sabor
      beerType == 0 && marketType == 0 && element.flavor == beerFlavor || // Lista pelo sabor
      beerType == 0 && marketType == 0 && beerFlavor == '' // Mostra todas
      ) {
      let item = `<div class="col-3" id="product-item#${element.id}">` +
        `<div class="card mb-4">` +
          `<img style="max-height:440px" src="${element.img}" class="card-img-top" alt="...">` +
          `<div class="card-body">` +
            `<h5 class="card-title">${element.nome}</h5>` +
            `<p class="card-text">R$${element.preco}</p>` +
            `<a href="product.html?id=${element.id}" class="btn btn-primary">SAIBA MAIS</a>` +
          `</div>` +
        `</div>` +
      `</div>`
      productsEl.append(item)
    }
  })
}