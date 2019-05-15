$(document).ready(function() {
  init()
})

function init() {
  register()
}

function register() {
  $('#submit').click(function(e) {
    e.preventDefault();

    let form = $('#register')
    let formContext = form.children()

    let name = formContext.children().children('#name').val()
    let password = formContext.children().children("#password").val()
    let email = formContext.children("#email").val()
    let birth = formContext.children("#birth").val()

    let user = {
      name: name,
      email: email,
      password: password,
      birth: birth
    }
    localStorage.setItem('users', JSON.stringify(user))

  })
}