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