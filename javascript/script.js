// This is the JS script to check if emails match
// it also will display in real time if they match
// page will reload after n time from error
// also added clear fields
// provide thank you message after entering required information
document.addEventListener("DOMContentLoaded", function() {
    const firstNameInput = document.getElementById("firstname");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("emailAddress");
    const confirmEmailInput = document.getElementById("confirmEmail");
    const form = document.getElementById("contactForm");
    const errorElement = document.getElementById("error");
    const clearButton = document.getElementById("clearButton");
    const textAreaInput = document.getElementById("textarea");

    emailInput.addEventListener("input", validateEmails);
    confirmEmailInput.addEventListener("input", validateEmails);

    clearButton.addEventListener("click", function() {
        clearForm();
    });

    form.addEventListener("submit", function(event) {
        if (emailInput.value !== confirmEmailInput.value) {
            event.preventDefault();
            displayErrorMessage("Emails do not match.");
            setTimeout(() => {
                clearForm();
            }, 2000);
        } else {
            event.preventDefault();
            displayThankYouPopup();
        }
    });

    function displayErrorMessage(message) {
        errorElement.textContent = message;
        emailInput.classList.add("error");
        confirmEmailInput.classList.add("error");
    }

    function displayThankYouPopup() {
        alert("Thank you!"); 
        sendToBackend(); 
        clearForm(); 
    }

    function sendToBackend() {
        setTimeout(() => {
            console.log("Data sent to backend.");
        }, 1000); 
    }

    function clearForm() {
        firstNameInput.value = "";
        lastNameInput.value = "";
        emailInput.value = "";
        confirmEmailInput.value = "";
        textAreaInput.value = "";
        errorElement.textContent = "";
        firstNameInput.classList.remove("error");
        lastNameInput.classList.remove("error");
        emailInput.classList.remove("error");
        confirmEmailInput.classList.remove("error");
    }

    function validateEmails() {
        if (emailInput.value !== confirmEmailInput.value) {
            displayErrorMessage("Emails do not match.");
        } else {
            errorElement.textContent = "";
            emailInput.classList.remove("error");
            confirmEmailInput.classList.remove("error");
        }
    }
});
