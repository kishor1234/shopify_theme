
//your window load function replace with below
$(document).ready(function() {
  if ($(window).width() < 500) {
        $("#testlay").fadeIn('fast').delay(5200).fadeOut(1000);
  }
    });
