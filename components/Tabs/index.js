// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topics = document.querySelector('.topics')
axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(data => {
    console.log(data.data);
    const apiArray = data.data.topics;
    apiArray.forEach( el => {
        topics.appendChild(tabContent(el));
    })
})
.catch(error => {
    console.log(`We got an error`, error);
})

function tabContent(data) {
    const tab = document.createElement('div');
    tab.textContent = `${data}`;
    tab.classList.add('tab')

    return tab;
}