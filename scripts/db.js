var db = JSON.parse(localStorage.getItem('produtos'))

if (!db) {
  dbFake = [
    {
      id: 1,
      nome: 'Brewing',
      preco: 15.00,
      img: 'imagens/brewing.webp',
      type: 1,
      flavor: 0,
      mercados: [
        {
          id: 1,
          nome: 'Supernosso',
          type: 3,
          preco: 10.00,
          img: 'imagens/supernosso.png'
        }
      ]
    },
    {
      id: 2,
      nome: 'Eisenbahn',
      preco: 125.00,
      img: 'imagens/cerveja1.webp',
      type: 2,
      flavor: 0,
      mercados: [
        {
          id: 1,
          nome: 'Epa',
          type: 2,
        }
      ]
    },
    {
      id: 3,
      nome: 'Damata',
      preco: 50.00,
      img: 'imagens/hells.webp',
      type: 2,
      flavor: 2,
      mercados: [
        {
          id: 1,
          nome: 'Epa',
          type: 3,
        }
      ]
    }
  ]
  db = dbFake
  //localStorage.setItem('produtos', JSON.stringify(dbFake))
}