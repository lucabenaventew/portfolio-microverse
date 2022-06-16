const form = document.forms.contactForm;
const Name = form.elements[0];
const Email = form.elements[1];
const Message = form.elements[2];

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
    Email.value = inputValue.email;
    Message.value = inputValue.message;
  }
}

RetriveData();