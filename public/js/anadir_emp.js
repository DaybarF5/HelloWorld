document.getElementById("enviar").onclick = async function () {
  try {
    var name = document.getElementById("name");
    var last = document.getElementById("1last");
    var last2 = document.getElementById("2last");
    var date = document.getElementById("date");
    var dni = document.getElementById("dni");
    var position = document.getElementById("position");

    let data = new FormData();
    data.append("name", name.value);
    data.append("last", last.value);
    data.append("last2", last2.value);
    data.append("date", date.value);
    data.append("dni", dni.value);
    data.append("position", position.value);
    data.append("anadir", "anadir");

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

    const container = document.getElementById("pui");
    const confirm = document.createElement("div");
    confirm.style = "left: 335px; top: 420px; position: absolute;";
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
      name.value = "";
      last.value = "";
      last2.value = "";
      date.value = "";
      dni.value = "";
      position.value = "";
    }
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};
