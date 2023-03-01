export const jsonFormat = (data: any) => {
    const div: any = document.getElementById("json");
    const json = JSON.parse(JSON.stringify(data));
    let responseJson = "<div class='container text-break'>";

    if (data.hasOwnProperty("1")) {
        responseJson += `[`;
        for (let key in json) {
            responseJson += `<div class='container p-3'>{`;

            for (let item in json[key]) {
                responseJson += `<br/> "${item}": ${json[key][item]}`;
            }

            responseJson += "<br/>},</div>";
        }
        responseJson += `]`;
        responseJson += "</div>"
    }
    else {
        responseJson = `{<div class='container text-break'>`;

        for (let key in json) {
            responseJson += `"${key}": ${json[key]}`;

        }
        responseJson += "</div>";
        responseJson += "}</div>"
    }


    responseJson += "<div/>";
    div.innerHTML = responseJson;

}
