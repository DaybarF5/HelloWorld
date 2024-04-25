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
let request = "phpfiles/request.php?";

let up = document.getElementById('submit');
let download = document.getElementById('descargarCSV');



async function intento() {
    try {
        let file = document.getElementById('file').files[0];

        const data = new FormData();
        data.append("file", file);

        const response = await fetch(request, {
            method: "POST",
            body: data
        });
        console.log("soy file " + file);
        console.log("soy data" + data);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log("soy response" + response);

        const text = await response.text();
        console.log(text); // Log the response text

        const dataJson = JSON.parse(text);
        console.log(dataJson);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}



up.addEventListener("click", intento)


function descargar() {

    let peticion = ajax(request + "download=1")

    let Window;

    // Function that open the new Window 

    Window = window.open(
        "/../temp/empleados.csv",
        "_blank", "width=400, height=300, top=230, left=540");
}
download.addEventListener("click", descargar)

