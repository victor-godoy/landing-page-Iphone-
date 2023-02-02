function imagemSlide(e) {
  document.querySelector("#principal").src = e;
}

function corCirculo(cor) {
  const circulo = document.querySelector(".circle");
  circulo.style.background = cor;
}
