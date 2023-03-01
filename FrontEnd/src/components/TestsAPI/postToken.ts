import tokenPostRequest from "./tokenPostRequest";

export default function postToken(){
    const divJson: any = document.getElementById("json");
    divJson.innerHTML = "";
    const div: any = document.getElementById("informações")
    div.innerHTML = `
    <div id="form-container" class="m-5 bg-dark">
        <div class="col-12 form-floating mb-3">
            <input type="email" class="form-control" id="email" placeholder="email" required/>
            <label htmlFor="email">Email</label>
        </div>
        <div class=" col-12 form-floating mb-3">
            <input type="password" class="form-control" id="password" placeholder="password" required/>
            <label htmlFor="mensagem">Senha</label>
        </div>
        <div id="envio" class="d-grid gap-2">

        </div>
    </div>`

    const button = document.createElement('button');
    button.type = "button";
    button.innerHTML = "Enviar";
    button.className = "btn btn btn-primary"
    button.onclick = tokenPostRequest;

    const divEnvio = document.getElementById("envio");
    divEnvio?.appendChild(button);
}
