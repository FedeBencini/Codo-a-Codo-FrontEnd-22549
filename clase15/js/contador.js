function esPar(valor) {
  return valor%2 === 0;
}

function changeParidad() {
  const paridadLabel = document.getElementById('paridad');
  const contadorLabel = document.getElementById('contador');
  let contadorValor = parseInt(contadorLabel.innerHTML);
  if (esPar(contadorValor)) {
    paridadLabel.innerHTML="Par";
  } else {
    paridadLabel.innerHTML="Impar";
  }
}

function incrementar() {
  const contadorLabel = document.getElementById('contador');
  let contadorValor = parseInt(contadorLabel.innerHTML);
  contadorValor++;
  contadorLabel.innerHTML = contadorValor;
  changeParidad()
}

function decrementar() {
  const contadorLabel = document.getElementById('contador');
  let contadorValor = parseInt(contadorLabel.innerHTML);
  contadorValor-=1;
  contadorLabel.innerHTML = contadorValor;
  changeParidad()
}

