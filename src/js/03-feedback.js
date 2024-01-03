import throttle from 'lodash.throttle';

const formElement = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form [name="email"]');
const messageInput = document.querySelector('.feedback-form [name="message"]');

fillFormFields();

const handleInput = throttle(() => {
  const formData = new FormData(formElement);

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(Object.fromEntries(formData.entries()))
  );
}, 500);

formElement.addEventListener('input', event => {
  handleInput();
});

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(formElement);
  console.log(Object.fromEntries(formData.entries()));
  formElement.reset();
}

formElement.addEventListener('submit', event => {
  handleSubmit(event);
});

function fillFormFields() {
  let savedValues = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedValues) {
    emailInput.value = savedValues.email;
    messageInput.value = savedValues.message;
  }
}
