$(document).ready(function() {
  $("header").slideDown(750, function() {
    $("#main-nav-bar").fadeIn("slow", function() {
      $("footer").fadeIn("slow");
    });
  });
});
