$(document).ready(function() {
  
  $("#goto-projects").click(function() {
    var loc= $("#projects").offset();
    $("body, html").animate({scrollTop: loc.top}, 1000);
  });
});