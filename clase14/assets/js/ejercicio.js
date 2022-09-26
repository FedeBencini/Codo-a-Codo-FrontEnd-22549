/* Calculadora */

/*  BUSCAR BUGS  */

/* Variables */
let primerValor;
let segundoValor;
let operacion;

/* Funciones para modificar temporalmente #resultado */
function agregarNum(n) {
  let valorParcial = document.getElementById('resultado').innerHTML;
  if (valorParcial === '0') {
    valorParcial = n;
  } else if (valorParcial.length < 8) {
    valorParcial = valorParcial + n;
  }
  document.getElementById('resultado').innerHTML = valorParcial;
}
/* Funciones para guardar valor */
function guardarValor(signo) {
  primerValor = +(document.getElementById('resultado').innerHTML);
  operacion = signo;
  document.getElementById('parcial').innerHTML = primerValor + " " + signo;  
  document.getElementById('resultado').innerHTML = '0';
}

function suma() {
  guardarValor('+')
}

function resta() {
  guardarValor('-')
}

function multiplicacion() {
  guardarValor('*')
}

function division() {
  guardarValor('/')
}

function guardarSegValor() {
  segundoValor = +(document.getElementById('resultado').innerHTML);
}

/* Funcion para calcular resultado */

function calcular() {
  guardarSegValor();
  let resultado;
  if (operacion === '+') {
    resultado = primerValor + segundoValor;
  } else if (operacion === '-') {
    resultado = primerValor - segundoValor;
  } else if (operacion === '*') {
    resultado = primerValor * segundoValor;
  } else if (operacion === '/') {
    if (segundoValor !== 0) {
      resultado = primerValor / segundoValor;
    } else {
      document.getElementById('resultado').innerHTML = 'No se puede dividir por 0'
    }
  };
  if (resultado) {
    document.getElementById('resultado').innerHTML = resultado;
    finParteSup();
  }
}

/* Funciones para borrar números */

function finParteSup() {
  document.getElementById('parcial').innerHTML = primerValor + " " + signo + " " + segundoValor + " " + "=";
}

function borrarParteInf() {
  document.getElementById('resultado').innerHTML = '0';
}

function borrarTodo() {
  document.getElementById('parcial').innerHTML = '';
  document.getElementById('resultado').innerHTML = '0';
}