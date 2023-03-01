import { jsonFormat } from "./jsonFormat";

export default function tokenPostRequest () {
    const inputEmail: any = document.getElementById("email");
    const inputSenha: any = document.getElementById("password");

    let store = {
        email: inputEmail.value,
        password: inputSenha.value
    }

    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(store),
    };

    const responseText = fetch(`http://35.198.60.120:81/api/token/`, options)
        .then(res => res.json())
        .then(data => jsonFormat(data));

}
