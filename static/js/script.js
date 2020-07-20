// Materialize functions
$(document).ready(function () {
  $("select#adventure").formSelect();
  $("textarea").characterCounter();
  $(".modal").modal();
  // Material slider function
    let slider = document.querySelector(".slider");
  M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000,
  });
  $(".card-items").click(function (){
      var clicks = 0;
      clicks += 1;
      console.log(clicks);
      if ($(clicks).odd()) {
          $(this).parent(".card").animate({
            "height": "+=250px"
          });
          $(this).find(".target").removeClass("visibility"); // This makes my less important paragraphs visible on clicking card
          $(this).find("p", "h6", "i").addClass("transform-text");
      }
      if ($(clicks).even()) {
        $(this).click(function (){
            $(this).parent(".card").animate({
            "height": "-=300px"
            });
          $(this).find(".target").addClass("visibility"); // This makes my less important paragraphs invisible again
          $(this).find("p", "h6", "i").removeClass("transform-text");
          });
      }
  });
});

    /*$(this).parent(".card").wrap("<div class='wrapper'></div>")
  });*/

//    $(this).wrap( "<div class='hero_wrap'></div>" );
//    $(".hero_wrap").css("transition", "all 0.5s ease").css("position", "absolute").css("width", "100vw").css("height", "100vh").css("background-color", "#000");
