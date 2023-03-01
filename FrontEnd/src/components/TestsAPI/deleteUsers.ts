import userDeleteRequest from "./userDeleteRequest";

export default function deleteUsers(){
    const divJson: any = document.getElementById("json");
    divJson.innerHTML = "";
    const div: any = document.getElementById("informações")
    div.innerHTML = `
    <div id="form-container" class="m-5 bg-dark">
        <div class="col-12 form-floating mb-3">
            <input type="token" class="form-control" id="token" placeholder="token" required/>
            <label for="token">Token</label>
        </div>
        <div id="envio" class="d-grid gap-2">

        </div>
    </div>`

    const button = document.createElement('button');
    button.type = "button";
    button.innerHTML = "Enviar";
    button.className = "btn btn btn-primary"
    button.onclick = userDeleteRequest;

    const divEnvio = document.getElementById("envio");
    divEnvio?.appendChild(button);
}
