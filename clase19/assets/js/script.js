function buscarDatos() {
  // simulo que busque en API Rest!!
  const persona = {
    dni: 1234,
    nombre: "carlos",
    direcciones: [
      {
        calle: "calle1",
        altura: 1234,
        tipo: "postal",
      },
      {
        calle: "calle2",
        altura: 1235,
        tipo: "legal",
      },
    ],
    cuenta: {
      tipo: "cc",
      nro: "012-132132-21321",
    },
  };
  return persona;
}

function dibujarDatos() {
  // obtengo datos desde "api rest" (no existe)
  const res = buscarDatos();
  const datos = datosPersona(res.dni, res.nombre);
  const direcciones = direccionesPersona(res.direcciones);
  const cuenta = cuentaPersona(res.cuenta);

  render({
    datos: datos,
    direcciones: direcciones,
    cuenta: cuenta,
  });
}

function render(props) {
  document.getElementById("datos-persona").innerHTML = props.datos;
  document.getElementById("direcciones-persona").innerHTML = props.direcciones;
  document.getElementById("cuenta-persona").innerHTML = props.cuenta;
}

function datosPersona(dni, nombre) {
  const html = `<p>${nombre} - ${dni}</p>`;
  return html;
}

function direccionesPersona(direcciones) {
  let html = `<ul>`;
  const dirs = direcciones.map(
    (d) => `<li>${d.calle}, ${d.altura}, ${d.tipo}</li>`
  );
  html += dirs.join("");
  html += `</ul>`;
  return html;
}

function cuentaPersona(cuenta) {
  const html = `<p>Tipo: ${cuenta.tipo}</p>
  <p>Nro: ${cuenta.nro}</p>`;
  return html;
}

document.getElementById("btnBuscar").addEventListener("click", dibujarDatos);
