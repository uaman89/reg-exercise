import {validateBirthday, validatePassword} from "./validation";
import {post} from "./ajax"

function submitForm(e){
    console.log('e:', e);
    e.preventDefault();
    document.querySelector("#submitBtn").disabled = "disabled";

    post('/server.php', new FormData(e.target)).then(
        function(res){
            console.log('res:', res);
            document.querySelector("#content").innerHTML = res;
        },
        alert("Sorry, can't sent data.")
    );
    return false;
}


window.onload = function () {
    document.querySelector("#birthday").onchange = validateBirthday;
    document.querySelector("#password1").onchange = validatePassword;
    document.querySelector("#password2").onchange = validatePassword;
    document.querySelector("#regForm").onsubmit = submitForm;
}

