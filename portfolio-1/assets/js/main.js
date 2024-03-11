/*********** START RESPONSIVE NAVBAR FILTERING ***********/
const menuContainer = document.querySelector("#menu-container");
const mobileMenuBtns = document.querySelector(".mobile-menu--btns");
const menuItems = document.querySelectorAll(".nav-link");

mobileMenuBtns.addEventListener("click", () =>
  menuContainer.classList.toggle("active")
);

menuItems.forEach((item) =>
  item.addEventListener("click", () => {
    if (menuContainer.classList.contains("active")) {
      menuContainer.classList.remove("active");
    }
  })
);

/*********** START RESPONSIVE NAVBAR FILTERING ***********/

/*********** START PORTFOLIO FILTERING ***********/
// selecting dom
const ButtonsArea = document.querySelector(".filter-buttons");
const clickedButtons = document.querySelectorAll(".btn-filter");
const overlayImages = document.querySelectorAll(".image-overlay");

// function for add and remove class in image-overlay
function addRemoveClassInOverlay(overlay, dataset) {
  if (overlay.classList.contains(`data-${dataset}`)) {
    overlay.classList.remove("overlay-hidden");
    overlay.classList.add("overlay-visible");
  } else {
    overlay.classList.add("overlay-hidden");
    overlay.classList.remove("overlay-visible");
  }
}
// add btn-active class in first button on initial load
// clickedButtons[0].classList.add("btn-active");

// make first category items visible on initial load
overlayImages.forEach((overlay) => {
  addRemoveClassInOverlay(overlay, clickedButtons[0].dataset.btnFilter);
});

// click event for filter buttons
ButtonsArea.addEventListener("click", (e) => {
  // adding and removing btn-active class
  if (e.target.classList.contains("btn-filter")) {
    clickedButtons.forEach((button) => {
      if (button.classList.contains("btn-active")) {
        button.classList.remove("btn-active");
      }
      e.target.classList.add("btn-active");

      // make category items visible in click event
      overlayImages.forEach((overlay) => {
        addRemoveClassInOverlay(overlay, e.target.dataset.btnFilter);
      });
    });
  }
});
/*********** END PORTFOLIO FILTERING ***********/

/*********** START COUNTER NUMBER INCREMENT ***********/
const counterElm = document.querySelectorAll(".counter-number");
const speed = 50;
counterElm.forEach((currElm) => {
  const updateNumber = () => {
    const targetNum = parseInt(currElm.dataset.number);
    const initialNum = parseInt(currElm.innerText);
    const incrementNum = Math.trunc(targetNum / speed);

    if (initialNum < targetNum) {
      currElm.innerText = `${initialNum + incrementNum}+`;
      setTimeout(updateNumber, 10);
    }
  };

  updateNumber();
});
/*********** END COUNTER NUMBER INCREMENT ***********/

/*********** START SWIPER SLIDER FOR TESTIMONIAL ***********/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/*********** END SWIPER SLIDER FOR TESTIMONIAL ***********/
