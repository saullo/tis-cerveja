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
  let form = $('#register')
  let formContext = form.children()
  let formContextRow = formContext.children()

  name = formContextRow.children("#name")
  console.log(name)
  password = formContextRow.children("#password")
  checkbox = formContextRow.children("#checkbox")
  email = formContext.children("#email")
  birth = formContext.children("#birth")
}

function initListeners() {
  $('#submit').click(function(e) {
    e.preventDefault()
    validate()
  })
}

function validate() {
  if(!checkName() && !checkPassword() && !checkBirth() && !checkEmail() && !checkCheckbox()) {
    register()
  }
}

function register() {
  let user = {
    name: name[0].value,
    email: email[0].value,
    password: password[0].value,
    birth: birth[0].value
  }
  localStorage.setItem('users', JSON.stringify(user))
  window.location.replace("login.html");
}

function checkName() {
  let error = $('#error-name')
  console.log(name)
  if (name[0].value == '') {
    error.html('Nome é obrigatorio')
    return true;
  } else {
    error.html('')
    return false;
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

function checkBirth() {
  let error = $('#error-birth')
  if (birth[0].value == '') {
    error.html('A data de nascimento é obrigatoria')
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

function checkCheckbox() {
  let error = $('error-checkbox') 
  if (checkbox[0].checked == false) {
    error.html('Você precisa aceitar os termos')
    return true
  } else {
    return false
  }
}