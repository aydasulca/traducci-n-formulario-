function translate(){
  var title = document.getElementById("form-signin-heading");
  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");
  var remember = document.getElementsByTagName("span")[0];
  var button = document.getElementsByClassName("btn")[0];

  title.innerHTML = "Por favor inicia sesión";
  password.placeholder = "Contraseña";
  email.placeholder = "Correo Electronico";
  remember.innerHTML = "Recordar datos";
  button.innerHTML = "Iniciar sesión";
}
translate();

function mensaje(){
  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;
document.getElementById("mostrarResultado").innerHTML = "Datos del formulario:<br>" +
"El correo electrónico ingresado es:<br>"+ email +"<br>"+"La clave ingresada es:<br>"+
password;
}
