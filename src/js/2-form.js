document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.querySelector('.feedback-form');
    const feedbackFormStateKey = 'feedback-form-state';
  
    function handleInput(event) {
      const { name, value } = event.target;
      const formData = JSON.parse(localStorage.getItem(feedbackFormStateKey)) || {};
  
      formData[name] = value.trim();
      localStorage.setItem(feedbackFormStateKey, JSON.stringify(formData));
    }
  
    function handleLoad() {
      const formData = JSON.parse(localStorage.getItem(feedbackFormStateKey)) || {};
      const emailInput = feedbackForm.elements.email;
      const messageInput = feedbackForm.elements.message;
  
      emailInput.value = formData.email || '';
      messageInput.value = formData.message || '';
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      const formData = JSON.parse(localStorage.getItem(feedbackFormStateKey)) || {};
  
      console.log(formData);
  
      localStorage.removeItem(feedbackFormStateKey);
      event.target.reset();
    }
  
    feedbackForm.addEventListener('input', handleInput);
    feedbackForm.addEventListener('submit', handleSubmit);
    window.addEventListener('load', handleLoad);
  });
  