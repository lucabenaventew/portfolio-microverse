import cardData from './data.js';

const seeBtn = document.querySelectorAll('#projects button');
const body = document.querySelector('body');

for (let i = 0; i < seeBtn.length; i += 1) {
  seeBtn[i].addEventListener('click', () => {
    body.style.overflow = 'hidden'
    const modal = document.createElement('section');
    modal.id = 'modal';
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modalContainer');
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modalHeader');
    const modalHeaderLeft = document.createElement('div');
    modalHeaderLeft.classList.add('modalHeaderLeft');
    const modalHeaderLeftH2 = document.createElement('h2');
    modalHeaderLeftH2.textContent = cardData[i].Title;
    const modalHeaderLeftUl = document.createElement('ul');
    const modalHeaderLeftLi = cardData[i].Technologies;
    const modalHeaderRight = document.createElement('div');
    modalHeaderRight.classList.add('modalHeaderRight');
    const xBtn = document.createElement('i');
    xBtn.classList.add('fa-solid');
    xBtn.classList.add('fa-x');
    const modalContent = document.createElement('div');
    modalContent.classList.add('modalContent');
    const modalImg = document.createElement('img');
    modalImg.src = cardData[i].Image;
    const modalContentInfo = document.createElement('div');
    modalContentInfo.classList.add('modalContentInfo');
    const modalP = document.createElement('p');
    modalP.textContent = cardData[i].Description;
    const modalContentBtns = document.createElement('div');
    modalContentBtns.classList.add('modalContentBtns');
    const modalLive = document.createElement('a');
    modalLive.textContent = 'See Live';
    modalLive.href = cardData[i].demo_link;
    const modalLiveImg = document.createElement('img');
    modalLiveImg.src = './img/svg/live.svg';
    const modalSource = document.createElement('a');
    modalSource.textContent = 'See Live';
    modalSource.href = cardData[i].repo_link;
    const modalSourceImg = document.createElement('img');
    modalSourceImg.src = './img/svg/source.svg';

    xBtn.addEventListener('click', () => {
      modal.remove();
      body.style.overflow = 'visible';
    });

    modalHeaderLeftLi.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      modalHeaderLeftUl.appendChild(li);
    });

    body.appendChild(modal);
    modal.appendChild(modalContainer);
    modalContainer.appendChild(modalHeader);
    modalHeader.appendChild(modalHeaderLeft);
    modalHeaderLeft.appendChild(modalHeaderLeftH2);
    modalHeaderLeft.appendChild(modalHeaderLeftUl);
    modalHeader.appendChild(modalHeaderRight);
    modalHeaderRight.appendChild(xBtn);
    modalContainer.appendChild(modalContent);
    modalContent.appendChild(modalImg);
    modalContent.appendChild(modalContentInfo);
    modalContentInfo.appendChild(modalP);
    modalContentInfo.appendChild(modalContentBtns);
    modalContentBtns.appendChild(modalLive);
    modalLive.appendChild(modalLiveImg);
    modalContentBtns.appendChild(modalSource);
    modalSource.appendChild(modalSourceImg);
  });
}