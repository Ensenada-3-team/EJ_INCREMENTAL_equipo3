const logoutButton = document.getElementById('logout-link');

logoutButton.addEventListener('click', function(event) {
  
  localStorage.removeItem('userData');
  localStorage.removeItem('token')
 
  window.location.href = './index-login.html';
});