function validateEmail() {
    var emailField = document.getElementsByName("email")[0];
    var errorMessageField = document.getElementById("error-message");
    var submitButton = document.getElementsByClassName("form-submit-button")[0];
    if (emailField.value.length > 0) {
        if (/^([a-zA-Z]+[a-zA-Z0-9\.-]+[a-zA-Z0-9]+)@([a-zA-Z]+).([a-z]){2,3}(.[a-z]{2,3})?$/.test(emailField.value)) {
            emailField.style.color = "black";
            errorMessageField.innerHTML = " ";
            if (validateEmail.caller === validatePassword)
                enableSubmit();
            else
                validatePassword();
        } else {
            emailField.style.color = "red";
            errorMessageField.innerHTML = "please enter valid email";
            submitButton.disabled = true;
            if (emailField.oninput === null) {
                emailField.onblur = null;
                emailField.oninput = validateEmail;
            }
        }
    }
}

function validatePassword() {
    console.log(validatePassword.caller);
    var passwordField = document.getElementsByName("password")[0];
    var errorMessageField = document.getElementById("error-message");
    var submitButton = document.getElementsByClassName("form-submit-button")[0];
    if (passwordField.value.length > 0) {
        if (/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}$/.test(passwordField.value)) {
            passwordField.style.color = "black";
            errorMessageField.innerHTML = " ";
            if (validatePassword.caller === validateEmail)
                enableSubmit();
            else
                validateEmail();
        } else {
            passwordField.style.color = "red";
            errorMessageField.innerHTML = "please enter valid Password";
            submitButton.disabled = true;
            if (passwordField.oninput === null) {
                passwordField.onblur = null;
                passwordField.oninput = validatePassword;
            }
        }
    }
}

function enableSubmit() {
    if (document.getElementById("error-message").innerHTML == " ")
        document.getElementsByClassName("form-submit-button")[0].disabled = false;
}