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


