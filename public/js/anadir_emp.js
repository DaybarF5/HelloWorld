document.getElementById("enviar").onclick = async function () {
  try {
    var name = document.getElementById("name");
    var last = document.getElementById("1last");
    var last2 = document.getElementById("2last");
    var date = document.getElementById("date");
    var dni = document.getElementById("dni");
    var position = document.getElementById("position");

    var regex_FdN = /^\d{2}\/\d{2}\/\d{4}$/;
    var regexDNI = /^\d{8}[a-zA-Z]$/;
    if (regex_FdN.test(date.value)) {
    } else {
      alert("La fecha no tiene el formato correcto. Ejemplo: 01/01/2000");
      return false;
    }
    if (regexDNI.test(dni.value)) {
    } else {
      alert("DNI incorrecto. Ejemplo: 12345678A");
      return false;
    }

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
    console.log(dataJson);
    const container = document.getElementById("pui");
    const confirm = document.createElement("div");
    confirm.style = "left: 885px; top: 430px; position: absolute;";
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
