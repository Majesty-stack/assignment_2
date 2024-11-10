// JavaScript to enhance the chat experience
document.addEventListener('DOMContentLoaded', () => {
    const chatDisplay = document.getElementById('chatDisplay');
    const loadingMessage = document.getElementById('loadingMessage');
    
    // Display typing animation after 1 second to mimic ChatGPT's style
    setTimeout(() => {
      loadingMessage.classList.add('typing-animation');
    }, 1000);
  
    const sendButton = document.querySelector('.send-button');
    const userPrompt = document.getElementById('userPrompt');
    
    sendButton.addEventListener('click', handleUserMessage);
    userPrompt.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleUserMessage();
      }
    });
  
    function handleUserMessage() {
      const message = userPrompt.value.trim();
      if (!message) return;
  
      appendMessage(message, 'user');
      userPrompt.value = '';
      
      // Simulate a bot response
      setTimeout(() => {
        appendMessage(`You said: ${message}`, 'bot');
      }, 500);
    }
  
    function appendMessage(content, sender) {
      const messageElement = document.createElement('div');
      messageElement.textContent = content;
      messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';
      chatDisplay.appendChild(messageElement);
      chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }
  });
  