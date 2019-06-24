$(document).ready(() => {
  initForm()
})

var email, password
var emailError, passwordError

function initForm() {
  let form = $('#login')

  form.submit((event) => {
    event.preventDefault()

    let formGroup = form.children()

    email = formGroup.children('#email')
    password = formGroup.children('#password')

    emailError = formGroup.children('#error-email')
    passwordError = formGroup.children('#error-password')

    if (validate()) {  
      login(email.val(), password.val())
    }
  })
}

function validate() {
  if (!checkEmail(email.val(), emailError)) return false
  if (!checkPassword(password.val(), passwordError)) return false
  return true
}