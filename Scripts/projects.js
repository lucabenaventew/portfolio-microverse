import cardData from './data.js';

const projects = document.querySelector('#projects');
const btnContent = 'See Project'

projects.classList.add('recent_works_container')

const titleContainer = document.createElement('div');
const titleH1 = document.createElement('h1');
const titleLine = document.createElement('div');

titleH1.textContent = 'My Recent Works';
titleLine.classList.add('line');

projects.appendChild(titleContainer);
titleContainer.appendChild(titleH1);
titleContainer.appendChild(titleLine);

const figure = document.createElement('figure');
const figureImg = document.createElement('img');

figure.classList.add('mps');
projects.appendChild(figure);

figureImg.src = cardData[0].Image;
figure.appendChild(figureImg);

const figcaption = document.createElement('figcaption');
const figcaptionH1 = document.createElement('h1');
const figcaptionP = document.createElement('p');
const figcaptionUl = document.createElement('ul');
const figcaptionBtn = document.createElement('button');
const techUl = cardData[0].Technologies;

figcaptionH1.textContent = cardData[0].Title;
figcaptionP.textContent = cardData[0].Description;
figcaptionBtn.textContent = btnContent;

figure.appendChild(figcaption);
figcaption.appendChild(figcaptionH1);
figcaption.appendChild(figcaptionP);
figcaption.appendChild(figcaptionUl);
figcaption.appendChild(figcaptionBtn);

techUl.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  figcaptionUl.appendChild(li);
})

const worksGridContainer = document.createElement('div');
worksGridContainer.classList.add('works_grid_container')

projects.appendChild(worksGridContainer);

const cardHovered = document.createElement('div');
const cardHoveredBtn = document.createElement('button');

cardHovered.classList.add('card_hovered')
cardHoveredBtn.textContent = btnContent;

worksGridContainer.appendChild(cardHovered)
cardHovered.appendChild(cardHoveredBtn)

for (let i = 0; i < cardData.length; i++) {
  const card = document.createElement('div');
  card.classList.add('card');
  const cardContent = document.createElement('div');
  cardContent.classList.add('content');
  const cardContentH1 = document.createElement('h1');
  cardContentH1.textContent = cardData[i].Title
  const cardContentP = document.createElement('p');
  cardContentP.textContent = cardData[i].Description
  const cardContentUl = document.createElement('ul')
  const cardContentLi = cardData[i].Technologies;
  const cardContentBtn = document.createElement('button');
  cardContentBtn.textContent = btnContent;

  cardContentLi.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    cardContentUl.appendChild(li);
  })

  card.addEventListener('mouseover', function hoverCard() {
    cardContentH1.classList.toggle('opc-0')
    cardContentP.classList.toggle('opc-0')
    cardContentUl.classList.toggle('opc-0')
  })

  worksGridContainer.appendChild(card);
  card.appendChild(cardContent)
  cardContent.appendChild(cardContentH1)
  cardContent.appendChild(cardContentP)
  cardContent.appendChild(cardContentUl)
  cardContent.appendChild(cardContentBtn)
}