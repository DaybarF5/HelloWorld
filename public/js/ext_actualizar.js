function actualizar_empleado(row, campo) {
  let id = get("ID." + row);

  let valor = get(campo + "." + row);
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
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};


document.getElementById("descargarCSV").onclick = function(){
  let peticion = ajax("phpfiles/request.php?" + "download=1");

  let Window;

  function open() {
    Window = window.open(
      "/../temp/empleados.csv",
      "_blank",
      "width=400, height=300, top=230, left=540"
    );
    setTimeout(close, 5000);
  }

  function close() {
    if (Window) {
      Window.close();
    }
  }

  open();
};