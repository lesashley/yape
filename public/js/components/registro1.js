'use strict';

const RegCelular = (update) =>{
  const container = $('<div class="container"></div>');
  const portada = $('<div class="center-align"><img src="img/icons/phone.png"/ class="responsive-img logo-registro1"></div>');
  const textPortada = $('<h5>Para comenzar validemos tu número</h5><span>Recibirás un SMS con un código de validación</span>');
  const divInput = $('<div class="box-input1"></div>');
  const icon = $('<img src="img/icons/phoneandnumber.png" class="icon-input1"/>');
  const input = $('<input type="text" class="center-align col s12">');
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

  // state.code = postRegisterNumber("928310199", "true");
  // console.log(state.code) ;

var numero, estado;
  checkbox.on( 'change', function() {
      if( $(this).is(':checked') ) {
           estado = $(this).val();
      } else {
          estado = null;
      }
  });
  input.on('keyup',()=>{
    console.log(input.val());
    numero = input.val();
  })
  // portada.on('click',()=>{
  //   button.removeClass("disabled");
  // });
  console.log(numero);
  console.log(estado);
if (estado != null && numero.lenght==8) {
  $.post("api/registerNumber",
  {phone : numero,
    terms : estado},
    function(result) {
      console.log(result);
      if (result.data != null) {
        button.removeClass("disabled");
        const n = result.data.code;
        console.log(n);
      }
    });
}

  return container;
}
