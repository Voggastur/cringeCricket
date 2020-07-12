$(document).ready(function () {
  $(".modal").modal();
  $(".carousel").carousel();
  $(".card").css("margin", "0, 20px").css("color", "white");
  const slider = document.querySelector(".slider");
  M.Slider.init(slider, {
    indicators: false,
    height: 600,
    transition: 500,
    interval: 6000,
  });
});
