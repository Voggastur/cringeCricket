// Materialize functions
$(document).ready(function () {
  $(".modal").modal();
  $("select#adventure").formSelect();
  $("#possessions").characterCounter();
  // Materialize materialbox() with my options
  $(".materialboxed").materialbox({
    inDuration: 200,
    outDuration: 200,
    onOpenEnd: function () {
      $(".materialboxed").find("p").removeClass(".visibility");
    },
    onCloseStart: function () {
      $(".materialboxed").find("p").addClass(".visibility");
    },
  });
  // This function limits input in possessions which tend to be longer
  const textLimitPossess = 80;
  $("textarea#possessions").keyup(function () {
    var tlength = $(this).val().length;
    $(this).val($(this).val().substring(0, textLimitPossess));
    var tlength = $(this).val().length;
    remain = textLimitPossess - parseInt(tlength);
    $("#remain").text(remain);
  });
  // This function limits input in adventure_topic which tend to be longer
  const textLimitAdventure = 200;
  $("textarea#adventure_topic").keyup(function () {
    var tlength = $(this).val().length;
    $(this).val($(this).val().substring(0, textLimitAdventure));
    var tlength = $(this).val().length;
    remain = textLimitAdventure - parseInt(tlength);
    $("#remain").text(remain);
  });
  // My functions
  const slider = document.querySelector(".slider");
  M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000,
  });

  // $("#div_id").prop("maxlength", "80");
  //  $(".materialboxed").onCloseStart()
  //    $(this).wrap( "<div class='hero_wrap'></div>" );
  //    $(".hero_wrap").css("transition", "all 0.5s ease").css("position", "absolute").css("width", "100vw").css("height", "100vh").css("background-color", "#000");

  // onOpenEnd: function() {$(".card-items p", ".card-items span").removeClass("visibility").css("color", "#fff").css("position", "relative")},
});
