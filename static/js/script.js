$(document).ready(function () {
  $(".modal").modal();
  $('select').formSelect();
  const slider = document.querySelector(".slider");
  M.Slider.init(slider, {
    indicators: false,
    height: 400,
    transition: 500,
    interval: 6000,
  });
});
