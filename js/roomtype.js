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

  //visual
  $("#visual .wrap>li").on("mouseleave", function () {
    $(".list li").slideUp();
  });
  $("#visual .wrap>li").on("click", function () {
    $(this).find(".list li").slideDown();
    return false;
  });

  $(window).on("scroll", function () {
    let sc = $(this).scrollTop();
    let con01 = $(".con1").offset().top;
    let con02 = $(".con2").offset().top;
    let con03 = $(".con3").offset().top;
    let con04 = $(".con4").offset().top;
    // console.log(sc);
    let some = -300;
    if (sc >= 200 && sc <= con01) {
      $("#visual .text").fadeIn(1000);
    }
    if (sc >= con01 + some) {
      $(".con1").addClass("up");
    }
    if (sc >= con02 + some) {
      $(".con2").addClass("up");
    }
    if (sc >= con03 + some) {
      $(".con3").addClass("up");
    }
    if (sc >= con04 + some) {
      $(".con4").addClass("up");
    }
  });

  // container
  $("#container .large li").hide();
  $("#container .large li:first-child").show();

  $("#container .con1 .small li").on("click", function () {
    $("#container .con1 .small li").removeClass();
    $(this).addClass("on");

    let i = $(this).index();

    $(".con1 .large li").fadeOut();
    $(".con1 .large li").eq(i).fadeIn();

    return false;
  });
  $("#container .con2 .small li").on("click", function () {
    $("#container .con2 .small li").removeClass();
    $(this).addClass("on");

    let i = $(this).index();

    $(".con2 .large li").fadeOut();
    $(".con2 .large li").eq(i).fadeIn();

    return false;
  });
  $("#container .con3 .small li").on("click", function () {
    $("#container .con3 .small li").removeClass();
    $(this).addClass("on");

    let i = $(this).index();

    $(".con3 .large li").fadeOut();
    $(".con3 .large li").eq(i).fadeIn();

    return false;
  });
  $("#container .con4 .small li").on("click", function () {
    $("#container .con4 .small li").removeClass();
    $(this).addClass("on");

    let i = $(this).index();

    $(".con4 .large li").fadeOut();
    $(".con4 .large li").eq(i).fadeIn();

    return false;
  });
});
