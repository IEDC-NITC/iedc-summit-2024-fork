(function ($) {
  $(document).ready(function () {
    "use strict";


    // //NOTIFICATION POP UP
    // let popupShown = false;



    // function showPopup() {
    //   if (!popupShown) {
    //     iziToast.show({
    //       title: 'Dates Announced!!',
    //       message: 'Summit set to happen on October 19th, 2024',
    //       position: 'bottomRight',
    //       timeout: 5000, // Duration in milliseconds (3 seconds)
    //       progressBar: true, // Enable progress bar
    //       progressBarColor: '#0a7ed8', // Progress bar color
    //       backgroundColor: '#ffffff', // Background color of the popup
    //       transitionIn: 'bounceInUp', // Slide in from the right
    //       transitionOut: 'fadeOutDown', // Slide out to the right
    //       closeOnClick: true,
    //       onClosed: function () {
    //         popupShown = false; // Allow the popup to show again if needed
    //       },
    //       onOpening: function (instance, toast) {
    //         // Adding the click event listener directly to the toast element
    //         toast.addEventListener('click', function () {
    //           const a = document.createElement('a');
    //           a.href = "/events";
    //           a.click();
    //         });
    //       }
    //     });

    //     popupShown = true;
    //   }
    // }

    // let scrollCount = 0;
    // window.addEventListener("scroll", function () {
    //   if (!popupShown && scrollCount === 0) {
    //     showPopup();
    //     scrollCount++;
    //   }
    // });


    // // MASONRY
    // $('.events-grid').isotope({
    //   itemSelector: '.events-grid .grid-item',
    //   percentPosition: true,
    //   masonry: {
    //     columnWidth: '.grid-item'
    //   }
    // });


    // PRELOADER
    var counting = setInterval(function () {
      var loader = document.getElementById("percentage");
      var currval = parseInt(loader.innerHTML);
      var Width = 99 - currval;
      var loadscreen = document.getElementById("loader-progress");
      loader.innerHTML = ++currval;
      if (currval === 100) {
        clearInterval(counting);
        $("body").toggleClass('page-loaded');
      }
      loadscreen.style.transition = "0.1s";
      loadscreen.style.width = Width + "%";
    }, 10);


    // SEARCH BOX
    $('.search-button, .search-box .close-btn').on('click', function (e) {
      if ($(".search-box").hasClass('active')) {

        $(".search-box").css("transition", "");
        $(".search-box").css("transition-delay", "0.4s");
        $(".search-box .form").css("transition-delay", "0s");

        window.setTimeout(function () {
          $(".search-box").css("left", "-100%");
          $(".search-box").css("transition", "none");
        }, 1400);

        $(".search-box.active").css("left", "100%");

      } else {
        $(".search-box").css("transition", "");
        $(".search-box").css("transition-delay", "0s");
        $(".search-box .form").css("transition-delay", "0.8s");
        $(".search-box").css("left", "0")

      }
      $(".search-box").toggleClass('active');
    });


    /* HAMBURGER MENU */
    $('.hamburger-menu').on('click', function () {
      $(".menu .line").toggleClass('opened');
      $(".mobile-menu").toggleClass("active")
    })

    $('.mobile-menu .site-menu ul li a').on('click', function () {
      $(".menu .line").toggleClass('opened');
      $(".mobile-menu").toggleClass("active")
    })

    /* SIDE WIDGET */
    $('.more-button').on('click', function () {
      $(".side-widget").toggleClass("active")
    })


    // PAGE TRANSITION
    $('body a').on('click', function (e) {

      var target = $(this).attr('target');
      var fancybox = $(this).data('fancybox');
      var url = this.getAttribute("href");
      if (target != '_blank' && typeof fancybox == 'undefined' && url.indexOf('#') < 0) {


        e.preventDefault();
        var url = this.getAttribute("href");
        if (url.indexOf('#') != -1) {
          var hash = url.substring(url.indexOf('#'));


          if ($('body ' + hash).length != 0) {
            $('.page-transition').removeClass("active");


          }
        } else {
          $('.page-transition').toggleClass("active");
          setTimeout(function () {
            window.location = url;
          }, 1100);

        }
      }
    });


  });
  // END JQUERY


  // TESTIMONIALS SLIDER
  var swiper = new Swiper('.testimonials-slider', {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1020: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      764: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },


    }
  });


  // CAROUSEL SLIDER
  var swiper = new Swiper('.carousel-slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    breakpoints: {
      1020: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      764: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      }
    }
  });


  // SLIDER
  var events_slider_images = new Swiper('.events-slider-images', {
    spaceBetween: 0,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    loop: true,
    effect: 'fade',
    loopedSlides: 3,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    thumbs: {
      swiper: event_slider_content
    }
  });


  // SLIDER CONTENT
  var event_slider_content = new Swiper('.events-slider-content', {
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 1,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },

  });

  if ($(".events-slider-images")[0]) {
    events_slider_images.controller.control = event_slider_content;
    event_slider_content.controller.control = events_slider_images;
  } else { }

  // DATA BACKGROUND IMAGE
  var pageSection = $("*");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css("background", "url(" + $(this).data("background") + ")");
    }
  });

  // DATA BACKGROUND COLOR
  var pageSection = $("*");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css("background", $(this).data("background"));
    }
  });


  // LOCOMOTIVE
  let options = {
    el: document.querySelector('.smooth-scroll'),
    smooth: false,
    class: 'is-inview',
    getSpeed: true,
    getDirection: true,
    reloadOnContextChange: true
  }


  const header = document.getElementById('navbar');
  let hidden = false,
    static = true;

  const scroll = new LocomotiveScroll(options);

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.addEventListener("refresh", () => scroll.update());
  ScrollTrigger.refresh();


  scroll.on('scroll', (instance) => {
    // let headerHeight = header.getBoundingClientRect().height;
    // if (instance.direction === 'down' && static) {
    if (instance.scroll.y > 200) {
      header.classList.add('pinned');
      if (header.classList.contains('navbar')) {
        header.classList.remove('light');
        header.classList.add('dark');
      }
    } else {

      header.classList.remove('pinned');
      if (header.classList.contains('navbar')) {
        header.classList.remove('dark');
        header.classList.add('light');
      }

    }

  });


  // COUNTDOWN
  if ($("#js-countdown").hasClass("countdown")) {


    const countdown = new Date("September 7, 2024");

    function getRemainingTime(endtime) {
      const milliseconds = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((milliseconds / 1000) % 60);
      const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
      const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
      const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

      return {
        'total': milliseconds,
        'seconds': seconds,
        'minutes': minutes,
        'hours': hours,
        'days': days,
      };
    }

    function initClock(id, endtime) {
      const counter = document.getElementById(id);
      const daysItem = counter.querySelector('.js-countdown-days');
      const hoursItem = counter.querySelector('.js-countdown-hours');
      const minutesItem = counter.querySelector('.js-countdown-minutes');
      const secondsItem = counter.querySelector('.js-countdown-seconds');

      function updateClock() {
        const time = getRemainingTime(endtime);

        daysItem.innerHTML = time.days;
        hoursItem.innerHTML = ('0' + time.hours).slice(-2);
        minutesItem.innerHTML = ('0' + time.minutes).slice(-2);
        secondsItem.innerHTML = ('0' + time.seconds).slice(-2);

        if (time.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
      const timeinterval = setInterval(updateClock, 1000);
    }

    initClock('js-countdown', countdown);
  }


})(jQuery);

const appendData = (container, data, emptyMessage, type = "event") => {
  console.log(data[0].posterImage);
  if (data.length) {
    data.forEach(item => {
      const card = document.createElement('div');
      card.onclick = () => {
        window.location.href = "/events/";
      }
      card.classList.add('card');


      if (type == "event") {
        card.innerHTML = `
                <div class="poster">
                    <img src="${item.imgUrl}" alt="">
                </div>
                <div class="details">
                    <div class="content">
                        <h1>${item.eventName}</h1>
                    </div>
                </div>
                `;
      }
      else if (type == "lecture") {
        card.innerHTML = `
                <div class="poster">
                    <img src="${item.imgUrl}" alt="">
                </div>
                <div class="details">
                    <h1>${item.eventName}</h1>
                </div>
                `;
      }
      else {
        card.innerHTML = `
                <div class="poster">
                    <img src="${item.imgUrl}" alt="">
                </div>
                <div class="details">
                    <h1>${item.eventName}</h1>
                </div>
                `
      }

      container.appendChild(card);
    });
  }
}



document.addEventListener('DOMContentLoaded', () => {
  const eventCardsContainer = document.querySelector('#card-container .event-cards');
  const lectureCardsContainer = document.querySelector('#card-container .event-cards');
  const workshopsCardsContainer = document.querySelector('#card-container .event-cards');

  fetch("https://iedc-summit-backend.vercel.app/getEvents")
    .then(res => res.json())
    .then(events =>
      appendData(eventCardsContainer, events, "No events available", "event")
    );

  fetch("https://iedc-summit-backend.vercel.app/getLectures")
    .then(res => res.json())
    .then(lectures =>
      appendData(lectureCardsContainer, lectures, "No Lecutres available", "lecture")
    );

  fetch("https://iedc-summit-backend.vercel.app/getWorkshops")
    .then(res => res.json())
    .then(workshops =>
      appendData(workshopsCardsContainer, workshops, "No Workshops available", "workshop")
    )


  const caCard = document.querySelector('.card.ca-card');
  if (caCard) {
    caCard.onclick = () => {
      const linkElement = document.createElement('a');
      linkElement.href = 'https://forms.zohopublic.eu/iedcnitc/form/BugTracker/formperma/DD9N7xCt86lBQgwVvFuR_5lqUS5CZ_gs55W79HP4MVM';
      linkElement.target = "_blank";

      linkElement.click();
    }
  }
});
