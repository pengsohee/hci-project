document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Input Elements
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const phoneNumber = document.getElementById("phone-number").value.trim();
    const gender = document.getElementById("gender").value.trim();
    const email = document.getElementById("email").value.trim();
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");

    // Clear previous messages
    errorMessage.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Input Validation
    if (firstName === "") {
        errorMessage.textContent = "First name is required.";
        isValid = false;
    } else if (lastName === "") {
        errorMessage.textContent = "Last name is required.";
        isValid = false;
    } else if (phoneNumber === "" || isNaN(phoneNumber)) {
        errorMessage.textContent = "Phone number must contain numbers only.";
        isValid = false;
    } else if (gender === "") {
        errorMessage.textContent = "Gender is required.";
        isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        errorMessage.textContent = "Please enter a valid email.";
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        successMessage.textContent = `Thank you, ${firstName} ${lastName}! Your form has been submitted successfully.`;
        successMessage.style.display = "block";

        // Optionally, reset the form fields
        document.getElementById("contact-form").reset();

        // Clear success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 5000);
    }
});

function isOnlyNumbers(value) {
    for (let i = 0; i < value.length; i++) {
        if (value[i] < "0" || value[i] > "9") {
            return false; // Return false if any character is not a number
        }
    }
    return true;
}