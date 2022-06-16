import cardData from './data.js';
import cardData1 from './data1.js';

const body = document.querySelector('body');

const btnM2 = document.querySelector('.btn-2');
const btnM1 = document.querySelector('.btn-1');
const btn0 = document.querySelector('.boton0');
const btn1 = document.querySelector('.boton1');
const btn2 = document.querySelector('.boton2');
const btn3 = document.querySelector('.boton3');
const btn4 = document.querySelector('.boton4');

btnM2.addEventListener('click', () => {
  body.style.overflow = 'hidden';
  const modal = document.createElement('section');
  modal.id = 'modal';
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal_container');
  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal_header');
  const modalHeaderLeft = document.createElement('div');
  modalHeaderLeft.classList.add('modal_header_left');
  const modalHeaderLeftH2 = document.createElement('h2');
  modalHeaderLeftH2.textContent = cardData1[0].Title;
  const modalHeaderLeftUl = document.createElement('ul');
  const modalHeaderLeftLi = cardData1[0].Technologies;
  const modalHeaderRight = document.createElement('div');
  modalHeaderRight.classList.add('modal_header_right');
  const xBtn = document.createElement('i');
  xBtn.classList.add('fa-solid');
  xBtn.classList.add('fa-x');
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal_content');
  const modalImg = document.createElement('img');
  modalImg.src = cardData1[0].Image;
  const modalContentInfo = document.createElement('div');
  modalContentInfo.classList.add('modal_content_info');
  const modalP = document.createElement('p');
  modalP.textContent = cardData1[0].Description;
  const modalContentBtns = document.createElement('div');
  modalContentBtns.classList.add('modal_content_btns');
  const modalLive = document.createElement('a');
  modalLive.textContent = 'See Live';
  modalLive.href = cardData1[0].demo_link;
  const modalLiveImg = document.createElement('img');
  modalLiveImg.src = './img/svg/live.svg';
  const modalSource = document.createElement('a');
  modalSource.textContent = 'See Live';
  modalSource.href = cardData1[0].repo_link;
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

btnM1.addEventListener('click', () => {
  body.style.overflow = 'hidden';
  const modal = document.createElement('section');
  modal.id = 'modal';
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal_container');
  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal_header');
  const modalHeaderLeft = document.createElement('div');
  modalHeaderLeft.classList.add('modal_header_left');
  const modalHeaderLeftH2 = document.createElement('h2');
  modalHeaderLeftH2.textContent = cardData1[1].Title;
  const modalHeaderLeftUl = document.createElement('ul');
  const modalHeaderLeftLi = cardData1[1].Technologies;
  const modalHeaderRight = document.createElement('div');
  modalHeaderRight.classList.add('modal_header_right');
  const xBtn = document.createElement('i');
  xBtn.classList.add('fa-solid');
  xBtn.classList.add('fa-x');
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal_content');
  const modalImg = document.createElement('img');
  modalImg.src = cardData1[1].Image;
  const modalContentInfo = document.createElement('div');
  modalContentInfo.classList.add('modal_content_info');
  const modalP = document.createElement('p');
  modalP.textContent = cardData1[1].Description;
  const modalContentBtns = document.createElement('div');
  modalContentBtns.classList.add('modal_content_btns');
  const modalLive = document.createElement('a');
  modalLive.textContent = 'See Live';
  modalLive.href = cardData1[1].demo_link;
  const modalLiveImg = document.createElement('img');
  modalLiveImg.src = './img/svg/live.svg';
  const modalSource = document.createElement('a');
  modalSource.textContent = 'See Live';
  modalSource.href = cardData1[1].repo_link;
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

btn0.addEventListener('click', () => {
  body.style.overflow = 'hidden';
  const modal = document.createElement('section');
  modal.id = 'modal';
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal_container');
  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal_header');
  const modalHeaderLeft = document.createElement('div');
  modalHeaderLeft.classList.add('modal_header_left');
  const modalHeaderLeftH2 = document.createElement('h2');
  modalHeaderLeftH2.textContent = cardData[0].Title;
  const modalHeaderLeftUl = document.createElement('ul');
  const modalHeaderLeftLi = cardData[0].Technologies;
  const modalHeaderRight = document.createElement('div');
  modalHeaderRight.classList.add('modal_header_right');
  const xBtn = document.createElement('i');
  xBtn.classList.add('fa-solid');
  xBtn.classList.add('fa-x');
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal_content');
  const modalImg = document.createElement('img');
  modalImg.src = cardData[0].Image;
  const modalContentInfo = document.createElement('div');
  modalContentInfo.classList.add('modal_content_info');
  const modalP = document.createElement('p');
  modalP.textContent = cardData[0].Description;
  const modalContentBtns = document.createElement('div');
  modalContentBtns.classList.add('modal_content_btns');
  const modalLive = document.createElement('a');
  modalLive.textContent = 'See Live';
  modalLive.href = cardData[0].demo_link;
  const modalLiveImg = document.createElement('img');
  modalLiveImg.src = './img/svg/live.svg';
  const modalSource = document.createElement('a');
  modalSource.textContent = 'See Live';
  modalSource.href = cardData[0].repo_link;
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

btn1.addEventListener('click', () => {
  body.style.overflow = 'hidden';
  const modal = document.createElement('section');
  modal.id = 'modal';
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal_container');
  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal_header');
  const modalHeaderLeft = document.createElement('div');
  modalHeaderLeft.classList.add('modal_header_left');
  const modalHeaderLeftH2 = document.createElement('h2');
  modalHeaderLeftH2.textContent = cardData[1].Title;
  const modalHeaderLeftUl = document.createElement('ul');
  const modalHeaderLeftLi = cardData[1].Technologies;
  const modalHeaderRight = document.createElement('div');
  modalHeaderRight.classList.add('modal_header_right');
  const xBtn = document.createElement('i');
  xBtn.classList.add('fa-solid');
  xBtn.classList.add('fa-x');
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal_content');
  const modalImg = document.createElement('img');
  modalImg.src = cardData[1].Image;
  const modalContentInfo = document.createElement('div');
  modalContentInfo.classList.add('modal_content_info');
  const modalP = document.createElement('p');
  modalP.textContent = cardData[1].Description;
  const modalContentBtns = document.createElement('div');
  modalContentBtns.classList.add('modal_content_btns');
  const modalLive = document.createElement('a');
  modalLive.textContent = 'See Live';
  modalLive.href = cardData[1].demo_link;
  const modalLiveImg = document.createElement('img');
  modalLiveImg.src = './img/svg/live.svg';
  const modalSource = document.createElement('a');
  modalSource.textContent = 'See Live';
  modalSource.href = cardData[1].repo_link;
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

btn2.addEventListener('click', () => {
  body.style.overflow = 'hidden';
  const modal = document.createElement('section');
  modal.id = 'modal';
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal_container');
  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal_header');
  const modalHeaderLeft = document.createElement('div');
  modalHeaderLeft.classList.add('modal_header_left');
  const modalHeaderLeftH2 = document.createElement('h2');
  modalHeaderLeftH2.textContent = cardData[2].Title;
  const modalHeaderLeftUl = document.createElement('ul');
  const modalHeaderLeftLi = cardData[2].Technologies;
  const modalHeaderRight = document.createElement('div');
  modalHeaderRight.classList.add('modal_header_right');
  const xBtn = document.createElement('i');
  xBtn.classList.add('fa-solid');
  xBtn.classList.add('fa-x');
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal_content');
  const modalImg = document.createElement('img');
  modalImg.src = cardData[2].Image;
  const modalContentInfo = document.createElement('div');
  modalContentInfo.classList.add('modal_content_info');
  const modalP = document.createElement('p');
  modalP.textContent = cardData[2].Description;
  const modalContentBtns = document.createElement('div');
  modalContentBtns.classList.add('modal_content_btns');
  const modalLive = document.createElement('a');
  modalLive.textContent = 'See Live';
  modalLive.href = cardData[2].demo_link;
  const modalLiveImg = document.createElement('img');
  modalLiveImg.src = './img/svg/live.svg';
  const modalSource = document.createElement('a');
  modalSource.textContent = 'See Live';
  modalSource.href = cardData[2].repo_link;
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

btn3.addEventListener('click', () => {
  body.style.overflow = 'hidden';
  const modal = document.createElement('section');
  modal.id = 'modal';
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal_container');
  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal_header');
  const modalHeaderLeft = document.createElement('div');
  modalHeaderLeft.classList.add('modal_header_left');
  const modalHeaderLeftH2 = document.createElement('h2');
  modalHeaderLeftH2.textContent = cardData[3].Title;
  const modalHeaderLeftUl = document.createElement('ul');
  const modalHeaderLeftLi = cardData[3].Technologies;
  const modalHeaderRight = document.createElement('div');
  modalHeaderRight.classList.add('modal_header_right');
  const xBtn = document.createElement('i');
  xBtn.classList.add('fa-solid');
  xBtn.classList.add('fa-x');
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal_content');
  const modalImg = document.createElement('img');
  modalImg.src = cardData[3].Image;
  const modalContentInfo = document.createElement('div');
  modalContentInfo.classList.add('modal_content_info');
  const modalP = document.createElement('p');
  modalP.textContent = cardData[3].Description;
  const modalContentBtns = document.createElement('div');
  modalContentBtns.classList.add('modal_content_btns');
  const modalLive = document.createElement('a');
  modalLive.textContent = 'See Live';
  modalLive.href = cardData[3].demo_link;
  const modalLiveImg = document.createElement('img');
  modalLiveImg.src = './img/svg/live.svg';
  const modalSource = document.createElement('a');
  modalSource.textContent = 'See Live';
  modalSource.href = cardData[3].repo_link;
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

btn4.addEventListener('click', () => {
  body.style.overflow = 'hidden';
  const modal = document.createElement('section');
  modal.id = 'modal';
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal_container');
  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal_header');
  const modalHeaderLeft = document.createElement('div');
  modalHeaderLeft.classList.add('modal_header_left');
  const modalHeaderLeftH2 = document.createElement('h2');
  modalHeaderLeftH2.textContent = cardData[4].Title;
  const modalHeaderLeftUl = document.createElement('ul');
  const modalHeaderLeftLi = cardData[4].Technologies;
  const modalHeaderRight = document.createElement('div');
  modalHeaderRight.classList.add('modal_header_right');
  const xBtn = document.createElement('i');
  xBtn.classList.add('fa-solid');
  xBtn.classList.add('fa-x');
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal_content');
  const modalImg = document.createElement('img');
  modalImg.src = cardData[4].Image;
  const modalContentInfo = document.createElement('div');
  modalContentInfo.classList.add('modal_content_info');
  const modalP = document.createElement('p');
  modalP.textContent = cardData[4].Description;
  const modalContentBtns = document.createElement('div');
  modalContentBtns.classList.add('modal_content_btns');
  const modalLive = document.createElement('a');
  modalLive.textContent = 'See Live';
  modalLive.href = cardData[4].demo_link;
  const modalLiveImg = document.createElement('img');
  modalLiveImg.src = './img/svg/live.svg';
  const modalSource = document.createElement('a');
  modalSource.textContent = 'See Live';
  modalSource.href = cardData[4].repo_link;
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