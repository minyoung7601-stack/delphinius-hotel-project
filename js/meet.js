$(function () {
  function win() {
    let w = $(window).width();
    if (w > 769) {
      $("header ul").hide();
      $(window).on("scroll", function () {
        let nav = $(this).scrollTop();
        if (nav >= 200) {
          $("header ul").fadeIn().css("display", "flex");
          $("header").addClass("on");
        } else {
          $("header ul").hide();
          $(".menubar").css({ display: "block" });
          $("header").removeClass("on");
        }
      });
      $(".menubar i").on("click", function () {
        $(".menu")
          .stop()
          .animate({ right: "1rem" }, 300, function () {
            $(".menu").stop().animate({ right: "0px" }, 500);
          });
        $("header ul").hide();
        $("header").removeClass("on");
      });
      $(".menu i").on("click", function () {
        $(".menu")
          .stop()
          .animate({ right: "1rem" }, 300, function () {
            $(".menu").stop().animate({ right: "-1000px" }, 500);
          });
      });
    } else if (w < 768) {
      $("header ul").hide();
      $("header ul").css({ "font-size": "0px" });
      $(".menubar i").on("click", function () {
        $(".menu").stop().animate({ right: "0px" }, 500);
      });
      $(".menu i").on("click", function () {
        $(".menu").stop().animate({ right: "-1000px" }, 500);
      });
    }
  }
  win();
  $(window).resize(win);
});
