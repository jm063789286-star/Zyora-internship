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
function getProfile() {

const profile = document.getElementById("profile");

profile.innerHTML = "Loading...";

fetch("https://api.github.com/users/jm063789286-star")
.then(response => response.json())
.then(data => {

profile.innerHTML = `
<img src="${data.avatar_url}">
<h2>${data.name}</h2>
<p><b>Username:</b> ${data.login}</p>
<p><b>Followers:</b> ${data.followers}</p>
<p><b>Public Repositories:</b> ${data.public_repos}</p>
<a href="${data.html_url}" target="_blank">Visit GitHub</a>
`;

})
.catch(() => {
profile.innerHTML = "Couldn't fetch data";
});

}

getProfile();
