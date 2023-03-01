import userPutRequest from "./userPutRequest";

export default function putUsers(){
    const divJson: any = document.getElementById("json");
    divJson.innerHTML = "";
    const div: any = document.getElementById("informações")
    div.innerHTML = `
    <div id="form-container" class="m-5 bg-dark">
    <div class="col-12 form-floating mb-3">
            <input type="token" class="form-control" id="token" placeholder="token" required/>
            <label for="token">Token</label>
        </div>
        <div class="col-12 form-floating mb-3">
            <input type="nome" class="form-control" id="nome" placeholder="Nome" required/>
            <label for="nome">Nome</label>
        </div>
        <div class="col-12 form-floating mb-3">
            <input type="email" class="form-control" id="email" placeholder="email" required/>
            <label for="email">Email</label>
        </div>
        <div class=" col-12 form-floating mb-3">
            <input type="password" class="form-control" id="password" placeholder="password" required/>
            <label for="mensagem">Senha</label>
        </div>
        <div id="envio" class="d-grid gap-2">

        </div>
    </div>`

    const button = document.createElement('button');
    button.type = "button";
    button.innerHTML = "Enviar";
    button.className = "btn btn btn-primary"
    button.onclick = userPutRequest;

    const divEnvio = document.getElementById("envio");
    divEnvio?.appendChild(button);
}
