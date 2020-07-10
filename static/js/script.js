$(document).ready(function () {
  $(".modal").modal();
  $(".card").css("margin", "0, 20px").css("color", "white");
  $(".carousel").carousel();
  const slider = document.querySelector(".slider");
  M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000,
  });
});
