const GoogleButton = document.querySelector("#Tr-Google-button");
const RegisterAccountList = JSON.parse(localStorage.getItem("registeredData")) || [];
let tokenClient;
//

window.onload = initGoogleLibrary;
//

document.querySelector("#Tr-First-name").addEventListener("blur",(self) => {
    if (document.activeElement !== self.currentTarget)
        self.currentTarget.value = toTitle(self.currentTarget.value).trim();
});
document.querySelector("#Tr-Last-name").addEventListener("blur",(self) => {
    if (document.activeElement !== self.currentTarget)
        self.currentTarget.value = toTitle(self.currentTarget.value).trim();
});
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
document.querySelector("#Tr-Input").addEventListener("submit",(event) => {
    event.preventDefault();
    //
    const firstName = document.querySelector("#Tr-First-name").value.trim();
    const lastName = document.querySelector("#Tr-Last-name").value.trim();
    const email = document.querySelector("#Tr-Email").value.trim();
    const password = document.querySelector("#Tr-Password").value;
    const confirmPassword = document.querySelector("#Tr-Confirm-pass").value;
    let fullName = `${firstName} ${lastName}`;
    // 
    if (!firstName || !lastName || !email || !password) {
        alert("Please fill in all required fields.");
        return;
    }
    //
    if (!(/^[a-zA-Z ]+$/).test(fullName)) {
        alert("Name error.");
        return;
    }
    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)) {
        alert("Email error.");
        return;
    }
    if (password.includes(" ")) {
        alert("Password error.");
        return;
    }
    // 
    if (fullName.length > 50) {
        alert("Name is too long.");
        return;
    }
    if (email.length > 80) {
        alert("Email is too long.");
        return;
    }
    if (RegisterAccountList.some((i) => i.email == email)) {
        alert("Email is already registered.");
        return;
    }
    //
    if (password.length < 6) {
        alert("Password should be at least 6 characters.");
        return;
    }
    if (password.length > 15) {
        alert("Password is too long.");
        return;
    }
    //
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    const userEnter = {
        name: fullName,
        email: email,
        pass: password,
    };
    RegisterAccountList.push(userEnter);
    localStorage.setItem("registeredData",JSON.stringify(RegisterAccountList));
    localStorage.setItem("currentUse",JSON.stringify(userEnter));
    location.href = "../MH HTML/MH_SUchoice.html";
});

// AI !
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
            name: charactersFixed(`${data.given_name} ${data.family_name}`.trim()),
            email: data.email,
            pass: '',
        };
        RegisterAccountList.push(userEnter);
        localStorage.setItem("registeredData",JSON.stringify(RegisterAccountList));
        localStorage.setItem("currentUse",JSON.stringify(userEnter));
        location.href = "../MH HTML/MH_SUchoice.html";
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