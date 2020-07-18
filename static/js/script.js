// Materialize functions
$(document).ready(function () {
  $(".modal").modal();
  $("select#adventure").formSelect();
  $("#possessions").characterCounter();
  $(".materialboxed").materialbox(function {
    $(".card").onOpenStart(function() {
        $(this).find("p").css("transition", "all 0.5s ease").css("display", "block").css("visibility", "visible");
        });
    });
  
  // My functions
  const slider = document.querySelector(".slider");
  M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000,
  });
  
  //  $(".materialboxed").onCloseStart()
  //    $(this).wrap( "<div class='hero_wrap'></div>" );
  //    $(".hero_wrap").css("transition", "all 0.5s ease").css("position", "absolute").css("width", "100vw").css("height", "100vh").css("background-color", "#000");

});
