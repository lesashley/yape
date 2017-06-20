'use strict';

const Inicio = (update) =>{
  const container = $('<div class="container"></div>');
  const carousel = $('<div class="owl-carousel owl-theme carousel"></div>');
  const img1 = $('<div class="item"><img src="img/icons/icon-people.png" class="img-responsive"/></div>');
  const img2 = $('<div class="item"><img src="img/icons/group-people.png" class="img-responsive"/></div>');
  const img3 = $('<div class="item"><img src="img/icons/happy-person.png" class="img-responsive"/></div>');
  const text1 = $('<h5>Paga a tus amigos</h5><p>Paga a quien quieras desde donde quieras, sin usar efectivo</p>')
  const text2 = $('<h5>Gratis y Seguro</h5><p>La transferencia es inmediata y gratuita de una cuenta a otra</p>')
  const text3 = $('<h5>Sin número de cuenta</h5><p>Elije a quién pagar desde tu lista de contactos</p>')
  const button = $('<div class="button center-align"><button class="btn inicio waves-effect">REGISTRARME</button></div>');
  carousel.append(img1);
  carousel.append(img2);
  carousel.append(img3);
  img1.append(text1);
  img2.append(text2);
  img3.append(text3);
  container.append(carousel);
  container.append(button);

  button.on('click',(e)=>{
    e.preventDefault();
    state.registro = "ingreso";
    update();
  });

  return container;
}
