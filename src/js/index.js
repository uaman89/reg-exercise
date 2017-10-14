import {validateBirthday, validatePassword} from "./validation";

var maxDate;

function submitForm(e){
    e.preventDefault();
    e.target.disabled = true;
    console.log('e:', e);
}

window.onload = function () {
    document.querySelector("#birthday").onchange = validateBirthday;


    document.querySelector("#password1").onchange = validatePassword;
    document.querySelector("#password2").onchange = validatePassword;

    document.querySelector("#regForm").onSubmit = submitForm;
}

