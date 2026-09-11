const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const address = document.getElementById("address").value.trim();
    const country = document.getElementById("country").value;
    const mobile = document.getElementById("mobile").value.trim();

    const gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    const qualification = document.querySelectorAll(
        'input[name="qualification"]:checked'
    );

    if (firstName === "") {
        alert("Please enter your first name.");
        return;
    }

    if (lastName === "") {
        alert("Please enter your last name.");
        return;
    }

    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    if (qualification.length === 0) {
        alert("Please select your qualification.");
        return;
    }

    if (address === "") {
        alert("Please enter your address.");
        return;
    }

    if (country === "") {
        alert("Please select your country.");
        return;
    }

    if (mobile === "") {
        alert("Please enter your mobile number.");
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Mobile number must contain exactly 10 digits.");
        return;
    }

    message.innerHTML =
        "Registration Successful! Welcome " + firstName + " " + lastName + ".";

    alert("Form submitted successfully!");

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Gender:", gender.value);
    console.log("Qualification:", qualification);
    console.log("Address:", address);
    console.log("Country:", country);
    console.log("Mobile:", mobile);
});

form.addEventListener("reset", function() {

    message.innerHTML = "";

    setTimeout(function() {
        alert("Form has been reset.");
    }, 100);

});