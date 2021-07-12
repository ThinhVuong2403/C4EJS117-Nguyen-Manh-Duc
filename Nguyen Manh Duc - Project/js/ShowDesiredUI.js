let btnSignUpForm = document.getElementById("SignUp");
btnSignUpForm.addEventListener('click', () => {
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "block";
});
let btnSignInForm = document.getElementById("SignIn");
btnSignInForm.addEventListener('click', () => {
    document.getElementById("login").style.display = "block";
    document.getElementById("register").style.display = "none";
});

const login = document.getElementById("login");
const username = document.getElementById("username");
const pass = document.getElementById("pass");

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
                console.log(registeredFunction);
            case 'ManageStock':
                location.replace("ManageStock.html");
                console.log(registeredFunction);
        }
    }

});