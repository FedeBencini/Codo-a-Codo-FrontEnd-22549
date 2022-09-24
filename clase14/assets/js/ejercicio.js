/* Calculadora */

function calcular() {
//inicio

  let op1;
  let op2;
  let operacion;
  let resultado;

  //leer op1
  op1 = parseInt(document.getElementById('op1').value);
  operacion = document.getElementById('operacion').value;
  op2 = parseInt(document.getElementById('op2').value);

  if (operacion !== '+' && operacion !== '-' && operacion !== '*' && operacion !== '/') {
    console.log('Enter a valid operation: + or - or * or /')
  }

  if (operacion === '+') {
    resultado = op1+op2
  } else if (operacion === '-') {
    resultado = op1-op2
  } else if (operacion === '*') {
    resultado = op1*op2
  } else if (operacion === '/') {
    if (op2 !== 0) {
      resultado = op1/op2
    } else {
      document.getElementById('resultado').innerHTML = 'No se puede dividir por 0'
    }
  };

  if (resultado) {
    document.getElementById('resultado').innerHTML = resultado;
  }

//fin
}

function borrar() {
  //op1
  document.getElementById('op1').value='';
  document.getElementById('operacion').value='';
  document.getElementById('op2').value='';
  document.getElementById('resultado').innerHTML='';
}