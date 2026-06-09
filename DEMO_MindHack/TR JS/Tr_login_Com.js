const theScreenTest = window.matchMedia("(max-width: 1012px)");

Inscreen(theScreenTest);
theScreenTest.addEventListener("change",Inscreen);

function Inscreen(obj) {
    if (obj.matches)
        document.querySelector("#Khlicom-Logo").innerHTML = `<img src="../images/MindHack_logo_foot.png">`;
    else
        document.querySelector("#Khlicom-Logo").innerHTML = "";
}