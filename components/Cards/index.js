// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(data => {
    const articlesArray = Object.values(data.data.articles);
    // console.log(Object.values(data.data.articles));
    articlesArray.forEach(el => {
        el.forEach(item => {
            console.log(item);
            cardsContainer.append(articleCreator(item));
        });
    });
})
.catch(error => {
    console.log(`error`, error);
})

function articleCreator(data) {
    //element creation
    const card = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');

    //adding textcontent
    cardHeadline.textContent = data.headline;
    img.src = data.authorPhoto;
    authorName.textContent = data.authorName;

    //adding classes
    card.classList.add('card');
    cardHeadline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    //adding structure
    card.appendChild(cardHeadline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(authorName);

    return card;

}