const openNavButton = document.getElementById("openNav");
const closeNavButton = document.getElementById("closeNav");
const sideNav = document.getElementById("mySidenav");

function openNav() {
  sideNav.style.width = "400px";
}

function closeNav() {
  sideNav.style.width = "0";
}
openNavButton.addEventListener("click", openNav);
closeNavButton.addEventListener("click", closeNav);