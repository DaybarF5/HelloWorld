document.getElementById("login").onclick = async function (event) {
  event.preventDefault();
  var nameUsuario = document.getElementById("usuario").value;
  if (nameUsuario === "") {
    const container = document.getElementById("pui");
    const confirm = document.createElement("p");
    confirm.id = "usuario_error";
    confirm.style.cssText =
      "left: 1015px; top: 172px; position: absolute; background-color: #FF6737; text-align: center; vertical-align: middle;";
    confirm.textContent = "Usuario obligatorio";
    container.appendChild(confirm);
  } else {
    var err = document.getElementById("usuario_error");
    if (err) {
      err.remove();
    }
  }

  var namePass = document.getElementById("pass").value;
  if (namePass === "") {
    const container = document.getElementById("pui");
    const confirm = document.createElement("p");
    confirm.id = "pass_error";
    confirm.style.cssText =
      "left: 1015px; top: 200px; position: absolute; background-color: #FF6737; text-align: center; vertical-align: middle;";
    confirm.textContent = "Contraseña obligatoria";
    container.appendChild(confirm);
  } else {
    var err = document.getElementById("pass_error");
    if (err) {
      err.remove();
    }
  }

  try {
    if (nameUsuario != "" && namePass != "") {
      let data = new FormData();
      data.append("usuario", nameUsuario);
      data.append("pass", namePass);
      data.append("login", "login");

      const response = await fetch("phpfiles/request.php?", {
        method: "POST",
        body: data,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const text = await response.text();

      const dataJson = JSON.parse(text);
      console.log(dataJson);

      const container = document.getElementById("pui");
      const confirm = document.createElement("div");
      confirm.style =
        "left: 850px; top: 320px; position: absolute; background-color: #FF6737; text-align: center; vertical-align: middle;";
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
        location.reload();
      } else {
        document.getElementById("usuario").value = "";
        document.getElementById("pass").value= "";
      }
    }
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};
