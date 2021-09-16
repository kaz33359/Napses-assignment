$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  //console.log(scroll);
  if (scroll >= 50) {
    //console.log('a');
    $(".navbar").addClass("background");
  } else {
    //console.log('a');
    $(".navbar").removeClass("background");
  }
});
