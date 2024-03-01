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
clickedButtons[0].classList.add("btn-active");

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
