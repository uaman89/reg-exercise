import {validateBirthday, validatePassword} from "./validation";
import {post} from "./ajax"

function submitForm(e) {
    e.preventDefault();

    document.querySelector("#submitBtn").disabled = "disabled";
    var spinner = document.querySelector('#preloader');
    spinner.style.display = 'inline-block';

    post('/server.php', new FormData(e.target)).then(
        function (res) {
            document.querySelector("#content").innerHTML = res;
            spinner.style.display = 'none';
        },
        function (err) {
            console.error('on post():', err);
            alert("Sorry, can't sent data.");
            spinner.style.display = 'none';
        }
    );
    return false;
}

window.onload = function () {
    document.querySelector("#birthday").onchange = validateBirthday;
    document.querySelector("#password1").onchange = validatePassword;
    document.querySelector("#password2").onchange = validatePassword;
    document.querySelector("#regForm").onsubmit = submitForm;
}

