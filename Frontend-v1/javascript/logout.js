const logoutButton = document.getElementById('logout-link');

logoutButton.addEventListener('click', function(event) {
  
  localStorage.removeItem('userData');
 
  window.location.href = './login.html';
});