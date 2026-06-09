const StartTrialButton = document.querySelector("#Tr-start-trial");
const ForDevButton = document.querySelector("#Tr-for-dev");

const joinCommunity = document.querySelector("#Tr-Join-commun");
const startTrial = document.querySelector("#Tr-Start-trial");

const UpButton = document.querySelector(".Tr-Up-button")
//

StartTrialButton.onclick = () => {
    location.href = "../MH HTML/MH_signup.html";
};
ForDevButton.onclick = () => {
    location.href = "../MH HTML/MH_login_Dev.html";
};

joinCommunity.onclick = () => {
    location.href = "../MH HTML/MH_login_Dev.html";
}
startTrial.onclick = () => {
    location.href = "../MH HTML/MH_signup.html";
}

UpButton.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};