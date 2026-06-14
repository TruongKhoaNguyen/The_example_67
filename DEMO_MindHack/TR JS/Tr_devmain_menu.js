const setAccName = document.querySelector("#Tr-acc-name");
const setAccEmail = document.querySelector("#Tr-acc-email");
const chooseC = document.querySelector("#Tr-C");
const chooseCpp = document.querySelector("#Tr-Cpp");
const choosePython = document.querySelector("#Tr-Python");
const chooseJava = document.querySelector("#Tr-Java");
// 

setAccName.innerHTML = `${JSON.parse(localStorage.getItem("currentUse")).name}`;
setAccEmail.innerHTML = `${JSON.parse(localStorage.getItem("currentUse")).email}`;
chooseC.onclick = () => {
    location.href = "../MH HTML/MH_construct.html";
}
chooseCpp.onclick = () => {
    location.href = "../MH HTML/MH_construct.html";
}
choosePython.onclick = () => {
    location.href = "../MH HTML/MH_construct.html";
}
chooseJava.onclick = () => {
    location.href = "../MH HTML/MH_construct.html";
}