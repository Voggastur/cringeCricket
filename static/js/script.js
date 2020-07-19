// Materialize functions
$(document).ready(function () {
  $(".modal").modal();
  $("select#adventure").formSelect();
  $("#possessions").characterCounter();
  $('.materialboxed').materialbox({
    inDuration:200,
    outDuration:200,
    onOpenEnd: function() {$(this).children("p", "span").removeClass(".visibility")},
    onCloseEnd: function() {$(this).children("p", "span").addClass(".visibility")}
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

  // onOpenEnd: function() {$(".card-items p", ".card-items span").removeClass("visibility").css("color", "#fff").css("position", "relative")},
});
