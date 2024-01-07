import throttle from 'lodash.throttle';

//Selecting form and input fields
const formElement = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form [name="email"]');
const messageInput = document.querySelector('.feedback-form [name="message"]');

//Fill form inputs with local storage data if it's not empty
fillFormFields();

//Save values from inputs fields to local storage every 500ms
const handleInput = throttle(() => {
  const formData = new FormData(formElement);

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(Object.fromEntries(formData.entries()))
  );
}, 500);

//Set listener if user type something in the form fields
formElement.addEventListener('input', event => {
  handleInput();
});

//Show values of form fields in console and clean data
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(formElement);
  console.log(Object.fromEntries(formData.entries()));
  localStorage.removeItem('feedback-form-state');
  formElement.reset();
}

//Adds submit event listener to form
formElement.addEventListener('submit', event => {
  handleSubmit(event);
});

//Fill form inputs with local storage data if it's not empty
function fillFormFields() {
  let savedValues = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedValues) {
    emailInput.value = savedValues.email;
    messageInput.value = savedValues.message;
  }
}
