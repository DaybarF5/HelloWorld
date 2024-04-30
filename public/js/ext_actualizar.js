function actualizar_empleado(row, campo) {
  let id = get("ID." + row);

  let valor = get(campo + "." + row);

  if (campo == "FdN") {
    var regex_FdN = /^\d{2}\/\d{2}\/\d{4}$/;
    if (regex_FdN.test(valor)) {
    } else {
      alert("La fecha no tiene el formato correcto. Ejemplo: 01/01/2000");
      return false;
    }
  }
  if (campo == "DNI") {
    var regexDNI = /^\d{8}[a-zA-Z]$/;
    if (regexDNI.test(valor)) {
    } else {
      alert("DNI incorrecto. Ejemplo: 12345678A");
      return false;
    }
  }

  let resultado = ajax(
    "phpfiles/request.php?peticion=actualizar_empleado&campo=" +
      campo +
      "&valor=" +
      valor +
      "&id=" +
      id
  );
  
  var data = JSON.parse(resultado);

  if (data.status == true) {
    let ok = document.getElementById(campo + "." + row);
    ok.style.backgroundColor = "#B4FF9A"; //si se hace bien la insercion, es verde
    setTimeout(function () {
      ok.style.backgroundColor = "";
    }, 1000);
  } else {
    let ok = document.getElementById(campo + "." + row);
    ok.style.backgroundColor = "#FF3816"; //si no se hace, es rojo
    setTimeout(function () {
      ok.style.backgroundColor = "";
    }, 1000);
  }
}

document.getElementById("submit").onclick = async function () {
  try {
    let file = document.getElementById("file").files[0];

    if (file != undefined && file != null) {
      let ext = file.name.split(".").pop();
      if (ext !== "csv") {
        alert("El archivo debe ser de tipo CSV");
        return false;
      }
    } else {
      alert("Introduzca un archivo");
      return false;
    }

    const data = new FormData();
    data.append("file", file);

    const response = await fetch("phpfiles/request.php?", {
      method: "POST",
      body: data,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const text = await response.text();

    const dataJson = JSON.parse(text);

    const container = document.getElementById("HtmlContainer2");
    const confirm = document.createElement("span");
    confirm.style = "position: absolute;  left: 50%; top: 40%;";
    confirm.textContent = dataJson.message;
    container.appendChild(confirm);

    setTimeout(function () {
      location.reload();
    }, 1000);
  } catch (error) {
    console.error(error);

    const container = document.getElementById("HtmlContainer2");
    const confirm = document.createElement("span");
    confirm.style = "position: absolute;  left: 50%; top: 40%;";
    confirm.textContent = "error en el csv: "+error;
    container.appendChild(confirm);

  }
};

document.getElementById("descargarCSV").onclick = function () {
  let peticion = ajax("phpfiles/request.php?" + "download=1");
  
  window.location.href = "/../temp/empleados.csv";
};
