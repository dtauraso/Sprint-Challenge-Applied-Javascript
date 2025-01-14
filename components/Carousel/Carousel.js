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

function Carousel(images) {

  let carousel = document.createElement("div")
  let leftButton = document.createElement("div")
  let rightButton = document.createElement("div")

  carousel.classList.add("carousel")

  carousel.appendChild(leftButton)

  leftButton.classList.add("left-button")
  leftButton.textContent = "left"
  leftButton.addEventListener("click", (event) => {
    console.log("left clicked")
  })


  images.forEach(imageUrl => {
    let image = document.createElement("img")
    image.src = imageUrl
    carousel.appendChild(image)
  })

  carousel.appendChild(rightButton)
  rightButton.classList.add("right-button")

  rightButton.textContent = "right"
  rightButton.addEventListener("click", (event) => {
    console.log("right clicked")
  })
  return carousel
}


let carouselSelector = document.querySelector(".carousel-container")

carouselSelector.appendChild(Carousel([
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
]))
