var click = document.getElementById("login");

var usuario = document.getElementById("usuario");
var pass = document.getElementById("pass");

async function login(event) {
  try {
    event.preventDefault();

    let data = new FormData();
    data.append("usuario", usuario.value);
    data.append("pass", pass.value);
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

    if (dataJson.status == true) {
      location.reload();
    }
    else{
      usuario.value = "";
      pass.value = "";
    }
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}
click.onclick = login;
