const data = document.querySelectorAll('#Form-form input, #Form-form textarea');
const error = document.querySelectorAll('#Form-form small');
const form = document.querySelector('#Form-form');

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  data[2].value = 'Sent from my mobile phone';
}

form.addEventListener('submit', (e) => {
  for (let a = 0; a < data.length; a += 1) {
    if (data[i].value === '') {
      e.preventDefault();
      data[i].classList.add('error');
      error[i].textContent = `Fill ${data[i].getAttribute('placeholder')} field first`;
      error[3].textContent = `Fill ${data[i].getAttribute('placeholder')} field first`;
      break;
    }
    if (data[i].value != '') {
      data[i].classList.remove('error');
      error[i].textContent = '';
      error[3].textContent = '';
    }
  }

  if (data[].value.toLowerCase() != data[1].value) {
    e.preventDefault();
    data[1].classList.add('error');
    error[3].textContent = 'Email cant contain upercase';
    e.preventDefault();
  } else {
    error[1].textContent = '';
    data[1].classList.remove('error');
  }
});