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


