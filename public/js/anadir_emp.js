let request = "phpfiles/request.php?";
var click = document.getElementById("enviar");

async function anadir() {
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
    data.append("anadir","anadir");

    const response = await fetch(request, {
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

  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}
click.addEventListener("click", anadir);
