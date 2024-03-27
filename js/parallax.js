$(document).ready(function () {
  $(window).scroll(function () {
    let windowWidth = $(window).width();

    if (windowWidth > 800) {
      const scroll = $(window).scrollTop();
      $("header .textos").css({
        transform: "translate(0px, " + scroll / 2 + "%)",
      });
      $(".acerca-de article").css({
        transform: "translate(0px, -" + scroll / 4 + "%)",
      });
    }
  });
});
