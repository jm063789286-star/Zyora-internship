const form = document.getElementById("contactForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || message === "") {
        result.style.color = "red";
        result.innerText = "Please fill all fields.";
    }
    else if (!emailPattern.test(email)) {
        result.style.color = "red";
        result.innerText = "Enter a valid email.";
    }
    else {
        result.style.color = "green";
        result.innerText = "Form submitted successfully!";
    }
});
const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});
