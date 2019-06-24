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
    if (element.type == beerType && marketType == 0 && beerFlavor == '' || 
      markets.length > 0 && element.type == beerType && element.flavor == beerFlavor || 
      beerType == 0 && marketType == 0 && beerFlavor == '' || 
      beerType == 0 &&  markets.length > 0 && element.flavor == beerFlavor ||
      beerType == 0 && marketType == 0 && element.flavor == beerFlavor) {
      let item = `<div class="col-3" id="product-item#${element.id}">` +
        `<div class="card">` +
          `<img src="${element.img}" class="card-img-top" alt="...">` +
          `<div class="card-body">` +
            `<h5 class="card-title">${element.nome}</h5>` +
            `<p class="card-text">${element.preco}</p>` +
            `<a href="product.html?id=${element.id}" class="btn btn-primary">SAIBA MAIS</a>` +
          `</div>` +
        `</div>` +
      `</div>`
      productsEl.append(item)
    }
  })
}