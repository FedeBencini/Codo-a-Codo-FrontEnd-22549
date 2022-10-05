// make get element by id shorter
function getEl(x) {
  return document.getElementById(x);
}

// variables con scope global
const btnAdd = getEl('btnAdd');
const btnDel = getEl('btnDel');
const btnDelAll = getEl('btnDelAll');
let claves = [];

// funciones de base
function renderKeys() {
  const div = getEl('claves');
  div.innerHTML = '';
  // crear ul
  const ul = document.createElement('ul');
  ul.id = 'clavesUl';
  ul.className = 'classUl';
  //agregar ul al div
  div.appendChild(ul);
  // crear li en base a array 'claves', y agregarlos al ul con id personal
  for(let clave of claves) {
    const li = document.createElement('li');
    li.innerHTML = clave;
    li.id = Math.random();
    ul.appendChild(li);
  };
}

function notValidKey(x) {
  return x === '';
}

function addToList(x, l) {
  l.push(x);
}

function getValue(x) {
  return getEl(x).value;
}

// funciones de botones
function addKey() {
  const clave = getValue('clave');
  if(notValidKey(clave)) {
    alert('Inserte una clave válida');
    return;
  }
  addToList(clave, claves)
  delKey();
  renderKeys();
}

function delKey() {
  getEl('clave').value = '';
}

function delAllKeys() {
  claves = [];
  delKey();
  getEl('claves').innerHTML = '';
}

// botones event listeners
btnAdd.addEventListener('click', addKey);

btnDel.addEventListener('click', delKey);

btnDelAll.addEventListener('click', delAllKeys);