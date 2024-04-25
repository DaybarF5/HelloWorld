//RUTA
// COPIA POR SI DEJA DE FUNCIONAR
let request = "phpfiles/request.php?";

let up = document.getElementById("submit");
let download = document.getElementById("descargarCSV");

async function intento() {
  try {
    let file = document.getElementById("file").files[0];

    const data = new FormData();
    data.append("file", file);

    const response = await fetch(request, {
      method: "POST",
      body: data,
    });
    console.log("soy file " + file);
    console.log("soy data" + data);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log("soy response" + response);

    const text = await response.text();
    console.log(text); // Log the response text

    const dataJson = JSON.parse(text);
    console.log(dataJson);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

up.addEventListener("click", intento);

function descargar() {
  let peticion = ajax(request + "download=1");

  let Window;

  // Function that open the new Window

  Window = window.open(
    "/../temp/empleados.csv",
    "_blank",
    "width=400, height=300, top=230, left=540"
  );
  Window = window.close();
}
download.addEventListener("click", descargar);

// try {

//     //validar que el archivo sea csv
//     let ext = csv_document.split('.').pop();
//     if (ext !== 'csv') {
//         alert('El archivo debe ser de tipo CSV');
//         return false;
//     }
// } catch (e) {
//     console.log(e);
// }
