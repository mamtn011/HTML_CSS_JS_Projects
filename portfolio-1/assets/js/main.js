/*********** START RESPONSIVE NAVBAR ***********/
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
/*********** END RESPONSIVE NAVBAR ***********/

/*********** START STICKY NAVBAR ***********/
const sectionHero = document.querySelector(".section-hero");
const stickyObserver = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);
// when the hero section end part reached then we need to show the sticky navigation
stickyObserver.observe(sectionHero);
/*********** END STICKY NAVBAR ***********/

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
const sectionCounter = document.querySelector(".section-counter");
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
  // counter observer
  const counterObserver = new IntersectionObserver(
    (entries) => {
      const ent = entries[0];
      if (ent.isIntersecting) {
        updateNumber();
      } else {
        currElm.innerText = "0";
      }
    },
    {
      root: null,
      threshold: 0.5,
      // rootMargin: "-50px",
    }
  );
  counterObserver.observe(sectionCounter);
});

/*********** END COUNTER NUMBER INCREMENT ***********/

/*********** START SWIPER SLIDER FOR TESTIMONIAL ***********/
const swiper = {
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};
const myMedia992 = (e) => {
  if (e.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      ...swiper,
    });
  } else {
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      ...swiper,
    });
  }
};
const media992 = window.matchMedia("(max-width: 992px)");
media992.addEventListener("change", myMedia992);

/*********** END SWIPER SLIDER FOR TESTIMONIAL ***********/
