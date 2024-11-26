const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('.input');
const messageInput = form.querySelector('.textarea');

form.addEventListener('input', handleInput);
form.addEventListener('submit', formSubmit);

const LS_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

function handleInput(event) {
  const form = event.currentTarget;
  const userEmail = form.elements.email.value;
  const userMessage = form.elements.message.value;

  formData.email = userEmail;
  formData.message = userMessage;

  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function fillInput() {
  const savedData = localStorage.getItem(LS_KEY);

  if (savedData) {
    const values = JSON.parse(savedData);
    emailInput.value = values.email || '';
    messageInput.value = values.message || '';
  }
}

fillInput();

function formSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    return alert('Fill please all fields');
  }
  console.log(formData);
  localStorage.clear();
  formData.email = '';
  formData.message = '';
  form.reset();
}
