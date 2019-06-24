$(document).ready(() => {
  initForm()
})
var name, email, password, birth
var nameError, emailError, passwordError, birthError

function initForm() {
  let form = $('#register')

  form.submit((event) => {
    event.preventDefault()

    let formGroup = form.children()
    let formRow = form.children().children()

    name = formRow.children('#name').val()
    email = formGroup.children('#email')
    password = formRow.children('#password')
    birth = formGroup.children('#birth')

    nameError = formRow.children('#error-name')
    emailError = formGroup.children('#error-email')
    birthError = formGroup.children('#error-birth')
    passwordError = formRow.children('#error-password')

    if (validate()) {  
      register(name, email.val(), password.val(), birth.val())
    }
  })
}

function validate() {
  if (!checkName(name, nameError)) return false
  if (!checkBirth(birth.val(), birthError)) return false
  if (!checkEmail(email.val(), emailError)) return false
  if (!checkPassword(password.val(), passwordError)) return false
  return true
}

function mascaraData( campo, e )
{
	var kC = (document.all) ? event.keyCode : e.keyCode;
	var data = campo.value;
	
	if( kC!=8 && kC!=46 )
	{
		if( data.length==2 )
		{
			campo.value = data += '/';
		}
		else if( data.length==5 )
		{
			campo.value = data += '/';
		}
		else
			campo.value = data;
	}
}