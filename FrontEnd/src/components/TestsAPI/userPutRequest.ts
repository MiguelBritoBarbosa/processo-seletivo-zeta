import { jsonFormat } from "./jsonFormat";

export default function userPutRequest () {
    const inputToken: any = document.getElementById("token");
    const inputNome: any = document.getElementById("nome");
    const inputEmail: any = document.getElementById("email");
    const inputSenha: any = document.getElementById("password");

    let put = {
        nome: inputNome.value,
        email: inputEmail.value,
        password: inputSenha.value,
    };


    console.log(put)

    const options = {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        'auth': `Barear ${inputToken.value}`
        },
        body: JSON.stringify(put)
    };

    const responseText = fetch(`http://35.198.60.120:81/api/users/0`, options)
        .then(res => res.json())
        .then(data => jsonFormat(data));

}
