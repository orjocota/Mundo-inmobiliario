// Codigo para el menu "Active"//
const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length
for (let i =0; i<menuLength; i++){
    if(menuItem[i].href === currentLocation){
        menuItem[i].className = "active"

    }
}
//codigo del Menu Hamburgesa//

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("menu_visible");
})