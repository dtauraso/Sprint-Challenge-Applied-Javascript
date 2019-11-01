// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(headerObject) {

    let date = headerObject.date
    let header1 = headerObject.header1
    let temp = headerObject.temp

    let header = document.createElement("div")
    let dateSpan = document.createElement("span")
    let header1Tag = document.createElement("h1")
    let tempSpan = document.createElement("span")
    
    header.append(dateSpan,
                header1Tag,
                tempSpan)
    
    header.classList.add("header")
    dateSpan.classList.add("date")
    tempSpan.classList.add("temp")

    dateSpan.textContent = date
    header1Tag.textContent = header1
    tempSpan.textContent = temp

    return header
}


let headerSelector = document.querySelector(".header-container")

headerSelector.appendChild(Header({
    date: "SMARCH 28, 2019",
    header1: "Lambda Times",
    temp: "98"
}))