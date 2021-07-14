let btnSignUpForm = document.getElementById("SignUp");
btnSignUpForm.addEventListener('click', () => {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register").style.display = "block";
});

let btnSignInForm = document.getElementById("SignIn");
btnSignInForm.addEventListener('click', () => {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register").style.display = "none";
});

const login = document.getElementById("login");
const usernameS = document.getElementsByClassName("username");
const passS = document.getElementsByClassName("pass");
const rmCheck = document.getElementById("rememberMe");
let username = '';
let pass = '';

for (let i of usernameS) {
    if (i.value != '') {
        username = i;
        break;
    }
}

for (let i of passS) {
    if (i.value != '') {
        pass = i;
        break;
    }
}


login.addEventListener('click', (e) => {
    e.preventDefault();
    const loginInfor = {
        username: username.value,
        password: pass.value,
    }
    if (!loginInfor.username) {
        alert("Enter your username");
    } else if (!loginInfor.password) {
        alert("Enter your password");
    } else {
        localStorage.setItem("checkLogin", 'false');
        for (let user of users) {
            if (loginInfor.username == user.username && loginInfor.password == user.password) {
                localStorage.setItem("checkLogin", 'true');
                localStorage.setItem("registeredFunction", user.registeredFunction);
                break;
            }
        }
    }

    if (localStorage.getItem('checkLogin') == 'true') {
        switch (localStorage.getItem('registeredFunction')) {
            case 'ManageEmployees':
                location.replace("ManageEmployees.html");
                break;
            case 'ManageStock':
                location.replace("ManageStock.html");
                break;
        }
    }

});



// Determine registered function
if (localStorage.checkbox && localStorage.checkbox !== '') {
    rmCheck.setAttribute("checked", "checked");
    username.value = localStorage.username;
    pass.value = localStorage.pass;
} else {
    rmCheck.removeAttribute("checked");
    username.value = "";
    pass.value = "";
}

login.addEventListener('click', () => {
    if (rmCheck.checked && username.value !== "" && pass.value !== "") {
        localStorage.username = username.value;
        localStorage.pass = pass.value;
        localStorage.checkbox = rmCheck.value;
    } else {
        localStorage.username = "";
        localStorage.pass = "";
        localStorage.checkbox = "";
    }
});