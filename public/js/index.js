'use strict';

const render = (root,data) =>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  if (state.registro == null) {
    wrapper.append(Inicio(_ => render(root)));
  } else{
    wrapper.append(RegCelular(_ => render(root)));
  }

  root.append(wrapper);
}

const state = {
  registro : null,
  telefono :null,
  code: null
};

$( _ => {
  const root = $("#root");
  render(root);

  // state.code = postRegisterNumber("928310099", "true");
  // console.log(n);
  // console.log(state.code);

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:1
        },
        1000:{
            items:0
        }
    }
})

})
