// Agregar un interceptor a la petición
axios.interceptors.request.use(
  function (config) {
    config.headers.Authorization = "Bearer AUTH_TOKEN";
    console.log("agregando seguridad");
    // Haz algo antes que la petición se ha enviada
    return config;
  },
  function (error) {
    // Haz algo con el error de la petición
    return Promise.reject(error);
  }
);

function findUsers() {
  const url = "https://reqres.in/api/users?page=2";

  const config = {
    timeout: 1000,
    headers: {
      key: "value",
    },
  };

  // Hacer una petición para un usuario con ID especifico
  axios
    .get(url, config)
    .then(function (response) {
      // manejar respuesta exitosa
      console.log("ok", response);
    })
    .catch(function (error) {
      // manejar error
      console.log("error", error);
    })
    .then(function () {
      console.log("siempre se ejecuta");
      // siempre sera executado
    });
}

document.getElementById("btnFindUsers").addEventListener("click", () => {
  findUsers();
});
