var password_new = "shevaarza"
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  if (email === 'shevaarza@gmail.com' && password === password_new) {
    // Redirect to the welcome page
    window.location.href = 'login1.html';
  } else {
    alert('Invalid email or password. Please try again.');
  }
});

document.getElementById('registerForm').addEventListener('submit',function(e){
  e.preventDefault();

  const password1 = document.getElementById('resetPassword').value;
  password_new = password1;

  // memindahkan class end dalate class
  $('#login-tab').addClass('active');
  $('#register-tab').removeClass('active');
  $('#login').addClass('active show');
  $('#register').removeClass('active show');
  

})