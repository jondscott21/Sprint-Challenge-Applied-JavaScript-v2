// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//creating a references point for the tabs to attach to
const topics = document.querySelector('.topics')

// iteratating over an api object to add the content to the newly created elements
axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(data => {
    const apiArray = data.data.topics;
    apiArray.forEach( el => {
        topics.appendChild(tabContent(el));
    })
})
.catch(error => {
    console.log(`We got an error`, error);
})

//tab creation
function tabContent(data) {
    //create element
    const tab = document.createElement('div');

    //add text content
    tab.textContent = `${data}`;

    //add a class
    tab.classList.add('tab')

    return tab;
}