const chooseCompanies = document.querySelector("#Tr-Com-enter");
const chooseDevelopers = document.querySelector("#Tr-Dev-enter");

[chooseCompanies,chooseDevelopers].forEach((choose) => {
    choose.addEventListener("mouseenter",() => {
        choose.style.borderLeftColor = "#ff0000";
        choose.style.boxShadow = "-10px 0px 10px -5px #ff7272";
        choose.style.color = "#ff0000";
        const imgEff = choose.querySelector("img");
        if (imgEff.src.includes("Code_ico_SU.png"))
            choose.querySelector("img").src = "../images/Code_ico_SU_red.png";
        else if (imgEff.src.includes("Monitor_ico_SU.png"))
            choose.querySelector("img").src = "../images/Monitor_ico_SU_red.png";
        choose.querySelector("span").innerHTML = "&emsp;&emsp;&emsp;>_ For";
    });
    choose.addEventListener("mouseleave",() => {
        choose.style.borderLeftColor = "";
        choose.style.boxShadow = "";
        choose.style.color = "";
        const imgEff = choose.querySelector("img");
        if (imgEff.src.includes("Code_ico_SU_red.png"))
            choose.querySelector("img").src = "../images/Code_ico_SU.png";
        else if (imgEff.src.includes("Monitor_ico_SU_red.png"))
            choose.querySelector("img").src = "../images/Monitor_ico_SU.png";
        choose.querySelector("span").innerHTML = "&emsp;&emsp;&emsp;For";
    });
});