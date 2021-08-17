let anchoPagina = 0;

function moverDerecha() {
    anchoPagina += 200;
    let ul = document.getElementById("slide");
    ul.style.transitionDuration = "1s";

    if (anchoPagina <= 600) {
        ul.style.marginRight = anchoPagina + "%";

        anchoPagina == 200 ? document.getElementById("r2").checked = true : document.getElementById("r2").checked = false;
        anchoPagina == 400 ? document.getElementById("r3").checked = true : document.getElementById("r3").checked = false;
        anchoPagina == 600 ? document.getElementById("r4").checked = true : document.getElementById("r4").checked = false;

    }
    else if (anchoPagina > 600) {
        ul.style.marginRight = "0%";
        anchoPagina = 0;

        anchoPagina == 0 ? document.getElementById("r1").checked = true : document.getElementById("r1").checked = false;
    }

}

function moverIzquierda() {

    let ul = document.getElementById("slide");
    ul.style.transitionDuration = "1s";

    if (anchoPagina <= 0) {
        anchoPagina = 600;
        ul.style.marginRight = "600%";
        anchoPagina == 600 ? document.getElementById("r4").checked = true : document.getElementById("r4").checked = false;
    }
    else if (anchoPagina >= 0) {
        anchoPagina -= 200;
        ul.style.marginRight = anchoPagina + "%";
        anchoPagina == 0 ? document.getElementById("r1").checked = true : document.getElementById("r1").checked = false;

        anchoPagina == 200 ? document.getElementById("r2").checked = true : document.getElementById("r2").checked = false;
        anchoPagina == 400 ? document.getElementById("r3").checked = true : document.getElementById("r3").checked = false;
        anchoPagina == 600 ? document.getElementById("r4").checked = true : document.getElementById("r4").checked = false;

    }

}

function seleccionarSlides(id) {

    let ul = document.getElementById("slide");

    ul.style.transitionDuration = "1s";

    if (id == "r1") {
        ul.style.marginRight = "0%";
    } else if (id == "r2") {
        ul.style.marginRight = "200%";

    } else if (id == "r3") {
        ul.style.marginRight = "400%";

    } else if (id == "r4") {
        ul.style.marginRight = "600%";
    }

}
