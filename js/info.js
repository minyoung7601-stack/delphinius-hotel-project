$(function () {
  $(window).on("scroll", function () {
    let sc = $(this).scrollTop();

    $("#visual").toggleClass("on", sc >= 200);

    $(".scr1").toggleClass("on", sc >= 300);
    $(".scr2").toggleClass("on", sc >= 500);
    $(".scr3").toggleClass("on", sc >= 700);
    $(".scr4").toggleClass("on", sc >= 1100);
  });
});
