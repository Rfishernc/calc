function writeToDom(div, string) {
    document.getElementById(div).innerHTML = string;
}

export {writeToDom};