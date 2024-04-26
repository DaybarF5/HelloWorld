document.getElementById("registrar").onclick = async function (event) {
  try {
    event.preventDefault();

    var usuario = document.getElementById("usuario");
    var email = document.getElementById("email");
    var contrasena = document.getElementById("contrasena");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");

    let data = new FormData();
    data.append("usuario", usuario.value);
    data.append("email", email.value);
    data.append("contrasena", contrasena.value);
    data.append("nombre", nombre.value);
    data.append("apellido", apellido.value);
    data.append("registrar", "registrar");

    const response = await fetch("phpfiles/request.php?", {
      method: "POST",
      body: data,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log(response);

    const text = await response.text();

    const dataJson = JSON.parse(text);
    console.log(dataJson);

    const container = document.getElementById("pui");
    const confirm = document.createElement("div");
    confirm.style = "position: absolute; left: 450px; top: 300px;";
    confirm.textContent = dataJson.message;
    container.appendChild(confirm);

    function eliminarUltimoElemento() {
      var contenedor = document.getElementById("pui");
      var ultimoHijo = contenedor.lastChild;
      if (ultimoHijo) {
        // Esperar 3 segundos antes de eliminar el último hijo del contenedor
        setTimeout(function () {
          contenedor.removeChild(ultimoHijo);
        }, 3000); // 3000 milisegundos = 3 segundos
      }
    }
    eliminarUltimoElemento();

    usuario.value = "";
    email.value = "";
    contrasena.value = "";
    nombre.value = "";
    apellido.value = "";
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};
