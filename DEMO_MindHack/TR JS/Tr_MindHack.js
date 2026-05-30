const StartTrialButton = document.querySelector("#Tr-start-trial");
const ForDevButton = document.querySelector("#Tr-for-dev");
const UpButton = document.querySelector(".Tr-Up-button")

StartTrialButton.onclick = () => {
    location.href = "../MH HTML/MH_signup.html";
};
ForDevButton.onclick = () => {
    location.href = "../MH HTML/MH_construct.html";
};
UpButton.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};