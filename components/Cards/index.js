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



// FEEDBACK
// make it clear each 'article' is not a topic of articles(as suggested in the data fetch).
// That makes it confusing.

// It's also possible to use only forEach for making the articles

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response)
        let articleSelector = document.querySelector(".cards-container")
        let articles = response.data.articles
        // we can't do a forEach directly with articles, but we can if we
        // do a forEach with the key array Object.keys() returns
        let keys = Object.keys(articles)
        // console.log(keys)
        keys.forEach(key => {
            // console.log(key, response.data.articles[key])
            // articles[key] would also be used for a for loop
            articles[key].forEach(card => {
                console.log(key, card)
                articleSelector.appendChild(Card(card))

            })
            // Oops...frogot the for loop..

        })

    })
    .catch(error => {
        console.log(error.message)
    })
// put the keys into an array
// run foreach with the keys and foreach with each article[key]

// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>

function Card(cardObject) {

    let headline = cardObject.headline
    let authorsImage = cardObject.authorPhoto
    let authorsName = cardObject.authorName

    let card = document.createElement("div")
    let headlineDiv = document.createElement("div")
    let authorDiv = document.createElement("div")
    let imageDiv = document.createElement("div")
    let image = document.createElement("img")

    let authorsNameSpan = document.createElement("span")

    card.append(headlineDiv,
                authorDiv,
                authorsNameSpan)
    authorDiv.append(imageDiv)
    imageDiv.append(image)

    card.classList.add("card")
    headlineDiv.classList.add("headline")
    authorDiv.classList.add("author")
    imageDiv.classList.add("img-container")

    headlineDiv.textContent = headline
    image.setAttribute("src", authorsImage)
    authorsNameSpan.textContent = `By ${authorsName}`

    return card
    
}