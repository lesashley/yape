const IngresoCodigo = (update) =>{
  const container = $('<div class="container"></div>');
  const portada = $('<div class="center-align"><img src="img/icons/message.png"/ class="responsive-img logo-registro2"></div>');
  const textPortada = $('<h5 class="title-portada">Ahora ingresa tu código</h5><span class="tex-gris">Enviamos un SMS con el código de validación al número <strong>'+state.telefono+'</strong></span>');
  const divInput = $('<div class="box-input2"></div>');
  const icon = $('<img src="img/icons/lock.png" class="icon-input2"/>');
  const input = $('<input type="text" class="center-align col s12 num" maxlength="6" placeholder="- - -">');
  const divContador = $('<div class="box-contador"></div>');
  const contador = $('<span class="span-gris">Reintentar en <img src="img/icons/clock.png" class="clock"/></span>');
  const segundos = $('<span class="span-gris"></span>');
  const textSegundos = $('<span>segundos</span>');

  portada.append(textPortada);
  divInput.append(icon);
  divInput.append(input);
  divContador.append(contador);
  contador.append(segundos);
  contador.append(textSegundos);

  container.append(portada);
  container.append(divInput);
  container.append(divContador);

  input.keypress(numeros);

  var c = 21;

  var n = setInterval(() =>{
     c--;
     if (c == 0) {c = 21;}
     segundos.text(c);
     }, 1000);

  const newCode = () =>{
    $.post("api/resendCode",
    {phone : state.telefono},
    function(result){
      state.code = result.data;
      console.log(state.code);
    });
  }
  var stop = setInterval(function(){ newCode() }, 21000);
  input.on('keyup',()=>{
    if (input.val() == state.code) {
      clearInterval(stop);
      state.step = 3;
      update();
    }
  });

  return container;
}
