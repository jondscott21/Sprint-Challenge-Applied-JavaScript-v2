/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(carouselCreator());

function carouselCreator() {
  //creating elements
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const rightButton = document.createElement('div');

  //Adding content
  leftButton.textContent = ` < `;
  img1.src = `./assets/carousel/mountains.jpeg`;
  img2.src = `./assets/carousel/computer.jpeg`;
  img3.src = `./assets/carousel/trees.jpeg`;
  img4.src = `./assets/carousel/turntable.jpeg`;
  rightButton.textContent = ` > `;

  //adding classes
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  //adding data attributes
  img1.setAttribute('index', '1');
  img2.setAttribute('index', '2');
  img3.setAttribute('index', '3');
  img4.setAttribute('index', '4');
  // console.log(img1);

  //adding structure
  carousel.appendChild(leftButton);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightButton);


  //adding event listeners
  img1.addEventListener('load', () => img1.style.display = 'flex');
  leftButton.addEventListener('click', leftClicks)
  rightButton.addEventListener('click', rightClicks);

  return carousel;
}


let count = 1;
function leftClicks() {
  let currentImg = document.querySelector(`img[index='${count}']`);
  currentImg.style.display = 'none';
  count -= 1;
  if (count < 1) {
    count = 4;
  }
  let nextImg = document.querySelector(`img[index='${count}']`);
  nextImg.style.display = 'flex';
}

function rightClicks() {
  let currentImg = document.querySelector(`img[index='${count}']`);
  currentImg.style.display = 'none';
  count += 1;
  if (count > 4) {
    count = 1;
  }
  let nextImg = document.querySelector(`img[index='${count}']`);
  nextImg.style.display = 'flex';
}