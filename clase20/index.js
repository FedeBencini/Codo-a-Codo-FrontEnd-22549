function buscar(clave) {
  //alert(`Buscando en Index: ${x}`);

  if (clave === "") {
    document.getElementById("ultBusqueda").innerHTML = "";
  } else {
    document.getElementById(
      "ultBusqueda"
    ).innerHTML = `Usuarios que incluyan: \"${clave}\"`;
  }

  const usersFiltered = USERS_DATA.data.filter(
    (user) => user.first_name.includes(clave) || user.last_name.includes(clave)
  );

  const htmlUsers = Users(usersFiltered);
  document.getElementById("users").innerHTML = htmlUsers;
}

function render() {
  console.log("render() working");

  const htmlNavbar = Navbar("mi primer seudocomponente", buscar);
  renderComponent("navbar", htmlNavbar);

  search(1);
}

function renderComponent(id, htmlComponent) {
  document.getElementById(id).innerHTML = htmlComponent;
}

render();
