$(document).ready(function () {
  $(".carousel").carousel({ fullWidth: true });
  $(".sidenav").sidenav();
  $(".modal").modal();
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.getElementByClassName("body").style.background = "yellow";
