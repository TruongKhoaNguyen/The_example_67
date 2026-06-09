const theScreenTest = window.matchMedia("(max-width: 992px)");
const splited = document.querySelector("#Tr-Show-Lich");
const carouShow = document.querySelector(".Tr-Lich-Car");
// 
Inscreen(theScreenTest);
theScreenTest.addEventListener("change",Inscreen);
window.addEventListener("load",sameLineButton);
window.addEventListener("resize",sameLineButton);
// 
function Inscreen(obj) {
    if (obj.matches) {
        splited.innerHTML = "";
        carouShow.innerHTML = `
            <div class="carousel-inner">
                <div class="Khlich-first-car carousel-item active">
                    <h2>For <span style="font-style: italic; color: #ff0000;">Companies</span></h2>
                    <p>
                        Thousands of companies have embraced the new way to hire and upskill developers across roles and throughout their careers.
                    </p>
                    <button class="btn-dark btn">Login</button>
                </div>
                <div class="Khlich-second-car carousel-item">
                    <h2>For <span style="font-style: italic; color: #ffc000;">Developers</span></h2>
                    <p>
                        Join over 26 million developers, practice coding skills, prepare for interviews, and get hired.
                    </p>
                    <button class="btn-dark btn">Login</button>
                </div>
            </div>
            <button style="height: 60px; top: 46%;" class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span style="filter: brightness(0);" class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button style="height: 60px; top: 46%;" class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span style="filter: brightness(0);" class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        `;
        //
        document.querySelector(".Khlich-first-car button").onclick = () => {
            location.href = "../MH HTML/MH_login_Com.html";
        };
        document.querySelector(".Khlich-second-car button").onclick = () => {
            location.href = "../MH HTML/MH_login_Dev.html";
        };
    }
    else {
        splited.innerHTML = `
            <div class="Khlich-first">
                <h2>For <span style="font-style: italic; color: #ff0000;">Companies</span></h2>
                <p>
                    Thousands of companies have embraced the new way to hire and upskill developers across roles and throughout their careers.
                </p>
                <button class="btn-dark btn">Login</button>
            </div>
            <div class="Khlich-second">
                <h2>For <span style="font-style: italic; color: #ffc000;">Developers</span></h2>
                <p>
                    Join over 26 million developers, practice coding skills, prepare for interviews, and get hired.
                </p>
                <button class="btn-dark btn">Login</button>
            </div>
        `;
        carouShow.innerHTML = "";
        //
        document.querySelector(".Khlich-first button").onclick = () => {
            location.href = "../MH HTML/MH_login_Com.html";
        };
        document.querySelector(".Khlich-second button").onclick = () => {
            location.href = "../MH HTML/MH_login_Dev.html";
        };
    }
}

function sameLineButton() {
    const maxLineFixed = 406.984375;
    let differ = document.querySelector(".Khlich-first button").getBoundingClientRect().top - maxLineFixed;
    document.querySelector(".Khlich-second button").style.transform = `translateY(${differ}px)`;
}