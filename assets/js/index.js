$(document).ready(function () {
  $(".nav-toggler").each(function (_, navToggler) {
    var target = $(navToggler).data("target");
    $(navToggler).on("click", function () {
      $(target).animate({
        height: "toggle",
      });
    });
  });
});

setTimeout(function () {
  $("#type").typed({
    strings: ["Junior Web Developer", "Junior Mobile Developer"],
    loop: true,
    showCursor: false,
    typeSpeed: 50,
    contentType: "html",
  });
}, 500);

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 200);
    return false;
  });
});
