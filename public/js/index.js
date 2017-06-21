'use strict';

const render = (root,data) =>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  if (state.registro == null) {
    wrapper.append(Inicio(_ => render(root)));
  } else{
    if(state.registro != null){
      if (state.code != null) {
        if (state.data != null) {
          wrapper.append(Registro(_ => render(root)));
        }else{
          wrapper.append(IngresoCodigo(_ => render(root)));
        }
      }else{
        wrapper.append(RegCelular(_ => render(root)));
      }
    }
  }

  root.append(wrapper);
}

const state = {
  registro : null,
  telefono :null,
  code: null,
  estado : false,
  data : null
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
