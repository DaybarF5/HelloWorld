let request_login = "phpfiles/request.php?";
var click = document.getElementById("login");

async function anadir() {
  try {
    var usuario = document.getElementById("usuario");
    var pass = document.getElementById("pass");

    let data = new FormData();
    data.append("usuario", usuario.value);
    data.append("pass", pass.value);
    data.append("login", "login");

    const response = await fetch(request_login, {
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
    confirm.style = "position: absolute; left: 450px; top: 300px;";
    confirm.textContent = dataJson.message;
    container.appendChild(confirm);

    if(dataJson.status='true'){
        location.reload();
    }
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}
click.onclick = anadir;
