'use strict';

const IngresarContrasena = (update) => {
  const container = $('<div class="container size"></div>');
  const question = $('<div class="question"><img src="img/icons/question.png" class="right"/></div>');
  const volver = $('<div class="left">Volver</div>');
  const portada = $('<div class="center-align"><img src="img/icons/bcp-logo.png"/ class="responsive-img width-logo "></div>');
  const textPortada = $('<h5 class="title-portada">Ingresa la clave de tu tarjeta</h5><span class="tex-gris">Tarjeta <strong>*****'+state.tarjeta.substr(-3)+'</strong></span>');
  const divInput = $('<div class="box-lock relative"></div>');
  const icon = $('<img src="img/icons/lock.png" class="icon-lock2 absolute"/>');
  const input = $('<input type="password" class="center-align col s12" maxlength="4">');
  const divButton = $('<div class="center-align btn-end"></div>');
  const button = $('<button class="btn disabled btn-orange">REGISTRAR</button>');

  portada.append(textPortada);
  container.append(portada);
  divInput.append(input);
  divInput.append(icon);
  container.append(divInput);
  divButton.append(button);
  container.append(divButton);

  input.keypress(numeros);
  alert(state.tarjeta.substr(0, state.tarjeta.length-3));

  input.on('click', ()=>{
    if (input.val != "") {
      button.removeClass("disabled");
    } else {
      button.addClass("disabled");
    }
  });

  button.on('click', () =>{
    $.post("api/registerCard",
    {phone : state.telefono,
      cardNumber : state.tarjeta,
      cardMonth: state.cardMes,
      cardYear : state.cardAño,
      cardPassword : input.val()},
      function(result) {
        state.cardPassword = input.val();
        state.step = 7;
        console.log(result);
          update();
        });
      });
  return container;
}
