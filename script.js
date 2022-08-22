window.onload = toggleNav;
var disp;

function toggleNav(){

  disp = document.getElementById("sidenav");
  if (disp.style.display == "none") {
    disp.style.display = "block";
  } else {
    disp.style.display = "none";
  }
}
