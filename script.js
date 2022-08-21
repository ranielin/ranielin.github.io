window.onload = toggleNav;
var disp;
var bg;

function toggleNav(){
  bg = document.getElementById("content");
  disp = document.getElementById("sidenav");
  if (disp.style.display == "none") {
    disp.style.display = "block";
  } else {
    disp.style.display = "none";
  }
}
