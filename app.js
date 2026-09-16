const form = document.getElementById('chat-form');
const input = document.getElementById('prompt-input');
const messages = document.getElementById('messages');
const welcomeUser = document.getElementById('welcome-user');
const logoutBtn = document.getElementById('logout-btn');

const isLoggedIn = localStorage.getItem('ai_assistant_logged_in') === 'true';
if (!isLoggedIn) {
  window.location.href = 'login.html';
}

const userName = localStorage.getItem('ai_assistant_user') || '使用者';
if (welcomeUser) {
  welcomeUser.textContent = userName;
}

function renderMessage(text, sender = 'bot') {
  const article = document.createElement('article');
  article.className = `message ${sender}`;

  const avatar = document.createElement('div');
  avatar.className = 'avatar';
  avatar.textContent = sender === 'user' ? 'Y' : 'A';

  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.innerHTML = `<p>${text}</p>`;

  article.appendChild(avatar);
  article.appendChild(bubble);
  messages.appendChild(article);
  messages.scrollTop = messages.scrollHeight;
}

if (form && input && messages) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    renderMessage(text, 'user');
    input.value = '';

    setTimeout(() => {
      const reply = `我已收到你的訊息："${text}"。這是一個預設的 AI 助理範例，之後可以再接真正的 API 或邏輯。`;
      renderMessage(reply, 'bot');
    }, 300);
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('ai_assistant_logged_in');
    localStorage.removeItem('ai_assistant_user');
    window.location.href = 'login.html';
  });
}
