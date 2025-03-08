var MyScroll = "";
(function (window, document, $, undefined) {
  "use strict";
  var isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(
      navigator.userAgent
    )
      ? !0
      : !1;
  var Scrollbar = window.Scrollbar;
  var Init = {
    i: function (e) {
      Init.s();
      Init.methods();
    },
    s: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      Init.w();
      Init.BackToTop();
      Init.preloader();
      Init.header();
      Init.slick();
      Init.countdownInit(".countdown", "2025/7/01");
      Init.countdownType2(".countdown-2", "2025/11/17");
      Init.searchToggle();
      Init.passwordIcon();
      Init.formValidation();
      Init.contactForm();
      Init.checkBoxes();
      Init.dropdown();
      Init.showReview();
    },

    BackToTop: function () {
      var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
      var rootElement = document.documentElement;
      function handleScroll() {
        var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
        if (rootElement.scrollTop / scrollTotal > 0.05) {
          scrollToTopBtn.classList.add("showBtn");
        } else {
          scrollToTopBtn.classList.remove("showBtn");
        }
      }
      function scrollToTop() {
        rootElement.scrollTo({ top: 0, behavior: "smooth" });
      }
      scrollToTopBtn.addEventListener("click", scrollToTop);
      document.addEventListener("scroll", handleScroll);
    },

    preloader: function () {
      setTimeout(function () {
        $("#preloader").hide("slow");
      }, 2400);
    },

    showReview: function () {
      $(".review-btn").on("click", function () {
        $(".review-btn").removeClass("te-button");
        var id = $(this).attr("data-atr");
        $(this).addClass("te-button");

        // Hide all review blocks slowly
        $(".review-block").hide("slow");

        // Show the selected review block slowly
        $("#" + id).show("slow");
      });
    },
    teamMemberShow: function (e) {
      $(".member").on("click", function () {
        var id = $(this).attr("id");
        $(".member").removeClass("active");
        $(this).addClass("active");
        $(".member-details").hide("slow");
        $("." + id).show("slow");
      });
    },

    serviceShow: function (e) {
      $(".service_title").on("click", function () {
        var id = $(this).attr("id");
        $(".service_title").removeClass("active");
        $(this).addClass("active");
        $(".service-detail").hide("slow");
        $("." + id).show("slow");
      });
    },

    w: function (e) {
      if (isMobile) {
        $("body").addClass("is-mobile");
      }
    },

    header: function () {
      function dynamicCurrentMenuClass(selector) {
        let FileName = window.location.href.split("/").reverse()[0];
        selector.find("li").each(function () {
          let anchor = $(this).find("a");
          if ($(anchor).attr("href") == FileName) {
            $(this).addClass("current");
          }
        });
        selector.children("li").each(function () {
          if ($(this).find(".current").length) {
            $(this).addClass("current");
          }
        });
        if ("" == FileName) {
          selector.find("li").eq(0).addClass("current");
        }
      }
      if ($(".main-menu__list").length) {
        let mainNavUL = $(".main-menu__list");
        dynamicCurrentMenuClass(mainNavUL);
      }
      if ($(".main-menu__nav").length && $(".mobile-nav__container").length) {
        let navContent = document.querySelector(".main-menu__nav").innerHTML;
        let mobileNavContainer = document.querySelector(
          ".mobile-nav__container"
        );
        mobileNavContainer.innerHTML = navContent;
      }
      if ($(".sticky-header__content").length) {
        let navContent = document.querySelector(".main-menu").innerHTML;
        let mobileNavContainer = document.querySelector(
          ".sticky-header__content"
        );
        mobileNavContainer.innerHTML = navContent;
      }
      if ($(".mobile-nav__container .main-menu__list").length) {
        let dropdownAnchor = $(
          ".mobile-nav__container .main-menu__list .dropdown > a"
        );
        dropdownAnchor.each(function () {
          let self = $(this);
          let toggleBtn = document.createElement("BUTTON");
          toggleBtn.setAttribute("aria-label", "dropdown toggler");
          toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
          self.append(function () {
            return toggleBtn;
          });
          self.find("button").on("click", function (e) {
            e.preventDefault();
            let self = $(this);
            self.toggleClass("expanded");
            self.parent().toggleClass("expanded");
            self.parent().parent().children("ul").slideToggle();
          });
        });
      }
      if ($(".mobile-nav__toggler").length) {
        $(".mobile-nav__toggler").on("click", function (e) {
          e.preventDefault();
          $(".mobile-nav__wrapper").toggleClass("expanded");
          $("body").toggleClass("locked");
        });
      }
      $(window).on("scroll", function () {
        if ($(".stricked-menu").length) {
          var headerScrollPos = 130;
          var stricky = $(".stricked-menu");
          if ($(window).scrollTop() > headerScrollPos) {
            stricky.addClass("stricky-fixed");
          } else if ($(this).scrollTop() <= headerScrollPos) {
            stricky.removeClass("stricky-fixed");
          }
        }
      });
    },

    slick: function () {
      if ($(".games-slider").length) {
        $(".games-slider").slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
          draggable: true,
          lazyLoad: "linear",
          speed: 800,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 821,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 788,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      }
      if ($(".testimonial-slider1").length) {
        $(".testimonial-slider1").slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
          variableWidth: true,
          draggable: true,
          lazyLoad: "linear",
          speed: 800,
          autoplaySpeed: 2000,

          responsive: [
            {
              breakpoint: 1399,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                variableWidth: false,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
              },
            },
          ],
        });
      }

      if ($(".testimonials-slider").length) {
        initializeSlider($(".testimonials-slider"), 3, [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ]);
      }
      // ******** TIMELINES SLIDERS START ********* //
      function initializeSlider(
        $slider,
        slidesToShow,
        responsiveSettings = []
      ) {
        var $progressBar = $slider.siblings(".progress");
        var $progressBarLabel = $slider.siblings(".slider__label");

        function updateProgressBar(slick, nextSlide) {
          var sliderWidth = $slider.outerWidth();
          var slideWidth = sliderWidth / slick.slideCount;
          var calc = (slideWidth * (nextSlide + 1) * 100) / sliderWidth;

          $progressBar
            .css("background-size", calc + "% 100%")
            .attr("aria-valuenow", calc);

          $progressBarLabel.text(calc.toFixed(0) + "% completed");
        }

        $slider.on("init", function (event, slick) {
          updateProgressBar(slick, 0);
        });

        $slider.on(
          "beforeChange",
          function (event, slick, currentSlide, nextSlide) {
            updateProgressBar(slick, nextSlide);
          }
        );

        $slider.slick({
          autoplay: true,
          slidesToShow: slidesToShow,
          slidesToScroll: 1,
          speed: 400,
          cssEase: "linear",
          arrows: false,
          responsive: responsiveSettings,
        });
      }
      // ******** TIMELINES SLIDERS END ********* //

      var percentTime;
      var tick;
      var time = 0.1;
      var progressBarIndex = 0;

      $(".progressBarContainer .progressBar").each(function (index) {
        var progress = "<div class='inProgress inProgress" + index + "'></div>";
        $(this).html(progress);
      });

      function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        tick = setInterval(interval, 3);
      }

      function interval() {
        if (
          $(
            '.slider .slick-track div[data-slick-index="' +
              progressBarIndex +
              '"]'
          ).attr("aria-hidden") === "true"
        ) {
          progressBarIndex = $(
            '.slider .slick-track div[aria-hidden="false"]'
          ).data("slickIndex");
          startProgressbar();
        } else {
          percentTime += 1 / (time + 5);
          $(".inProgress" + progressBarIndex).css({
            width: percentTime + "%",
          });
          if (percentTime >= 100) {
            $(".single-item").slick("slickNext");
            progressBarIndex++;
            if (progressBarIndex > 3) {
              progressBarIndex = 0;
            }
            startProgressbar();
          }
        }
      }

      function resetProgressbar() {
        $(".inProgress").css({
          width: 0 + "%",
        });
        clearInterval(tick);
      }
      startProgressbar();
      // End ticking machine

      $(".item").click(function () {
        clearInterval(tick);
        var goToThisIndex = $(this).find("span").data("slickIndex");
        $(".single-item").slick("slickGoTo", goToThisIndex, false);
        startProgressbar();
      });
      $(".btn-prev").click(function () {
        var $this = $(this).attr("data-slide");
        $("." + $this).slick("slickPrev");
      });
      $(".btn-next").click(function () {
        var $this = $(this).attr("data-slide");
        $("." + $this).slick("slickNext");
      });
    },

    // Countdown Timer
    countdownType2: function (countdownSelector, countdownTime, countdown) {
      var eventCounter = $(countdownSelector);
      if (eventCounter.length) {
        eventCounter.countdown(countdownTime, function (e) {
          $(this).html(
            e.strftime(
              "<li><h3>%H</h3><h6>Hour</h6></li>\
              <li><h3>%M</h3><h6>Mins</h6></li>\
              <li><h3>%S</h3><h6>Secs</h6></li>"
            )
          );
        });
      }
    },

    // Countdown Timer
    countdownInit: function (countdownSelector, countdownTime, countdown) {
      var eventCounter = $(countdownSelector);
      if (eventCounter.length) {
        eventCounter.countdown(countdownTime, function (e) {
          $(this).html(
            e.strftime(
              "<li><h2>%D</h2><p>Days</p></li>\
              <li><h2>%H</h2><p>Hrs</p></li>\
              <li><h2>%M</h2><p>Mins</p></li>\
              <li><h2>%S</h2><p>Secs</p></li>"
            )
          );
        });
      }
    },

    // Toggle CheckBoxes
    checkBoxes: function () {
      $(".sub-checkboxes").hide();
      $(".arrow-block").click(function () {
        var subCheckboxes = $(this).next(".sub-checkboxes");
        var chevronIcon = $(this).find("i");
        subCheckboxes.slideToggle("fast");
        chevronIcon.toggleClass("fa-chevron-down fa-chevron-up");
      });
      $(".check-block, .sub-check-box").click(function (event) {
        event.stopPropagation();
      });

      if ($(".customer-container").length) {
        $(".signin-button").click(function () {
          $(".sign-form").slideToggle();
        });
      }
    },

    dropdown: function () {
      const selectedAll = document.querySelectorAll(".wrapper-dropdown");

      selectedAll.forEach((selected) => {
        const arrow = selected.children[1];
        const optionsContainer = selected.children[2];
        const optionsList = selected.querySelectorAll("ul.topbar-dropdown li");

        selected.addEventListener("click", (event) => {
          event.stopPropagation();

          if (selected.classList.contains("active")) {
            handleDropdown(selected, arrow, false);
          } else {
            let currentActive = document.querySelector(
              ".wrapper-dropdown.active"
            );
            if (currentActive && currentActive !== selected) {
              let anotherArrow = currentActive.children[1];
              handleDropdown(currentActive, anotherArrow, false);
            }

            handleDropdown(selected, arrow, true);
          }
        });

        optionsList.forEach((option) => {
          option.addEventListener("click", () => {
            selected.querySelector(".selected-display").innerHTML =
              option.innerHTML;
          });
        });
      });

      window.addEventListener("click", (e) => {
        if (!e.target.closest(".wrapper-dropdown")) {
          closeAllDropdowns();
        }
      });

      function closeAllDropdowns() {
        selectedAll.forEach((selected) => {
          const arrow = selected.children[1];
          handleDropdown(selected, arrow, false);
        });
      }

      function handleDropdown(dropdown, arrow, open) {
        if (open) {
          arrow.classList.add("rotated");
          dropdown.classList.add("active");
        } else {
          arrow.classList.remove("rotated");
          dropdown.classList.remove("active");
        }
      }
    },

    // Search Toggle
    searchToggle: function () {
      if ($(".search-toggler").length) {
        $(".search-toggler").on("click", function (e) {
          e.preventDefault();
          $(".search-popup").toggleClass("active");
          $(".mobile-nav__wrapper").removeClass("expanded");
          $("body").toggleClass("locked");
        });
      }
    },
    passwordIcon: function () {
      $("#eye , #eye-icon").click(function () {
        if ($(this).hasClass("fa-eye-slash")) {
          $(this).removeClass("fa-eye-slash");
          $(this).addClass("fa-eye");
          $(".password-input").attr("type", "text");
        } else {
          $(this).removeClass("fa-eye");
          $(this).addClass("fa-eye-slash");
          $(".password-input").attr("type", "password");
        }
      });
    },
    formValidation: function () {
      if ($(".contact-form").length) {
        $(".contact-form").validate();
      }
      if ($(".login-form").length) {
        $(".login-form").validate();
      }
    },
    contactForm: function () {
      $(".contact-form").on("submit", function (e) {
        e.preventDefault();
        if ($(".contact-form").valid()) {
          var _self = $(this);
          _self
            .closest("div")
            .find('button[type="submit"]')
            .attr("disabled", "disabled");
          var data = $(this).serialize();
          $.ajax({
            url: "./assets/mail/contact.php",
            type: "post",
            dataType: "json",
            data: data,
            success: function (data) {
              $(".contact-form").trigger("reset");
              _self.find('button[type="submit"]').removeAttr("disabled");
              if (data.success) {
                document.getElementById("message").innerHTML =
                  "<h5 class='color-primary mt-16 mb-16'>Email Sent Successfully</h5>";
              } else {
                document.getElementById("message").innerHTML =
                  "<h5 class='color-primary mt-16 mb-16'>There is an error</h5>";
              }
              $("#messages").show("slow");
              $("#messages").slideDown("slow");
              setTimeout(function () {
                $("#messages").slideUp("hide");
                $("#messages").hide("slow");
              }, 4000);
            },
          });
        } else {
          return !1;
        }
      });
    },
  };
  Init.i();
})(window, document, jQuery);
