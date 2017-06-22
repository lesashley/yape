'use strict';

const Interfaz = (updte) => {
  const container = $('<div class="container-end bg-color" style="width:100%"></div>');
  const divSuperior = $('<div class="large"></div>');
  const confi = $('<div class="right"><img src="img/icons/engine.png" class="icon-tuerca"/></div>');
  const divText = $('<div class="box-superior"></div>');
  const emogi = $('<div><img src="img/icons/happy-face.png" class="icon-happy"/></div>');
  const saludo = $('<p class="text-saludo">Hola</p>');
  const saldo = $('<img src="img/icons/eye.png" class="icon-eye"/><a href="#" class="c-turquesa">Mostrar saldo</a>');
  const divInferior = $('<div class="" style="width:100%"></div>');
  const movimientos = $('<div class="box-mov"><span class="left text-left">ÚLTIMOS MOVIMIENTOS</span><img src="img/icons/right-arrow-circular-button.png" class="right icon-arrow"/></div><div class="divider"></div>');
  const contIcons = $('<div class="box-iconInferior"></div>')
  const imgLeft = $('<div class="left"><img src="img/icons/icon.png" class="icon-party"/></div>');
  const textRight = $('<div class="right text-right"><p>Aún no realizas tu primer pago?</p><span>Es rápido y sencillo</span></div>');
  const icons = $('<div class="align-center btn-icon"><img src="img/icons/send.png" class="align-left"/><img src="img/icons/code-qr.png" class="right"/></div>');
  const texto = $('<div class="align-center text-icon"><span class="align-left">ENVIAR PAGO</span><span class="right">RECIBIR PAGO</span></div>');
  divSuperior.append(confi);
  divText.append(emogi);
  divText.append(saludo);
  divText.append(saldo);
  divSuperior.append(divText);
  divInferior.append(movimientos);
  contIcons.append(imgLeft);
  contIcons.append(textRight);
  divInferior.append(contIcons);
  container.append(divSuperior);
  container.append(divInferior);
  container.append(icons);
  container.append(texto);

  return container;
}
