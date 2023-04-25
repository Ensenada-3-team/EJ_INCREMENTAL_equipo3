const userData = JSON.parse(localStorage.getItem("userData"));

document.getElementById("username").textContent = '@' + userData.nickname;