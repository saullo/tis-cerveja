$(document).ready(function() {
  init()
})

function init () {
  // Get all products
  getProducts()
}

function getProducts () {
  // Load products from db
  let products = db.produtos
  let productsEl = $("#products")
  let productItem = $("#product-item")
  products.forEach(function(element) {
    let item = productItem.clone()
    item.attr('id', `product-item#${element.id}`)

    let title = item.children().children('#title')
    let price = item.children().children('#price')
    let link = item.children().children("#link")
    let image = item.children('#image')

    title.html(element.nome)
    price.html(element.preco)
    link.attr('href', `produto.html?id=${element.id}`)
    image.attr('src', element.img)

    productsEl.append(item)
  })
  productItem.remove()
}