const userData = JSON.parse(localStorage.getItem("userData"));
console.log(userData.nickname)

document.getElementById("username").textContent = '@' + userData.nickname;