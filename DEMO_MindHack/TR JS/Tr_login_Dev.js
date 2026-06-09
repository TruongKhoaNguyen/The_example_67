const theScreenTest = window.matchMedia("(max-width: 1082px)");
const showLeftSide = document.querySelector("#Trlidev-pic");

Inscreen(theScreenTest);
theScreenTest.addEventListener("change",Inscreen);

function Inscreen(obj) {
    if (obj.matches) {
        showLeftSide.innerHTML = "";
        document.querySelector("#Khlidev-Logo").innerHTML = `<img src="../images/MindHack_logo.png">`;
    }
    else {
        showLeftSide.innerHTML = `
            <div id="Khlidev-pic">
                <div>
                    <img src="../images/Codescreen_LI_Dev.png">
                </div>
                <div class="Khlidev-intro">
                    <h1 id="Khlidev-first-wt" class="Kh-font-Mont-Med">Welcome to</h1>
                    <h1 id="Khlidev-sec-wt" class="Kh-font-Mont-Med">Mind<span class="Kh-color-red">Hack</span> Community</h1>
                    <label class="Kh-font-Mont-Med">
                        Home to 30 Million developers worldwide
                    </label>
                    <br>
                    <a href="./MH_construct.html">Know more</a>
                </div>
            </div>
        `;
        document.querySelector("#Khlidev-Logo").innerHTML = "";
    }
}