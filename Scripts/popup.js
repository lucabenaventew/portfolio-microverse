import cardData from './data.js';

const seeBtn = document.querySelectorAll('#projects button');
const body = document.querySelector('body');

for (let i = 0; i < seeBtn.length; i += 1) {
  seeBtn[i].addEventListener('click', () => {
    body.style.overflow = 'hidden'
    const modal = document.createElement('section');
    modal.id = 'modal';
    const modal_container = document.createElement('div');
    modal_container.classList.add('modal_container');
    const modal_header = document.createElement('div');
    modal_header.classList.add('modal_header');
    const modal_header_left = document.createElement('div');
    modal_header_left.classList.add('modal_header_left');
    const modal_header_leftH2 = document.createElement('h2');
    modal_header_leftH2.textContent = cardData[i].Title;
    const modal_header_leftUl = document.createElement('ul');
    const modal_header_leftLi = cardData[i].Technologies;
    const modal_header_right = document.createElement('div');
    modal_header_right.classList.add('modal_header_right');
    const xBtn = document.createElement('i');
    xBtn.classList.add('fa-solid');
    xBtn.classList.add('fa-x');
    const modal_content = document.createElement('div');
    modal_content.classList.add('modal_content');
    const modalImg = document.createElement('img');
    modalImg.src = cardData[i].Image;
    const modal_content_info = document.createElement('div');
    modal_content_info.classList.add('modal_content_info');
    const modalP = document.createElement('p');
    modalP.textContent = cardData[i].Description;
    const modal_content_btns = document.createElement('div');
    modal_content_btns.classList.add('modal_content_btns')
    const modalLive = document.createElement('a');
    modalLive.textContent = 'See Live';
    modalLive.href = cardData[i].demo_link
    const modalLiveImg = document.createElement('img');
    modalLiveImg.src = './img/svg/live.svg';
    const modalSource = document.createElement('a');
    modalSource.textContent = 'See Live';
    modalSource.href = cardData[i].repo_link
    const modalSourceImg = document.createElement('img');
    modalSourceImg.src = './img/svg/source.svg';

    xBtn.addEventListener('click', () => {
      modal.remove();
      body.style.overflow = 'visible';
    });

    modal_header_leftLi.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      modal_header_leftUl.appendChild(li);
    });

    body.appendChild(modal);
    modal.appendChild(modal_container);
    modal_container.appendChild(modal_header);
    modal_header.appendChild(modal_header_left);
    modal_header_left.appendChild(modal_header_leftH2)
    modal_header_left.appendChild(modal_header_leftUl)
    modal_header.appendChild(modal_header_right);
    modal_header_right.appendChild(xBtn);
    modal_container.appendChild(modal_content);
    modal_content.appendChild(modalImg);
    modal_content.appendChild(modal_content_info);
    modal_content_info.appendChild(modalP)
    modal_content_info.appendChild(modal_content_btns)
    modal_content_btns.appendChild(modalLive);
    modalLive.appendChild(modalLiveImg);
    modal_content_btns.appendChild(modalSource);
    modalSource.appendChild(modalSourceImg);
  })
}