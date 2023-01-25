import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');

const STORAGE_FORM_KEY = 'feedback-form-state';

formEl.addEventListener('input', messageInput);
formEl.addEventListener('submit', clearFormSubmit);

setFormState();

function setFormState() {
  const data = JSON.parse(localStorage.getItem(STORAGE_FORM_KEY));

  if (!data) {
    return;
  }

  emailEl.value = data.email;
  messageEl.value = data.message;
}

function messageInput(evt) {
  const target = evt.currentTarget.elements;

  const formData = {
    email: target.email.value,
    message: target.message.value,
  };
  throttle(
    () => localStorage.setItem(STORAGE_FORM_KEY, JSON.stringify(formData)),
    500
  ).call();
}

function clearFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();

  console.log(JSON.parse(localStorage.getItem(STORAGE_FORM_KEY)));
  localStorage.removeItem(STORAGE_FORM_KEY);
}
