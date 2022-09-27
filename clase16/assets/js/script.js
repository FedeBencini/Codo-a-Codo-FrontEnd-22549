function updateInnerHtml(id, valor) {
  document.getElementById(id).innerHTML = valor;
}

function validarNotas(v1, v2) {
  return Number(v1) && Number(v2); 
}

function calcularValores(nota1, nota2) {
  let notas = [nota1, nota2];
  let mayor = notas[0];
  let menor = notas[0];
  let suma = 0;

  for (let i=0; i<notas.length; i++) {
    if (notas[i] > mayor) {
      mayor = notas[i];
    }
    if (notas[i] < menor) {
      menor = notas[i];
    }
    suma += notas[i];
  }

  let promedio = suma / notas.length;

  updateInnerHtml('menor', menor);
  updateInnerHtml('mayor', mayor);
  updateInnerHtml('suma', suma);
  updateInnerHtml('promedio', promedio);
}


function calcularNotas() {
  const nota1 = +(document.getElementById('nota1').value);
  const nota2 = +(document.getElementById('nota2').value);

  const notasValidas = validarNotas(nota1, nota2);
  if (!notasValidas) {
    alert("Verifique datos ingresados");
    return
  }

  calcularValores(nota1, nota2);
}
