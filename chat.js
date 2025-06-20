function sendMessage() {
  const input = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  const userText = input.value.trim();
  if (userText === '') return;

  const userMessage = document.createElement('div');
  userMessage.className = 'message user';
  userMessage.textContent = userText;
  chatBox.appendChild(userMessage);

  const botResponse = getBotResponse(userText);
  const botMessage = document.createElement('div');
  botMessage.className = 'message bot';
  botMessage.textContent = botResponse;
  chatBox.appendChild(botMessage);

  speak(botResponse);
  input.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(text) {
  const lower = text.toLowerCase();
  if (lower.includes('cooling center')) return 'Find cooling centers at https://tucsonaz.gov.';
  if (lower.includes('heatstroke') || lower.includes('symptoms')) return 'Symptoms: confusion, no sweat, red skin. Call 911.';
  if (lower.includes('water') || lower.includes('hydrate')) return 'Drink every 15–20 minutes. No soda or alcohol.';
  if (lower.includes('outside')) return 'Safest times: before 10am and after 6pm.';
  return 'Stay hydrated, seek shade, and rest often. Anything else I can help with?';
}

function speak(text) {
  if ('speechSynthesis' in window) {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'en-US';
    speechSynthesis.speak(utter);
  }
}

function panicHelp() {
  alert("🚨 Emergency steps:\n\n1. Move to shade or A/C\n2. Remove excess clothing\n3. Apply cool water\n4. Call 911 if severe symptoms");
}
