//DECLARATIONS
let burgerMenuButton = document.querySelector(".burger-menu");
let mobileMenu = document.querySelector(".mobile-menu");
let overlay = document.querySelector("#overlay-mobile-menu")
let closeMobileMenu = document.querySelector(".close-mobile-menu");



//CLICK BURGER MENU -> MENU MOBILE APPEARS
burgerMenuButton.addEventListener("click" , function(){
    mobileMenu.style.left = "0"
    overlay.style.backgroundColor = "rgba(0, 0, 0, .5)"
    overlay.style.zIndex = "101"
})

//CLICK OVERLAY OR X AND COME BACK FROM MOBILE MENU
overlay.addEventListener("click" , function(){
    mobileMenu.style.left = "-70vw"
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)"
    setTimeout(() => {  overlay.style.zIndex = "initial" }, 1500);
})
//(((((((((((YOU CAN MAKE IT ONE FUNCTION AND CALL IT TWO TIMES)))))))))
closeMobileMenu.addEventListener("click" , function(){
    mobileMenu.style.left = "-70vw"
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)"
    setTimeout(() => {  overlay.style.zIndex = "initial" }, 1500);
})




//Keeping the height of circle according to width of screen
window.addEventListener('resize', function(){
    let tileHeight = document.getElementById('.navigation-tiles-container').clientHeight;
    let halfOfHeight = tileHeight / 2;
    console.log(halfOfHeight)
    docoument.querySelector(".navigation-circle-tile").style.marginTop = halfOfHeight;
});


/////////////? FETCHHHH
getThePlants()

function getThePlants() {

    fetch("http://dominikleib.xyz/PLANTEPLANETER/wordpress/wp-json/wp/v2/item?per_page=100")
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(setupPlants);

}

function setupPlants(plantsArray) {
    const template = document.querySelector(".template").content;
    const parentElement = document.querySelector(".product");
    plantsArray.forEach(item => {
        const copy = template.cloneNode(true);
        copy.querySelector(".product-name").textContent = `${item.title.rendered}`;
        copy.querySelector(".product-price").textContent = `${item.price}`;
        console.log(item.guid.rendered)
        copy.querySelector(".product-image").style.backgroundImage = `url(${item.firstpicture})`
        console.log(item._links["wp:attachment"][0])
        // Setting up URL params for later on rendering item on product view depending on URL params
        copy.querySelector("a").setAttribute("href", "product.html?id=" + `${item.id}`);

        parentElement.appendChild(copy);
    })
}