const userData = JSON.parse(localStorage.getItem("userData"));

document.getElementById("firstname").textContent = userData.firstname;
document.getElementById("name").textContent = userData.name;
document.getElementById("email").textContent = userData.email;
document.getElementById("logged-user-image").setAttribute('src', userData.avatar)