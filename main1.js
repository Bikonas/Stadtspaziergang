function pruefen(){
    const code = document.getElementById("eingabe").value;
    if (code === "Durst") {
        document.getElementById("textfeld").style.display = "block";
        document.getElementById("meldung_richtig").textContent = "Das ist richtig. Dein Hinweiscode ist 005";
    } else {
        document.getElementById("textfeld").style.display = "none";
        document.getElementById("meldung").textContent = "Leider falsch.";
    }


    document.getElementById("eingabe").addEventListener("input", function () {
    document.getElementById("meldung").textContent = "";
});
}

function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("open");
}