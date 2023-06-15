import Swiper, { Keyboard, Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination, Keyboard]);
function initSwiper() {
  new Swiper(".banner__slider", {
    spaceBetween: 16,
    slidesPerView: 1.6,
    centeredSlides: !0,
    loop: !0,
    autoplay: { delay: 2500, disableOnInteraction: !1 },
    pagination: { el: ".banner__pagination", clickable: !0 },
    navigation: { nextEl: ".button-next", prevEl: ".button-prev" },
  });
}
initSwiper();

var toggleWrap = function (e) {
    var t = e.getAttribute("data-id");
    e.classList.toggle("active"),
      document
        .querySelector(".toggle-wrap[data-id=".concat(t, "]"))
        .classList.toggle("active");
  },
  changeTab = function (e) {
    var t = e.target.closest(".tabs-block");
    t.querySelectorAll(".tab-item").forEach(function (e) {
      return e.classList.remove("tab-item--active");
    }),
      e.target.classList.add("tab-item--active"),
      t.querySelectorAll(".tab-wrap").forEach(function (e) {
        return e.classList.remove("tab-wrap--active");
      }),
      e.target.hasAttribute("data-id") &&
        ((t = e.target.getAttribute("data-id")),
        document
          .querySelector('.tab-wrap[data-id="'.concat(t, '"]'))
          .classList.add("tab-wrap--active"));
  };
window.addEventListener("load", function () {
  this.document.addEventListener("click", function (e) {
    e.target.closest(".tab-item") && changeTab(e);
    var t = e.target.closest(".js-toggle");
    t && toggleWrap(t),
      e.target.closest(".toggle-wrap") ||
        e.target.closest(".js-toggle") ||
        e.target.closest(".filter__tabs") ||
        document.querySelectorAll(".toggle-wrap").forEach(function (e) {
          return e.classList.remove("active");
        });
  });
});
