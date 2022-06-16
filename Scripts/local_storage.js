const form = document.forms.contactForm;
const Name = form.elements.fullName;
const Email = form.elements.userEmail;
const Message = form.elements.userMessage;

form.addEventListener('input', (e) => {
  const formInput = {
    name: Name.value,
    email: Email.value,
    message: Message.value,
  };
  formInput[e.target.id] = form.elements[e.target.id].value;
  localStorage.setItem('Data', JSON.stringify(formInput));
});

function RetriveData() {
  if (localStorage.getItem('Data')) {
    const inputValue = JSON.parse(localStorage.getItem('Data'));
    Name.value = inputValue.name;
    LastName.value = inputValue.lastName;
    Email.value = inputValue.email;
    Message.value = inputValue.message;
  }
}

RetriveData();