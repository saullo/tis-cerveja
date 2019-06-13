$(document).ready(function() {
  init()
})

function init () {
  checkIfLogged()
  // Get all products
  getProducts()
}

function checkIfLogged() {
  let db = localStorage.getItem('isLogged')
  console.log(db)
  if (db == false || db == null) {
    window.location.replace('login.html')
  }
}

function getProducts () {
  // Load products from db
  let products = db.produtos
  let productsEl = $("#products")
  let productsE2 = $("#products2")
  let productItem = $("#product-item")
  products.forEach(function(element) {
    let item = productItem.clone()

    item.attr('id', `product-item#${element.id}`)
    item.attr('key', element.id)

    let itemGroup = item.children().children()
    
    let title = itemGroup.children('#title')
    let price = itemGroup.children('#price')
    let link = itemGroup.children("#link")
    let image = item.children().children('#image')

    title.html(element.nome)
    price.html(element.preco)
    link.attr('href', `produto.html?id=${element.id}`)
    image.attr('src', element.img)

    productsEl.append(item)
    //productsE2.append(item)
  })
  productItem.remove()
}