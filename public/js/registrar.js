document.getElementById("registrar").onclick = async function (event) {
  event.preventDefault();
  var nameEmail = document.getElementById("email").value;
  if (nameEmail === "") {
    const container = document.getElementById("pui");
    const confirm = document.createElement("p");
    confirm.id = "email_error";
    confirm.style.cssText =
      "left: 1015px; top: 170px; position: absolute; background-color: #FF6737; text-align: center; vertical-align: middle;";
    confirm.textContent = "Email obligatorio";
    container.appendChild(confirm);
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(nameEmail)) {
      const container = document.getElementById("pui");
      const confirm = document.createElement("p");
      confirm.id = "email_error";
      confirm.style.cssText =
        "left: 1015px; top: 170px; position: absolute; background-color: #FF6737; text-align: center; vertical-align: middle;";
      confirm.textContent = "Email no valido";
      container.appendChild(confirm);
    } else {
      var err = document.getElementById("email_error");
      if (err) {
        err.remove();
      }
    }
  }

  var nameUsuario = document.getElementById("usuario").value;
  if (nameUsuario === "") {
    const container = document.getElementById("pui");
    const confirm = document.createElement("p");
    confirm.id = "usuario_error";
    confirm.style.cssText =
      "left: 1015px; top: 201px; position: absolute; background-color: #FF6737; text-align: center; vertical-align: middle;";
    confirm.textContent = "Usuario obligatorio";
    container.appendChild(confirm);
  } else {
    var err = document.getElementById("usuario_error");
    if (err) {
      err.remove();
    }
  }

  var nameContrasena = document.getElementById("contrasena").value;
  if (nameContrasena === "") {
    const container = document.getElementById("pui");
    const confirm = document.createElement("p");
    confirm.id = "contrasena_error";
    confirm.style.cssText =
      "left: 1015px; top: 232px; position: absolute; background-color: #FF6737; text-align: center; vertical-align: middle;";
    confirm.textContent = "Contraseña obligatoria";
    container.appendChild(confirm);
  } else {
    var err = document.getElementById("contrasena_error");
    if (err) {
      err.remove();
    }
  }

  var nameNombre = document.getElementById("nombre").value;
  if (nameNombre === "") {
    const container = document.getElementById("pui");
    const confirm = document.createElement("p");
    confirm.id = "nombre_error";
    confirm.style.cssText =
      "left: 1015px; top: 261px; position: absolute; background-color: #FF6737; text-align: center; vertical-align: middle;";
    confirm.textContent = "Nombre obligatorio";
    container.appendChild(confirm);
  } else {
    var err = document.getElementById("nombre_error");
    if (err) {
      err.remove();
    }
  }

  var nameApellido = document.getElementById("apellido").value;
  if (nameApellido === "") {
    const container = document.getElementById("pui");
    const confirm = document.createElement("p");
    confirm.id = "apellido_error";
    confirm.style.cssText =
      "left: 1015px; top: 291px; position: absolute; background-color: #FF6737; text-align: center; vertical-align: middle;";
    confirm.textContent = "Apellido obligatorio";
    container.appendChild(confirm);
  } else {
    var err = document.getElementById("apellido_error");
    if (err) {
      err.remove();
    }
  }

  try {
    if (
      nameUsuario != "" &&
      nameEmail != "" &&
      nameContrasena != "" &&
      nameNombre != "" &&
      nameApellido != ""
    ) {
      let data = new FormData();
      data.append("usuario", nameUsuario);
      data.append("email", nameEmail);
      data.append("contrasena", nameContrasena);
      data.append("nombre", nameNombre);
      data.append("apellido", nameApellido);
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
      confirm.style = "left: 880px; top: 410px; position: absolute; ";
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

      if (dataJson.status == true) {
        document.getElementById("email").value = "";
        document.getElementById("usuario").value = "";
        document.getElementById("contrasena").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
      }
    }
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};
