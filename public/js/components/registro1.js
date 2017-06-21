'use strict';

const RegCelular = (update) =>{
  const container = $('<div class="container"></div>');
  const portada = $('<div class="center-align"><img src="img/icons/phone.png"/ class="responsive-img logo-registro1"></div>');
  const textPortada = $('<h5>Para comenzar validemos tu número</h5><span>Recibirás un SMS con un código de validación</span>');
  const divInput = $('<div class="box-input1"></div>');
  const icon = $('<img src="img/icons/phoneandnumber.png" class="icon-input1"/>');
  const input = $('<input type="text" pattern="/9[0-9]{8}/" class="center-align col s12 num" maxlength="9">');
  const divCheck = $('<div></div>');
  const checkbox = $('<input type="checkbox" class="filled-in check" id="filled-in-box" value="true"/>');
  const label = $('<label for="filled-in-box">Acepto los <a>Terminos y condiciones</a></label>');
  const divButton = $('<div class="center-align"></div>');
  const button = $('<button class="btn disabled">Continuar</button>');

  portada.append(textPortada);
  divInput.append(icon);
  divInput.append(input);
  divCheck.append(checkbox);
  divCheck.append(label);
  divButton.append(button);

  container.append(portada);
  container.append(divInput);
  container.append(divCheck);
  container.append(divButton);

  input.keypress(numeros);


  checkbox.on( 'change', function() {
      if( $(this).is(':checked')) {
           state.estado = $(this).val();
           button.removeClass("disabled");
      } else {
          state.estado  = null;
      }
      console.log(state.estado);
  });

  input.on('blur',()=>{
    if (input.val().length == 9 ) {state.telefono = true;}
    else {state.telefono = null;}
    console.log(state.telefono);
  });

  button.on('click',()=>{
    $.post("api/registerNumber",
    {phone : state.telefono,
      terms : state.estado},
      function(result) {
        if (result.success != "false") {
          state.code = result.data.code;
          update();
          console.log(state.code);
        }
      });
    })

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
