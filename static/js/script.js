// Materialize functions
$(document).ready(function () {
  $("select#adventure").formSelect();
  $("textarea").characterCounter();
  $(".modal").modal();
  // Materialize collapsible with options
  $(".collapsible").collapsible({
      onOpenStart() {
          $(this).find(".target").removeClass("visibility"); // This makes my less important paragraphs visible on clicking card
          $(this).find("p, h4, i").addClass("transform_text"); // This class improves the readability of the text
      },
      onCloseStart() {
          $(this).find(".target").addClass("visibility"); // This makes my chosen paragraphs invisible again
          $(this).find("p, h4, i").removeClass("transform_text"); // Revert to normal text
      }
  });
  
  // Materialize slider function
  let slider = document.querySelector(".slider");
  M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000,
  });
});

//    $('.modal').modal({
//        onOpenStart() {
//            console.log("Open Start");
//        },
//        onOpenEnd() {
//            console.log("Open End");
//        },
//        onCloseStart(){
//            console.log("Close Start");
//        },
//        onCloseEnd(){
//            console.log("Close End");
//        },
//    });
  