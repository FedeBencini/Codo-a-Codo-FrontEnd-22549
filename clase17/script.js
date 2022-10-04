console.log('Clase17', '\n', '- - -');
// objeto vacio
const unAlumno = {
  nombre: 'Carlos',
  edad: 25,
  carrera: 'ING'
};

// array (tmbn vector o arreglo) vacio
const alumnos = [
  {
    nombre: 'Carlos',
    edad: 25,
    carrera: 'ING'  
  },
  {
    nombre: 'Rodrigo',
    edad: 30,
    carrera: 'NUT'  
  },
  {
    nombre: 'Reinaldo',
    edad: 45,
    carrera: 'MAT'  
  }
];

// SUMAR EDADES
// Ciclo for extenso
let sumaEdades = 0; //acumulador
for (let i=0; i<alumnos.length; i++) {
  sumaEdades += alumnos[i].edad;
}
console.log('For extenso: ', sumaEdades);

// Ciclo for corto
sumaEdades = 0;
for (let alumno of alumnos) {
  sumaEdades += alumno.edad;
}
console.log('For corto: ', sumaEdades);

// array.forEach()
sumaEdades = 0;
alumnos.forEach(alumno => sumaEdades += alumno.edad);
console.log('forEach(): ', sumaEdades);

// .reduce() para numbers
const sumaReduced = alumnos.reduce((acum, act) => acum + act.edad, 0);
console.log('Suma por reduce(): ', sumaReduced);
console.log('- - -');

// LISTA ALUMNOS MENORES 40
const menores40 = [];
alumnos.forEach((alumno) => {
  if (alumno.edad < 40) {
    menores40.push(alumno)
  }
});
console.log('Menores 40: ', menores40)

// filter: funcion lambda que retorna lista de lo que se filtró
const alumnosMenores40 = alumnos.filter(alumno => alumno.edad < 40);
console.log('Menores 40 filter: ', alumnosMenores40);
console.log('- - -');


// EXISTE ALUMNO DE 25?
// Opc 1
let is25 = false;
for (let i = 0; i < alumnos.length; i++ ) {
  is25 = (alumnos[i].edad === 25) 
  if (is25) {
    break; //cortar ciclo en loops, no se puede usar en forEach o fxs
  };
};
console.log('1- Hay alumno de 25? ', is25);

// Opc 2
is25 = false;
for (let i = 0; i < alumnos.length && !is25; i++ ) {
  is25 = (alumnos[i].edad === 25) 
};
console.log('2- Hay alumno de 25? ', is25);

// Opc 3 forEach()
is25 = false;
alumnos.forEach((alumno) => {(alumno.edad === 25 && !is25) ? is25 = true : is25});
console.log('forEach() - Hay alumno de 25? ', is25);


// Opc 4 .some() : lambda -> devuelve boolean
const hayDe25 = alumnos.some(alumno => alumno.edad === 25);
console.log('.some() - Hay alumno de 25? ', hayDe25);
console.log('- - -');


// TODOS ALUMNOS TIENEN EDAD X, x ej 45
const iguales = alumnos.some(alumno => alumno.edad !== 45);
console.log('Tienen todos 45? ', !iguales);

// .every() : lambda -> boolean
const todos45 = alumnos.every(alumno => alumno.edad === 45);
console.log('Todos tienen 45? ', todos45);
console.log('- - -');


// QUIERO SOLO NOMBRE ALUMNOS
const nombresForEach = [];
alumnos.forEach(alumno => nombresForEach.push(alumno.nombre));
console.log('Nombres forEach(): ', nombresForEach);

// .map()
const nombresMap = alumnos.map(alumno => alumno.nombre);
console.log('Nombres map(): ', nombresMap);
console.log('- - -');

