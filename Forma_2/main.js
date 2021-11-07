function init() {
    let div_padre = document.getElementById("div_padre");
    let div_hijo = document.getElementById("div_hijo");

    div_hijo.style.position = "relative";  
    div_hijo.style.left = (div_padre.offsetWidth / 2)  - (div_hijo.offsetWidth / 2) + "px";
    div_hijo.style.top = (div_padre.offsetHeight / 2)  - (div_hijo.offsetHeight / 2) + "px";
}