$(document).ready(function() {
  init()
})

var name, password, email, birth, checkbox

function init() {
  initVariables()
  initListeners()
}

function initVariables() {
  // Set all the variables
  let form = $('#login')
  let formContext = form.children()

  email = formContext.children("#email")
  password = formContext.children("#password")
}

function initListeners() {
  $('#submit').click(function(e) {
    e.preventDefault()
    validate()
  })
}

function validate() {
  if(!checkEmail() && !checkPassword() ) {
    login()
  }
}

function login() {
  const db = JSON.parse(localStorage.getItem('users'))
  console.log(db)

  if (db) {
    if (db.email != email[0].value) {
      let error = $('#error-email')
      error.html('O email não existe')
    } else if(db.password != password[0].value) {
      let error = $('#error-password')
      error.html('A senha está errada')
    } else {
      localStorage.setItem('isLogged', true)
      window.location.replace("index.html");
    }
  } else {
    let error = $('#error-email')
    error.html('Usuario não cadastrado')
  }
}

function checkPassword() {
  let error = $('#error-password')
  if (password[0].value == '') {
    error.html('A senha é obrigatoria')
    return true;
  } else if(password[0].value.length < 6) {
    error.html('A senha deve ter no minimo 6 digitos')
    return true;
  } else {
    error.html('')
    return false;
  }
}
function checkEmail() {
  let error = $('#error-email')
  if (email[0].value == '') {
    error.html('O email é obrigatorio')
    return true;
  } else {
    error.html('')
    return false;
  }
}