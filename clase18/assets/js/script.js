// variables
const btnAdd = document.getElementById('btnAdd');
const claves = [];

//
// funciones de base
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

function delInnerHTML(x) {
  getInnerHTML(x) = '';
}

function delValue(x) {
  getValue(x) = '';
}


function renderKeys() {
  const list = getElement('claves');
  //delInnerHTML(list);

  // crear ul
  const ul = document.createElement('ul');
  ul.id = 'clavesUl';
  ul.className = 'clavesUl';

  //agregar ul al div
  list.appendChild(ul);

  // crear li en base a array claves y agregar al ul
  for(let clave of claves) {
    const li = document.createElement('li');
    li.innerHTML = clave;
    li.id = Math.random();

    // agregar un evento al li
    li.addEventListener('click', () => alert('soy un elemento li'))
    ul.appendChild(li);
  }

  claves.forEach(clave => {
    list.innerHTML += `<li>${clave}</li>`
  });
}

//
// funciones de botones
function addKey() {
  let clave = getValue('clave');
  if(notValidKey(clave)) {
    alert('Inserte una clave válida');
    return;
  }
  addToList(clave);
  delKey();
  renderKeys();
}

function delKey() {
  delValue('clave');
}

function delAllKeys() {
  claves = [];
  delKey();
  delInnerHTML('claves');
}

// botones event listeners
btnAdd.addEventListener('click', addKey);

btnDel.addEventListener('click', delKey);

btnDelAll.addEventListener('click', delAllKeys);