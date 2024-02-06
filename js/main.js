$(window).on("load", function () {
  // Loading
  $(".box_loading")
    .delay(0)
    .fadeOut("slow", function () {
      $(this).remove().fadeOut();
    });

  // Navbar On Scroll
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("nav").addClass("nav-fixed");
    } else {
      $("nav").removeClass("nav-fixed");
    }
  });

  //  Slider (Owl-Carousel)
  $("#owl-slider").each(function () {
    $("#owl-slider").owlCarousel({
      loop: true,
      dots: false,
      autoplay: true,
      lazyLoad: true,
      smartSpeed: 700,
      items: 1,
    });
  });

  $("#owl-qr").each(function () {
    $("#owl-qr").owlCarousel({
      loop: true,
      dots: true,
      autoplay: false,
      lazyLoad: true,
      smartSpeed: 700,
      items: 6,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        650: {
          items: 2,
          nav: true,
        },
        992: {
          items: 3,
          nav: true,
        },
        1200: {
          items: 4,
          nav: true,
        },
      },
    });
  });

  $("#owl-company").each(function () {
    $("#owl-company").owlCarousel({
      loop: true,
      dots: false,
      autoplay: true,
      lazyLoad: true,
      smartSpeed: 700,
      nav: false,
      items: 4,
      responsive: {
        0: {
          items: 1,
        },
        650: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  });

  $("#owl-advertise").each(function () {
    $("#owl-advertise").owlCarousel({
      loop: true,
      dots: false,
      autoplay: true,
      lazyLoad: true,
      smartSpeed: 500,
      nav: false,
      items: 3,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });
  });

  $("#special-slider").each(function () {
    $("#special-slider").owlCarousel({
      loop: true,
      dots: true,
      autoplay: true,
      lazyLoad: true,
      smartSpeed: 700,
      items: 1,
    });
  });

  // Slide Toggle & over-Lay
  $("nav .lang").click(function () {
    $("nav .lang .slide-toggle").slideToggle(400);
  });

  $(".overlay").click(function () {
    $("nav .slide-toggle").slideUp(400);
  });

  $("nav .lang").click(function () {
    $(".overlay").animate(
      {
        height: "100%",
      },
      0
    );
  });

  $(".overlay").click(function () {
    $(this).animate(
      {
        height: "0%",
      },
      0
    );
  });

  // Aos.js (Animation)
  AOS.init();
});

// account login user
var fullName = document.getElementById("fullName");
var PhoneNumber = document.getElementById("PhoneNumber");
var mobileNumber = document.getElementById("mobileNumber");
var email = document.getElementById("email");
var fullNameUser = document.getElementById("fullNameUser");

function userDetails(event) {
  // event.preventDefault();
  var nameUser = fullName.value;
  fullNameUser.textContent = nameUser;
}
