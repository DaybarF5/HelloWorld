document.getElementById("enviar").onclick = async function (event) {
  event.preventDefault();
  var nameValue = document.getElementById("name").value;
  if (nameValue === "") {
    const container = document.getElementById("pui");
    const confirm = document.createElement("p");
    confirm.id = "error_name";
    confirm.style.cssText =
      "left: 1015px; top: 140px; position: absolute; background-color: #FF6737; text-align: center; vertical-align: middle;";
    confirm.textContent = "Nombre es obligatorio";
    container.appendChild(confirm);
  } else {
    var err = document.getElementById("error_name");
    if (err) {
      err.remove();
    }
  }

  var lastValue = document.getElementById("1last").value;
  if (lastValue === "") {
    const container = document.getElementById("pui");
    const confirm = document.createElement("p");
    confirm.id = "error_1last";
    confirm.style.cssText =
      "left: 1015px; top: 170px; position: absolute; background-color: #FF6737; text-align: center; vertical-align: middle;";
    confirm.textContent = "Primer Apellido es obligatorio";
    container.appendChild(confirm);
  } else {
    var err = document.getElementById("error_1last");
    if (err) {
      err.remove();
    }
  }

  var last2Value = document.getElementById("2last").value;
  if (last2Value === "") {
    const container = document.getElementById("pui");
    const confirm = document.createElement("p");
    confirm.id = "error_2last";
    confirm.style.cssText =
      "left: 1015px; top: 200px; position: absolute; background-color: #FF6737; text-align: center; vertical-align: middle;";
    confirm.textContent = "Segundo Apellido es obligatorio";
    container.appendChild(confirm);
  } else {
    var err = document.getElementById("error_2last");
    if (err) {
      err.remove();
    }
  }

  var dateValue = document.getElementById("date").value;
  var regex_FdN = /^\d{2}\/\d{2}\/\d{4}$/;

  if (dateValue === "") {
    const container = document.getElementById("pui");
    const confirm = document.createElement("p");
    confirm.id = "error_date";
    confirm.style.cssText =
      "left: 1032px; top: 230px; position: absolute; background-color: #FF6737; text-align: center; vertical-align: middle;";
    confirm.textContent = "Fecha de nacimiento obligatoria";
    container.appendChild(confirm);
  } else {
    if (!regex_FdN.test(dateValue)) {
      const container = document.getElementById("pui");
      const confirm = document.createElement("p");
      confirm.id = "error_date";
      confirm.style.cssText =
        "left: 1032px; top: 230px; position: absolute; background-color: #FF6737; text-align: center; vertical-align: middle;";
      confirm.textContent = "Fecha de nacimiento no valida";
      container.appendChild(confirm);
    } else {
      var err = document.getElementById("error_date");
      if (err) {
        err.remove();
      }
    }
  }

  var dniValue = document.getElementById("dni").value;

  var regexNIE = /^[XYZ][0-9]{7}[A-Za-z]$/;
  var regexDNI_NIF = /^\d{8}[a-zA-Z]$/;

  if (dniValue === "") {
    const container = document.getElementById("pui");
    const confirm = document.createElement("p");
    confirm.id = "error_dni";
    confirm.style.cssText =
      "left: 1015px; top: 260px; position: absolute; background-color: #FF6737; text-align: center; vertical-align: middle;";
    confirm.textContent = "DNI obligatorio";
    container.appendChild(confirm);
  } else {
    if (!regexDNI_NIF.test(dniValue)) {
      if (!regexNIE.test(dniValue)) {
        const container = document.getElementById("pui");
        const confirm = document.createElement("p");
        confirm.id = "error_dni";
        confirm.style.cssText =
          "left: 1015px; top: 260px; position: absolute; background-color: #FF6737; text-align: center; vertical-align: middle;";
        confirm.textContent = "Identificación no válida";
        container.appendChild(confirm);
      }
    } else {
      var err = document.getElementById("error_dni");
      if (err) {
        err.remove();
      }
    }
  }

  var positionValue = document.getElementById("position").value;
  if (positionValue === "") {
    const container = document.getElementById("pui");
    const confirm = document.createElement("p");
    confirm.id = "error_puesto";
    confirm.style.cssText =
      "left: 1015px; top: 290px; position: absolute; background-color: #FF6737; text-align: center; vertical-align: middle;";
    confirm.textContent = "Puesto obligatorio";
    container.appendChild(confirm);
  } else {
    var err = document.getElementById("error_puesto");
    if (err) {
      err.remove();
    }
  }

  try {
    if (
      nameValue != "" &&
      lastValue != "" &&
      last2Value != "" &&
      dateValue != "" &&
      dniValue != "" &&
      positionValue != ""
    ) {
      let data = new FormData();
      data.append("name", nameValue);
      data.append("last", lastValue);
      data.append("last2", last2Value);
      data.append("date", dateValue);
      data.append("dni", dniValue);
      data.append("position", positionValue);
      data.append("anadir", "anadir");

      const response = await fetch("phpfiles/request.php?", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const text = await response.text();

      const dataJson = JSON.parse(text);

      console.log(text);

      if (dataJson.status == true) {
        document.getElementById("name").value = "";
        document.getElementById("1last").value = "";
        document.getElementById("2last").value = "";
        document.getElementById("date").value = "";
        document.getElementById("dni").value = "";
        document.getElementById("position").value = "";

        const container = document.getElementById("pui");
        const confirm = document.createElement("p");
        confirm.id = "ok";
        confirm.style.cssText =
          "left: 875px; top: 360px; position: absolute; background-color: #B4FF9A; text-align: center; vertical-align: middle;";
        confirm.textContent = dataJson.message;
        container.appendChild(confirm);
      } else {
        const container = document.getElementById("pui");
        const confirm = document.createElement("p");
        confirm.id = "backend_error";
        confirm.style.cssText =
          "left: 875px; top: 360px; position: absolute; background-color: #FF6737; text-align: center; vertical-align: middle;";
        confirm.textContent = dataJson.message;
        container.appendChild(confirm);
      }
    }
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};
