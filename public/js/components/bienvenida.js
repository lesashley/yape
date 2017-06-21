const Bienvenida = (update) => {
  const divLogo = $('<div class="fondo-bienvenida"></div>');
  const logo = $('<img src="img/icons/check.png" class="img-check"/>');
  const texto = $('<p>¡Bien!</p><p>Ahora puedes usar Yape</p>');
  divLogo.append(logo);
  divLogo.append(texto);

  setTimeout(function(){ state.step = 5; update(); }, 5000);

  return divLogo;
}
