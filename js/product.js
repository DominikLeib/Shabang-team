let mainPicture = document.querySelector("#main-picture");
let productName = document.querySelector(".product-name");
let productPrice = document.querySelector(".product-price");
let productDescription = document.querySelector(".product-description");

const urlParams = new URLSearchParams(window.location.search);
const idFromURL = urlParams.get("id");

/////////////? FETCHHHH
getThePlants()

function getThePlants() {

    fetch("http://dominikleib.xyz/PLANTEPLANETER/wordpress/wp-json/wp/v2/item?per_page=100")
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(setupPlants);

}

function setupPlants(plantsArray) {
    for (let i = 0; i < plantsArray.length + 1; i++) {
        console.log(plantsArray[i].id)
        console.log(plantsArray)
        console.log(idFromURL)
        if(plantsArray[i].id == idFromURL){
            mainPicture.src = `${plantsArray[i].imageurl}`;
            productName.textContent = `${plantsArray[i].productname}`
            productPrice.textContent = `${plantsArray[i].price}`
            /////////PRODUCT DESCRIPTION ALSO GOES HERE
        }
    }
}



let counter = 0


function relatedProducts(plantsArray) {
    if (counter < 7){
    const template = document.querySelector(".template").content;
    const parentElement = document.querySelector(".product");
    plantsArray.forEach(item => {
        const copy = template.cloneNode(true);
        copy.querySelector(".product-name").textContent = `${item.title.rendered}`;
        copy.querySelector(".product-price").textContent = `${item.price}`;
        console.log(item)
        copy.querySelector(".product-image").style.backgroundImage = `url(${item.imageurl})`
        console.log(item._links["wp:attachment"][0])
        // Setting up URL params for later on rendering item on product view depending on URL params
        copy.querySelector("a").setAttribute("href", "product.html?id=" + `${item.id}`);
        counter++
        parentElement.appendChild(copy);})
    }}
