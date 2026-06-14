const theScreenTest = window.matchMedia("(max-width: 1012px)");
const mainForm = document.querySelector("#Tr-Input");
const GoogleButton = document.querySelector("#Tr-Google-button");
const RegisterAccountList = JSON.parse(localStorage.getItem("registeredData")) || [];
let tokenClient = null;
// 

window.onload = initGoogleLibrary;
Inscreen(theScreenTest);
// 

theScreenTest.addEventListener("change",Inscreen);
document.querySelector("#Tr-Email").addEventListener("blur",(self) => {
    if (document.activeElement !== self.currentTarget)
        self.currentTarget.value = self.currentTarget.value.trim();
});
GoogleButton.onclick = () => {
    if (tokenClient)
        tokenClient.requestAccessToken();
    else
        alert("Something went wrong, please try again.");
};
mainForm.addEventListener("submit",(event) => {
    event.preventDefault();
    // 
    const email = document.querySelector("#Tr-Email").value.trim();
    const password = document.querySelector("#Tr-Password").value;
    // 
    if (!email || !password) {
        alert("Please fill in all required fields.");
        return;
    }
    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)) {
        alert("Email error.");
        return;
    }
    //
    if (!RegisterAccountList.some((i) => i.email == email)) {
        alert("Email hadn't registered.");
        return;
    }
    // 
    if (
        password.includes(" ") ||
        password.length < 6 ||
        password.length > 15
    ) {
        alert("Password error.");
        return;
    }
    // 
    RegisterAccountList.forEach((profile) => {
        if (profile.email == email) {
            if (profile.pass != password) {
                alert("Wrong password.");
                return;
            }
            localStorage.setItem("currentUse",JSON.stringify(profile));
        }
    });
    location.href = "../MH HTML/MH_commain_menu.html";
});
//

function Inscreen(obj) {
    if (obj.matches)
        document.querySelector("#Khlicom-Logo").innerHTML = `<img src="../images/MindHack_logo_foot.png">`;
    else
        document.querySelector("#Khlicom-Logo").innerHTML = "";
}
function initializeGoogleSignIn() {
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: '629110805682-fp32ouk8ts4kc8n5s9jr0t2hn58um3se.apps.googleusercontent.com',
        scope: 'email profile openid',
        callback: (tokenResponse) => {
            if (tokenResponse && tokenResponse.access_token)
                fetchGoogleUserData(tokenResponse.access_token);
        },
    });
}
function initGoogleLibrary() {
    const checkGoogle = setInterval(() => {
        if (typeof google !== 'undefined') {
            clearInterval(checkGoogle);
            initializeGoogleSignIn();
        }
    },100);
}
function fetchGoogleUserData(accessToken) {
    fetch('https://www.googleapis.com/oauth2/v3/userinfo',{
        headers: { 'Authorization': `Bearer ${accessToken}` }
    })
    .then((response) => response.json())
    .then((data) => {
        const userEnter = {
            name: toTitle(charactersFixed(`${data.given_name} ${data.family_name}`.trim())),
            email: data.email,
            pass: '',
        };
        if (!RegisterAccountList.some((i) => i.email == data.email))
            RegisterAccountList.push(userEnter);
        localStorage.setItem("registeredData",JSON.stringify(RegisterAccountList));
        localStorage.setItem("currentUse",JSON.stringify(userEnter));
        location.href = "../MH HTML/MH_construct.html";
    })
    .catch((error) => console.error('Error fetching Google data:',error));
}
function toTitle(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g,(char) => char.toUpperCase());
}
function charactersFixed(str) {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g,'')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D');
}