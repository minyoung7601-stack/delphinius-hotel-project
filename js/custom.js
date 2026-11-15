$(function () {
  // 모달창
  $("#sec3 #con02 ul .one").on("click", function () {
    $("#sec3 #con03").addClass("on");
    $("#sec3 #con03 ul .one1").css({ display: "block" });
  });

  $("#sec3 #con03 a").on("click", function (e) {
    e.preventDefault();
    $("#sec3 #con03").removeClass("on");
    $("#sec3 #con03 ul .one1").css({ display: "none" });
  });
  $("#sec3 #con02 ul .two").on("click", function () {
    $("#sec3 #con03").addClass("on");
    $("#sec3 #con03 ul .two1").css({ display: "block" });
  });

  $("#sec3 #con03 a").on("click", function (e) {
    e.preventDefault();
    $("#sec3 #con03").removeClass("on");
    $("#sec3 #con03 ul .two1").css({ display: "none" });
  });
  $("#sec3 #con02 ul .three").on("click", function () {
    $("#sec3 #con03").addClass("on");
    $("#sec3 #con03 ul .three1").css({ display: "block" });
  });

  $("#sec3 #con03 a").on("click", function (e) {
    e.preventDefault();
    $("#sec3 #con03").removeClass("on");
    $("#sec3 #con03 ul .three1").css({ display: "none" });
  });
  $("#sec3 #con02 ul .four").on("click", function () {
    $("#sec3 #con03").addClass("on");
    $("#sec3 #con03 ul .four1").css({ display: "block" });
  });

  $("#sec3 #con03 a").on("click", function (e) {
    e.preventDefault();
    $("#sec3 #con03").removeClass("on");
    $("#sec3 #con03 ul .four1").css({ display: "none" });
  });
  $("#sec3 #con02 ul .five").on("click", function () {
    $("#sec3 #con03").addClass("on");
    $("#sec3 #con03 ul .five1").css({ display: "block" });
  });

  $("#sec3 #con03 a").on("click", function (e) {
    e.preventDefault();
    $("#sec3 #con03").removeClass("on");
    $("#sec3 #con03 ul .five1").css({ display: "none" });
  });
  $("#sec3 #con02 ul .six").on("click", function () {
    $("#sec3 #con03").addClass("on");
    $("#sec3 #con03 ul .six1").css({ display: "block" });
  });

  $("#sec3 #con03 a").on("click", function (e) {
    e.preventDefault();
    $("#sec3 #con03").removeClass("on");
    $("#sec3 #con03 ul .six1").css({ display: "none" });
  });
  $("#sec3 #con02 ul .seven").on("click", function () {
    $("#sec3 #con03").addClass("on");
    $("#sec3 #con03 ul .seven1").css({ display: "block" });
  });

  $("#sec3 #con03 a").on("click", function (e) {
    e.preventDefault();
    $("#sec3 #con03").removeClass("on");
    $("#sec3 #con03 ul .seven1").css({ display: "none" });
  });
  $("#sec3 #con02 ul .eight").on("click", function () {
    $("#sec3 #con03").addClass("on");
    $("#sec3 #con03 ul .eight1").css({ display: "block" });
  });

  $("#sec3 #con03 a").on("click", function (e) {
    e.preventDefault();
    $("#sec3 #con03").removeClass("on");
    $("#sec3 #con03 ul .eight1").css({ display: "none" });
  });
  $("#sec3 #con02 ul .nine").on("click", function () {
    $("#sec3 #con03").addClass("on");
    $("#sec3 #con03 ul .nine1").css({ display: "block" });
  });

  $("#sec3 #con03 a").on("click", function (e) {
    e.preventDefault();
    $("#sec3 #con03").removeClass("on");
    $("#sec3 #con03 ul .nine1").css({ display: "none" });
  });
  $("#sec3 #con02 ul .ten").on("click", function () {
    $("#sec3 #con03").addClass("on");
    $("#sec3 #con03 ul .ten1").css({ display: "block" });
  });

  $("#sec3 #con03 a").on("click", function (e) {
    e.preventDefault();
    $("#sec3 #con03").removeClass("on");
    $("#sec3 #con03 ul .ten1").css({ display: "none" });
  });
  // 넘어가기
  $("#sec3 #con03 a").on("click", function () {
    $("#sec3 #con03").removeClass("on");
  });
  $("#sec3 #con02 .right").on("click", function () {
    $("#sec3 #con02 ul")
      .stop()
      .animate({ "margin-left": "-300px" }, function () {
        $("#sec3 #con02 li:first-child").appendTo("#sec3 #con02 ul");
        $("#sec3 #con02 ul").css({ "margin-left": "0px" });
      });
  });

  $("#sec3 #con02 .left").on("click", function () {
    $("#sec3 #con02 li:last-child").prependTo("#sec3 #con02 ul");
    $("#sec3 #con02 ul").css({ "margin-left": "-300px" });
    $("#sec3 #con02 ul").stop().animate({ "margin-left": "0px" });
  });

  function win() {
    let w = $(window).width();

    if (w > 769) {
      $(window).on("scroll", function () {
        let scrollTop = $(window).scrollTop();
        let con02Top = $("#sec3 #con02").offset().top;

        let scrollArea = $("#sec3 #con02").height() - $(window).height();

        let maxMove = $("#sec3 #con02 ul").width() - $(window).width();

        if (scrollTop >= con02Top && scrollTop <= con02Top + scrollArea) {
          let move = scrollTop - con02Top;
          let percent = move / scrollArea;

          $("#sec3 #con02 ul").css(
            "transform",
            "translateX(" + -(percent * maxMove) + "px)",
          );
        }
      });
    }
  }
  win();
  $(window).on("resize", win);
  $(function () {
    function setLayout() {
      let w = $(window).width();

      if (w > 769) {
        // PC 초기 상태
        $("header ul").hide().css({
          display: "none",
          "font-size": "1.3rem",
          "font-weight": "600",
          "letter-spacing": "0.5px",
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
  $(".next").on("click", function () {
    $("#sec1 .wrap2 .imgbox ul").animate(
      { "margin-left": "-11%" },
      function () {
        $(".imgbox ul li:first-child").appendTo(".imgbox ul");
        $("#sec1 .wrap2 .imgbox ul").css({ "margin-left": "0" });
      },
    );
  });
  $(".prev").on("click", function () {
    $(".imgbox ul li:last-child").prependTo(".imgbox ul");
    $(".wrap2 .imgbox ul").css({ "margin-left": "-11%" });
    $("#sec1 .wrap2 .imgbox ul").stop().animate({ "margin-left": "0" });
  });
  page1 = $("#visual").offset().top;
  console.log(page1);
  page2 = $("#sec1").offset().top;
  console.log(page2);
  page3 = $("#sec2").offset().top;
  console.log(page3);
  page4 = $("#sec3").offset().top;
  console.log(page4);
  page5 = $("#sec4").offset().top;
  console.log(page1);
  page6 = $(".realmap").offset().top;
  console.log(page2);
  $(window).on("scroll", function () {
    let scroll = $(window).scrollTop();
    console.log(scroll);
    base = -300;
    plus = +200;
    basse = -500;
    if (scroll >= page1 + base && scroll < page2 + plus) {
      $("#sec1").addClass("off");
    } else if (scroll > page2 + plus) {
      $("#sec1").removeClass("off");
    }
    if (scroll >= page3 + base && scroll < page5 + basse) {
      $("#sec3").addClass("off");
    } else if (scroll > page5 + basse) {
      $("#sec3").removeClass("off");
    }
    if (scroll >= page4 && scroll < page5 + plus) {
      $("#sec4").addClass("off");
    } else if (scroll > page5) {
      $("#sec4").removeClass("off");
    }
  });
});
