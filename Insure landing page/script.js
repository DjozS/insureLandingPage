const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.navButtons')
const closeBtn = document.querySelector('.closeBtn')
hamburger.addEventListener("click", function(){
    menu.style.display = "flex"
    hamburger.style.display = "none"
    closeBtn.display.style = "flex"
})
closeBtn.addEventListener("click", function(){
    closeBtn.style.display = "none";
    hamburger.style.display = "flex";
    menu.style.display = "none"
})