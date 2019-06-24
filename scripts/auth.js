function checkIsLogged() {
  let user = JSON.parse(localStorage.getItem('user'))
  if (user == null || user == 'undefined') {
    window.location = 'login.html'
  }
}

function register(name, email, password, birth) {
  let oldUsers = JSON.parse(localStorage.getItem('users'))
  let users = []
  let user = {
    name: name,
    email: email,
    password: password,
    birth: birth
  }
  users.push(user)
  if (oldUsers != null) {
    oldUsers.forEach((element) => {
      users.push(element)
    })
  }
  localStorage.setItem('users', JSON.stringify(users))
  window.location = 'login.html'
}

function login(email, password, persistence) {
  let users = JSON.parse(localStorage.getItem('users'))
  if (users != null) {
    users.forEach((element) => {
      if (element.email == email && element.password == password) {
        if (persistence) localStorage.setItem('user', JSON.stringify(element))
        else sessionStorage.setItem('user', JSON.stringify(element))
        window.location = 'index.html'
      }
    })
  } else {
    window.location = 'register.html'
  }
}

function checkName(name, nameError) {
  if (name == '' || name == 'undefined' || name == null) {
    nameError.html('O campo nome é obrigatorio')
    return false
  } else {
    nameError.html('')
    return true
  }
}

function checkBirth(birth, birthError) {
  if (birth == '' || birth == 'undefined' || birth == null) {
    birthError.html('O campo data de nascimento é obrigatorio')
    return false
  } else {
    birthError.html('')
    return true
  }
}

function checkEmail(email, emailError) {
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (email == '' || email == 'undefined' || email == null) {
    emailError.html('Um email é obrigatorio')
    return false
  } else if (!regex.test(email)) {
    emailError.html('Email não é valido')
    return false
  } else {
    emailError.html('')
    return true
  }
}

function checkPassword(password, passwordError) {
  if (password == null || password == 'undefined' || password == '') {
    passwordError.html('O campo senha é obrigatorio')
    return false
  } else if (password < 6) {
    passwordError.html('Sua senha deve conter 6 digitos')
    return false
  } else {
    passwordError.html('')
    return true
  }
}