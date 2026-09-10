function pruefen(eingabeId, loesung, meldungId, antwort) {
    const code = document.getElementById(eingabeId).value;
    const meldung = document.getElementById(meldungId);
    const bild = document.getElementById("gewinnBild");

    if (code === loesung) {
        meldung.innerHTML = antwort;
        meldung.style.color = "rgba(2, 48, 10, 0.9)";
        meldung.style.fontSize = "22px";

         document.getElementById("hinweis").style.display = "none";

        if (bild) {
            bild.style.display = "block";
            bild.style.margin = "20px auto";
            bild.style.width = "500px";
        }
    } else {
        meldung.textContent = "Leider falsch.";
        meldung.style.color = "darkred";
        meldung.style.fontSize = "30px";

        if (bild) {
            bild.style.display = "none";
        }
    }
}

    document.getElementById("eingabe").addEventListener("input", function () {
    document.getElementById("meldung").innerHTML = "";

     const bild = document.getElementById("gewinnBild");
    if (bild) {
        bild.style.display = "none";
    }
     
});


function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("open");
}

function toggleRaetsel(titel) {
    const inhalt = titel.nextElementSibling;

    if (inhalt.style.display === "block") {
        inhalt.style.display = "none";
    } else {
        inhalt.style.display = "block";
    }
}


function hinweis(button) {
    const text = button.nextElementSibling;

    if (text.style.display === "block") {
        text.style.display = "none";
    } else {
        text.style.display = "block";
    }
}

