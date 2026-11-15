$(function () {
  function win() {
    let w = $(window).width();

    $(".small li").off("mouseenter mouseleave");

    if (w >= 1024) {
      $(".sec1 .right .small li").on("mouseenter", function () {
        let i = $(this).index();
        $(".sec1 .right .large li").stop(true, true).fadeOut();
        $(".sec1 .right .large li").eq(i).fadeIn();
        $(".sec1 .right .small li img").removeClass("on");
        $(".sec1 .right .small li img").eq(i).addClass("on");
      });
      $(".sec2 .right .small li").on("mouseenter", function () {
        let i = $(this).index();
        $(".sec2 .right .large li").stop(true, true).fadeOut();
        $(".sec2 .right .large li").eq(i).fadeIn();
        $(".sec2 .right .small li img").removeClass("on");
        $(".sec2 .right .small li img").eq(i).addClass("on");
      });
      $(".sec3 .right .small li").on("mouseenter", function () {
        let i = $(this).index();
        $(".sec3 .right .large li").stop(true, true).fadeOut();
        $(".sec3 .right .large li").eq(i).fadeIn();
        $(".sec3 .right .small li img").removeClass("on");
        $(".sec3 .right .small li img").eq(i).addClass("on");
      });
      $(".sec4 .right .small li").on("mouseenter", function () {
        let i = $(this).index();
        $(".sec4 .right .large li").stop(true, true).fadeOut();
        $(".sec4 .right .large li").eq(i).fadeIn();
        $(".sec4 .right .small li img").removeClass("on");
        $(".sec4 .right .small li img").eq(i).addClass("on");
      });
    } else {
      $(".sec1 .right1 .small li").on("mouseenter", function () {
        let i = $(this).index();
        $(".sec1 .right1 .large li").stop(true, true).fadeOut();
        $(".sec1 .right1 .large li").eq(i).fadeIn();
        $(".sec1 .right1 .small li img").removeClass("on");
        $(".sec1 .right1 .small li img").eq(i).addClass("on");
      });
      $(".sec2 .right .small li").on("mouseenter", function () {
        let i = $(this).index();
        $(".sec2 .right .large li").stop(true, true).fadeOut();
        $(".sec2 .right .large li").eq(i).fadeIn();
        $(".sec2 .right .small li img").removeClass("on");
        $(".sec2 .right .small li img").eq(i).addClass("on");
      });
      $(".sec3 .right1 .small li").on("mouseenter", function () {
        let i = $(this).index();
        $(".sec3 .right1 .large li").stop(true, true).fadeOut();
        $(".sec3 .right1 .large li").eq(i).fadeIn();
        $(".sec3 .right1 .small li img").removeClass("on");
        $(".sec3 .right1 .small li img").eq(i).addClass("on");
      });
      $(".sec4 .right .small li").on("mouseenter", function () {
        let i = $(this).index();
        $(".sec4 .right .large li").stop(true, true).fadeOut();
        $(".sec4 .right .large li").eq(i).fadeIn();
        $(".sec4 .right .small li img").removeClass("on");
        $(".sec4 .right .small li img").eq(i).addClass("on");
      });
    }

    $(".small li").on("mouseleave", function () {
      $(this).closest("[class^='sec']").find(".small img").removeClass("on");
    });
  }

  win();
  $(window).on("resize", win);
  $(".sec1 span, .sec5").on("mouseenter", function () {
    $(this).css({ color: "white" });
  });
  $(".sec1 span, .sec5").on("mouseleave", function () {
    $(this).css({ color: "#888" });
  });
  $(".sec2 span, .sec5").on("mouseenter", function () {
    $(this).css({ color: "white" });
  });
  $(".sec2 span, .sec5").on("mouseleave", function () {
    $(this).css({ color: "#888" });
  });
  $(".sec3 span, .sec5").on("mouseenter", function () {
    $(this).css({ color: "white" });
  });
  $(".sec3 span, .sec5").on("mouseleave", function () {
    $(this).css({ color: "#888" });
  });
  $(".sec4 span, .sec5").on("mouseenter", function () {
    $(this).css({ color: "white" });
  });
  $(".sec4 span, .sec5").on("mouseleave", function () {
    $(this).css({ color: "#888" });
  });

  $(window).on("resize", win);
  $(function () {
    function setLayout() {
      let w = $(window).width();

      if (w > 769) {
        // PC 초기 상태
        $("header ul").hide().css({
          display: "none",
          "font-size": "1rem",
        });
        $("header").removeClass("onn");
      } else {
        // 모바일 초기 상태
        $("header ul").hide();
        $("header").removeClass("onn");
      }
    }

    function headerScroll() {
      // ⭐ 기존 header scroll 제거 (핵심)
      $(window).off("scroll.header");

      // ⭐ 새로 등록
      $(window).on("scroll.header", function () {
        let w = $(window).width();
        let nav = $(this).scrollTop();

        if (w > 769) {
          if (nav >= 200) {
            $("header ul").stop(true, true).fadeIn().css("display", "flex");
            $("header").addClass("onn");
          } else {
            $("header ul").stop(true, true).hide();
            $(".menubar").css("display", "block");
            $("header").removeClass("onn");
          }
        }
      });
    }

    // 최초 실행
    setLayout();
    headerScroll();

    // 리사이즈 대응 (⭐ 이게 중요)
    $(window).on("resize", function () {
      setLayout();
      headerScroll(); // 다시 등록
    });

    // 메뉴 버튼
    $(".menubar i").on("click", function () {
      let w = $(window).width();

      if (w > 769) {
        $("#menu")
          .stop()
          .animate({ right: "1rem" }, 300)
          .animate({ right: "0px" }, 300);

        $("header ul").hide();
        $("header").removeClass("onn");
      } else {
        $("#menu").stop().animate({ right: "0px" }, 300);
      }
    });

    // 메뉴 닫기
    $("#menu i").on("click", function () {
      $("#menu").stop().animate({ right: "-1000px" }, 300);
    });
  });
});
