// variables
const btnAdd = document.getElementById('btnAdd');
//el scope del array debe estar por encima de la funcion add
const claves = [];


// funciones de base
function renderKeyByDOM() {
  const list = findKeys();
  list.innerHTML = '';
  //crear un <ul>
  const ul = document.createElement('ul');
  ul.id = 'clavesUl';
  ul.className = 'classUl';

  //agregar al div el hijo: ul
  list.appendChild(ul);

  //crear los <li> en base a el array de clave y los agrego al <ul>
  for(let clave of claves) {
      const li = document.createElement('li');
      li.innerHTML = clave;
      li.id = Math.random();//0 - 0.999999
      //al li le agrega un evento
      li.addEventListener('click', () => alert('soy un li'))
      ul.appendChild(li);
  };
}

function validateKey(key) {
  return key !== '';
}

function addToList(clave) {
  claves.push(clave);
}

function getKey() {
  return document.getElementById('clave').value;
}

function findKeys() {
  return document.getElementById('claves');
}


// funciones de botones
function add() {

    const clave = getKey();

    const isValid = validateKey(clave);

    if (!isValid) {
        alert('Debe completar la clave');
        return;
    }

    //pasa las validaciones!
    //agregar a la lista de claves
    addToList(clave);

    // renderKeys();
    renderKeyByDOM();
}

// botones event listeners
btnAdd.addEventListener('click', add);