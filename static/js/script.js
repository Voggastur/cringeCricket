// Materialize functions
$(document).ready(function () {
  $("select#adventure").formSelect();
  $("textarea").characterCounter();
  $(".modal").modal();
  $(".collapsible").collapsible({
      onOpenStart() {
          $(this).find(".target").removeClass("visibility"); // This makes my less important paragraphs visible on clicking card
          $(this).find("p", "h6", "i").addClass("transform-text"); // This class improves the readability of the text
      },
      onCloseStart() {
          $(this).find(".target").addClass("visibility"); // This makes my chosen paragraphs invisible again
          $(this).find("p", "h6", "i").removeClass("transform-text"); // Revert to normal text
      }
  });
  
  // Material slider function
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
  