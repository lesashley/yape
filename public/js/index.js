'use strict';

const render = (root,data) =>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  if (state.step == null) {
    wrapper.append(Inicio(_ => render(root)));
  } else if(state.step == 1){
    wrapper.append(RegCelular(_ => render(root)));
  } else if (state.step == 2) {
    wrapper.append(IngresoCodigo(_ => render(root)));
  } else if (state.step == 3) {
    wrapper.append(Registro(_ => render(root)));
  } else if(state.step == 4){
    wrapper.append(Bienvenida(_=> render(root)));
  }
  root.append(wrapper);
}

const state = {
  telefono :null,
  password : null,
  tarjeta : null,
  step : null,
  code: null,
  estado : false,
  cardPasssword : null,
  cardMes : null,
  cardAño : null
};

$( _ => {
  const root = $("#root");
  render(root);


  $(".name, .email, .password").keyup(function () {
    let regEmail = /^\S+@\S+\.\S+/;
    if ($(".name").val() != "" && $(".password").val() != "" && regEmail.test($(".email").val())) {
      $("button").removeClass("disabled");
    }
    else{
      $("button").addClass("disabled");
    }
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{items:1},
        300:{items:1},
        1000:{items:0}
    }
  });
})
