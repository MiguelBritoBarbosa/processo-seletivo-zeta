import { jsonFormat } from "./jsonFormat";

export default function userDeleteRequest () {
    const inputToken: any = document.getElementById("token");

    const options = {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        'auth': `Barear ${inputToken.value}`
        },
    };

    const responseText = fetch(`http://35.198.60.120:81/api/users/0`, options)
        .then(res => res.json())
        .then(data => jsonFormat(data));

}
