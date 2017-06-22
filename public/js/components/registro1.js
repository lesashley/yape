'use strict';

const RegCelular = (update) =>{
  const container = $('<div class="container size"></div>');
  const portada = $('<div class="center-align"><img src="img/icons/phone.png"/ class="responsive-img width-logo "></div>');
  const textPortada = $('<h5 class="title-portada">Para comenzar validemos tu número</h5><span class="tex-gris">Recibirás un SMS con un código de validación</span>');
  const divInput = $('<div class="box-input1 relative"></div>');
  const icon = $('<img src="img/icons/phoneandnumber.png" class="icon-input1 absolute"/>');
  const input = $('<input type="text" class="center-align col s12" maxlength="9">');
  const checkbox = $('<input type="checkbox" class="filled-in check" id="filled-in-box" value="true"/>');
  const label = $('<label for="filled-in-box">Acepto los <a>Terminos y condiciones</a></label>');
  const divButton = $('<div class="center-align btn-end"></div>');
  const button = $('<button class="btn disabled btn-orange">Continuar</button>');

  portada.append(textPortada);
  container.append(portada);
  divInput.append(input);
  divInput.append(icon);
  container.append(divInput);
  container.append(checkbox);
  container.append(label);
  divButton.append(button);
  container.append(divButton);

  //validando input
  input.keypress(numeros);

  checkbox.on( 'change', function() {
    if( $(this).is(':checked')) {
      state.estado = true;
      button.removeClass("disabled");
    } else {
      button.addClass("disabled");
      state.estado  = false;
    }
    console.log(state.estado);
  });

  input.on('keyup',()=>{
     if (input.val().length == 9 && checkbox.is(':checked')) {
      state.telefono = input.val();
      button.removeClass("disabled");
    }
    else if (input.val().length == 9) {
      state.telefono = input.val();
    }
    else {state.telefono = null;
      button.addClass("disabled");
    }
  });

  button.on('click',()=>{
    $.post("api/registerNumber",
    {phone : state.telefono,
      terms : state.estado},
      function(result) {
        console.log(result);
        if (result.success != "false") {
          console.log(result.message);
          state.code = result.data.code;
          state.step = 2;
          update();
          console.log("Tu código es " + state.code);
        }
      });
    });

  return container;
}

const numeros = (e) => {
  if ((e.which>=48 && e.which<=57)) { return true; }
  else { return false;}
}
const letras = (e) => {
  if ((e.which>=97 && e.which<=122) || (e.which>=65 && e.which<=90) || e.which == 39 || e.which == 32 || e.which==241 || e.which==209) {
    return true;
  }
  else {
    return false;
  }
}
