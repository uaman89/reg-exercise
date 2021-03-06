export function validateBirthday(e) {
    var date = new Date(e.target.value);

    var tmp = e.target.max.split('-');
    var maxDate = new Date(tmp[0], tmp[1], tmp[2]);

    if (date > maxDate) {
        e.target.setCustomValidity("Sorry, you are too young...");
    } else {
        e.target.setCustomValidity('');
    }
}

export function validatePassword() {
    var pass2 = document.querySelector("#password2");
    var pass1 = document.querySelector("#password1");
    if (pass1.value != pass2.value) {
        pass2.setCustomValidity("Passwords Don't Match");
    } else {
        pass2.setCustomValidity('');
    }
}