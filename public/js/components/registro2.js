const Registro = (update) =>{
  const container = $('<div class="container"></div>');
  const portada = $('<div class="center-align"><img src="img/icons/lockone.png"/ class="responsive-img logo-registro3"></div>');
  const textPortada = $('<h5>Crea tu usuario Yape</h5><span>Ingresa un nombre, email y clave de usuario.</span>');
  const divInput1 = $('<div class="box-input3"></div>');
  const icon1 = $('<img src="img/icons/user.png" class="icon-user"/>');
  const inputName = $('<input type="text" class="center-align col s12 name" placeholder="Nombre">');
  const divInput2 = $('<div class="box-input3"></div>');
  const icon2 = $('<img src="img/icons/message-gray.png" class="icon-send"/>');
  const inputCorreo = $('<input type="email" class="center-align col s12 email validate" placeholder="correo@ejemplo.com">');
  const divInput3 = $('<div class="box-input3"></div>');
  const icon3 = $('<img src="img/icons/lock.png" class="icon-lock"/>');
  const inputClave = $('<input type="password" class="center-align col s12 password" placeholder="Ingresa clave de 6 dígitos">');
  const textClave = $('<span>Cuida esta clave como oro, es tu acceso a Yape</span>');
  const divButton = $('<div class="center-align"></div>');
  const button = $('<button class="btn disabled">CREAR CUENTA</button>');

  portada.append(textPortada);
  divInput1.append(icon1);
  divInput1.append(inputName);
  divInput2.append(icon2);
  divInput2.append(inputCorreo);
  divInput3.append(icon3);
  divInput3.append(inputClave);
  divInput3.append(textClave);
  divButton.append(button);
  container.append(portada);
  container.append(divInput1);
  container.append(divInput2);
  container.append(divInput3);
  container.append(divButton);

  inputName.keypress(letras);

  button.on('click',()=>{
    $.post("api/createUser",
    {phone : state.telefono,
      name : inputName.val(),
      email: inputCorreo.val(),
      password : inputClave.val()},
      function(result) {
        // if (result.success != "false") {
        //   state.code = result.data.code;
        //   update();
          console.log(state.code);
        });
      });


  return container;
}
