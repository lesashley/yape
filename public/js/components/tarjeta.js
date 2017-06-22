'use strict';

const RegistrarTarjeta = (update)=>{
  const container = $('<div class="container size"></div>');
  const question = $('<div class="question"><img src="img/icons/question.png" class="right"/></div>');
  const portada = $('<div class="center-align"><img src="img/icons/bcp-logo.png"/ class="responsive-img width-logo "></div>');
  const textPortada = $('<h5 class="title-portada">Registra tu tarjeta débito BCP</h5><span class="tex-gris">Por ahora sólo aceptamos cuentas de ahorro y/o corrientes en soles</span>');
  const sectioninferior = $('<div class="center-align"></div>');
  const divInput = $('<div class="box-tarjeta relative"></div>');
  const icon = $('<img src="img/icons/card.png" class="icon-tarjeta absolute"/>');
  const input = $('<input type="text" class="center-align col s12 input-card" maxlength="16">');
  const divImagen = $('<div class="escanear center-align"><img src="img/icons/scan.png" class="screen"/><a href="#">Escanear tarjeta</a></div>');
  const divFecha = $('<div class="fecha"><div class="left"><p class="tex-gris">Fecha de vencimiento</p></div></div>');
  const divVencimiento = $('<div class="right left-align"></div>');
  const mes = $('<input type="text" class="left-align" placeholder="Mes"/>');
  const anio = $('<input type="text" class="left-align" placeholder="Año"/>');
  const linea = $('<span>/</span>');
  const divButton = $('<div class="center-align"></div>');
  const button = $('<button class="btn btn-orange disabled">CONTINUAR</button>');

  portada.append(textPortada);
  divInput.append(input);
  divInput.append(icon);
  divInput.append(input);
  divVencimiento.append(mes);
  divVencimiento.append(linea);
  divVencimiento.append(anio);
  divFecha.append(divVencimiento);
  container.append(question);
  container.append(portada);
  divButton.append(button);
  sectioninferior.append(divInput);
  sectioninferior.append(divImagen);
  sectioninferior.append(divFecha);
  sectioninferior.append(divButton);
  container.append(sectioninferior);

  input.keypress(numeros);

  (input,mes,anio).on("keyup", ()=>{
    if (input.val() == 16 && mes.val() < 13 && anio.val() >= 2017 || anio.val() >=17 ) {
      button.removeClass("disabled");
    }
  });

  button.on('click',()=>{
    state.tarjeta = input.val();
    state.cardMes = mes.val();
    state.cardAño = anio.val();
    state.step = 6;
    update();
  });

  return container;
}
