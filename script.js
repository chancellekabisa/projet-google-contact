var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* definir la  largeur de la  navigation latérale à 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* definir la  largeur de la  navigation latérale à  0 */
function closeNav() {
  sidenav.classList.remove("active");
}
/* Button créer un contact */

 