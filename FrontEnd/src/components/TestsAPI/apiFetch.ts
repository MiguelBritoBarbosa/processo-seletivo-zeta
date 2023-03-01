import { jsonFormat } from "./jsonFormat";

export default function apiFetch(uri: string) {
    const div: any = document.getElementById("informações");
    div.innerHTML = "";
    const responseText = fetch(`http://35.198.60.120:81/api${uri}`)
        .then(res => res.json())
        .then(data => jsonFormat(data));
}
