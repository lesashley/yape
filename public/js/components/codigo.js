const IngresoCodigo = (update) =>{
  const container = $('<div class="container"></div>');
  const portada = $('<div class="center-align"><img src="img/icons/message.png"/ class="responsive-img logo-registro2"></div>');
  const textPortada = $('<h5>Ahora ingresa tu código</h5><span>Enviamos un SMS con el código de validación al número <strong>'+state.telefono+'</strong></span>');
  const divInput = $('<div class="box-input2"></div>');
  const icon = $('<img src="img/icons/lock.png" class="icon-input2"/>');
  const input = $('<input type="text" class="center-align col s12 num" maxlength="6" placeholder="- - -">');
  const divContador = $('<div class="box-contador"></div>');
  const contador = $('<p>Reintentar en <img src="img/icons/clock.png" class="clock"/>'+"numero"+'segundos </p>');

  portada.append(textPortada);
  divInput.append(icon);
  divInput.append(input);
  divContador.append(contador);

  container.append(portada);
  container.append(divInput);
  container.append(divContador);

  input.keypress(numeros);

  input.on('blur',()=>{
    if (input.val() == state.code) {
      $.post("api/resendCode",
      {phone : state.telefono},
        function(result) {
          console.log(result);
          if (result.success != "false") {
            state.data = result.data;
            update();
            console.log(state.data);
          }
        });
      }
    });

  return container;
}
