function validateEmail(event) {
    var emailField = event.target;
    var submitButton = emailField.parentElement.parentElement.getElementsByClassName("form-submit-button")[0];
    var errorMessageField = emailField.parentElement.parentElement.querySelector("#error-message");

    if (/^([a-zA-Z]+[a-zA-Z0-9\.-]+[a-zA-Z]+)@([a-zA-Z]+).([a-z]){2,3}(.[a-z]{2,3})?$/.test(emailField.value)) {
        emailField.style.color = "black";
        errorMessageField.innerHTML = "";
        submitButton.disabled = false;
    } else {
        errorMessageField.innerHTML = "please enter valied email";
        emailField.style.color = "red";
        submitButton.disabled = true;
        if (emailField.oninput === null) {
            emailField.removeEventListener("blur", validateEmail);
            emailField.addEventListener("input", validateEmail);
        }
    }
}

function validatePassword(event) {
    var passwordField = event.target;
    var submitButton = passwordField.parentElement.parentElement.getElementsByClassName("form-submit-button")[0];
    var errorMessageField = passwordField.parentElement.parentElement.querySelector("#error-message");

    if (/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}$/.test(passwordField.value)) {
        passwordField.style.color = "black";
        errorMessageField.innerHTML = "";
        submitButton.disabled = false;
    } else {
        errorMessageField.innerHTML = "please enter valied password";
        passwordField.style.color = "red";
        submitButton.disabled = true;
        if (passwordField.oninput === null) {
            passwordField.removeEventListener("blur", validatePassword);
            passwordField.addEventListener("input", validatePassword);
        }
    }
}