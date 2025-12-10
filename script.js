//menu-btn to open modal in normal view, it attached to button in nav.
const menuToggleBtn = document.getElementById("menu-btn");

//modal-close-btn is button inside modal to close modal it should appear X on modal open.
const modalCloseBtn = document.getElementById("modal-close-btn");

//mobile-modal-menu is id of actually mobile modal menu which will appear and disappear.
const mobileMenu = document.getElementById("mobile-modal-menu");

menuToggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  modalCloseBtn.classList.add("active");
  menuToggleBtn.classList.toggle("active");
});

modalCloseBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  modalCloseBtn.classList.remove("active");
  menuToggleBtn.classList.remove("active");
});
