(function () {
  let colores = ["red", "green", "aqua", "blue", "yellow", "black"];
  let boton = document.querySelector(".boton");
  let body = document.querySelector(".body");

  boton.addEventListener("click", cambiarFondo);

  function cambiarFondo() {
    let numeroRandom = Math.floor(Math.random() * 6); //numero entre 0 y 6 (la candtidad de index del array)
    body.style.background = colores[numeroRandom];
  }
})();
