const header = document.querySelector(".header");
const name = document.querySelector(".nameHere")
const signUpHere = document.querySelector(".signUpHere")
const signUp = document.querySelector(".signUp")
const loginBtn = document.querySelector(".loginBtn");
const forgotPass = document.querySelector(".forgotPass");

signUpHere.addEventListener('click',()=>{
    header.innerHTML = "Sign Up";
    name.style.display = "block";
    forgotPass.style.display = "none";
    signUp.style.display = "none";
})

loginBtn.addEventListener('click',()=>{
    header.innerHTML = "Login";
    name.style.display = "none";
    forgotPass.style.display = "block";
    signUp.style.display = "block";
})

