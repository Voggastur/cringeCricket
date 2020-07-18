// Materialize functions
$(document).ready(function () {
  $(".modal").modal();
  $("select#adventure").formSelect();
  $("#possessions").characterCounter();

  // My functions
  const slider = document.querySelector(".slider");
  M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000,
  });
  $(".card").click(function () {
    $(".materialboxed").materialbox();
  });
  //  $(".materialboxed").onOpenStart()
  //  $(".materialboxed").onCloseStart()

  //
  //    $(this).wrap( "<div class='hero_wrap'></div>" );
  //    $(".hero_wrap").css("transition", "all 0.5s ease").css("position", "absolute").css("width", "100vw").css("height", "100vh").css("background-color", "#000");
  //    $(this).css("transition", "all 0.5 ease").css("position", "absolute").css("width", "75vw").css("height", "75vh").css("z-index", "2");
  //    $(this).find(".card-items p").css("transition", "all 0.5s ease").css("display", "block").css("visibility", "visible");
});
