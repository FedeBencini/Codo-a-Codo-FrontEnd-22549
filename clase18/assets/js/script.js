// variables
const btnAdd = document.getElementById('btnAdd');
const btnDel = document.getElementById('btnDel');
const btnDelAll = document.getElementById('btnDelAll');
let claves = [];

//
// funciones de base
function renderKeys() {
  const list = getElement('claves');
  list.innerHTML = '';
  // crear ul
  const ul = document.createElement('ul');
  ul.id = 'clavesUl';
  ul.className = 'classUl';
  //agregar ul al div
  list.appendChild(ul);
  // crear li en base a array claves y agregar al ul
  for(let clave of claves) {
    const li = document.createElement('li');
    li.innerHTML = clave;
    li.id = Math.random();
    // agregar un evento al li
    li.addEventListener('click', () => alert('soy un elemento li'));
    ul.appendChild(li);
  };
}

function notValidKey(x) {
  return x === '';
}

function addToList(x) {
  claves.push(x);
}

function getElement(x) {
  return document.getElementById(x);
}

function getInnerHTML(x) {
  return document.getElementById(x).innerHTML;
}

function getValue(x) {
  return document.getElementById(x).value;
}

//
// funciones de botones
function addKey() {
  const clave = getValue('clave');
  if(notValidKey(clave)) {
    alert('Inserte una clave válida');
    return;
  }
  addToList(clave);
  delKey();
  renderKeys();
}

function delKey() {
  document.getElementById('clave').value = '';
}

function delAllKeys() {
  claves = [];
  delKey();
  document.getElementById('claves').innerHTML = '';
}

// botones event listeners
btnAdd.addEventListener('click', addKey);

btnDel.addEventListener('click', delKey);

btnDelAll.addEventListener('click', delAllKeys);