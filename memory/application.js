$(document).ready(function(){
  event.preventDefault();
  var click_count = 0;
  var first_guess = 0;
  var second_guess = 0;
  $(".card").on("click", function() {
    $(this).find("p").css("opacity", 1);
    $(this).find("p").addClass("clicked");
    $("#guess").innerHTML(this.find("p").html());
    if (click_count == 0) {
      click_count = 1;
      first_guess = $(this).find("p").html();
      $("#guess").innerHTML(first_guess);
    }
    else {
      click_count = 0
      second_guess = $(this).find("p").html();
      if (first_guess != second_guess){
        };
      };
    });
  $("#clear").on("click", function() {
    $(".card p").css("opacity", 0);
  });
});
