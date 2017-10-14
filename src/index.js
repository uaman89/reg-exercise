var maxDate;

function validateBirthday(e) {
    console.log('e:', e);
    var date = new Date(e.target.value);
    console.log('maxDate:', maxDate);
    if (date > maxDate) {
        console.log('lol:');
        e.target.setCustomValidity("Sorry, you are too young...");
    } else {
        console.log('ok:');
        e.target.setCustomValidity('');
    }
}

function validatePassword() {
    var pass2 = document.querySelector("#password2");
    var pass1 = document.querySelector("#password1");
    if (pass1.value != pass2.value) {
        pass2.setCustomValidity("Passwords Don't Match");
    } else {
        pass2.setCustomValidity('');
    }
}

window.onload = function () {
    var birthdayInput = document.querySelector("#birthday");
    birthdayInput.onchange = validateBirthday;
    var tmp = birthdayInput.max.split('-');
    maxDate = new Date(tmp[0], tmp[1], tmp[2]);

    document.querySelector("#password1").onchange = validatePassword;
    document.querySelector("#password2").onchange = validatePassword;
}

