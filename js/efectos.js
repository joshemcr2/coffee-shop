$(document).ready(function () {
  $(".menu a").each(function (index, elemento) {
    $(this).css({
      top: "-200px",
    });
    $(this).animate({ top: "0" }, 2000 + index * 500);
  });

  if ($(window).width() > 800) {
    $("header .textos").css({
      opacity: 0,
      marginTop: 0,
    });
    $("header .textos").animate(
      {
        opacity: 1,
        marginTop: -52,
      },
      1500
    );
  }

  const acercaDe = $("#acerca-de").offset().top;

  $("#btn-acerca-de").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 480,
      },
      500
    );
  });
  const menu = $("#menu").offset().top;

  $("#btn-menu").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 1270,
      },
      500
    );
  });
  const galeria = $("#galeria").offset().top;

  $("#btn-galeria").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 2120,
      },
      500
    );
  });
  const ubicacion = $("#ubicacion").offset().top;

  $("#btn-ubicacion").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 3120,
      },
      500
    );
  });
});
