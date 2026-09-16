const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginMessage = document.getElementById('login-message');

const validUser = {
  username: 'admin',
  password: '1234'
};

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === validUser.username && password === validUser.password) {
    localStorage.setItem('ai_assistant_logged_in', 'true');
    localStorage.setItem('ai_assistant_user', username);
    window.location.href = 'app.html';
    return;
  }

  loginMessage.textContent = '帳號或密碼錯誤，請重新輸入。';
  loginMessage.style.color = '#ff7b7b';
});
