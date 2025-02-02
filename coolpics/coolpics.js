const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }
  
handleResize();
window.addEventListener("resize", handleResize);

function openModal(event) {
    const modal = document.querySelector(".viewer");
    const modalImage = document.querySelector(".modal-image");
    const clickedImageSrc = event.target.src;
  
    modal.style.display = "grid"; 
    modalImage.src = clickedImageSrc;
  }
  
function closeModal() {
    const modal = document.querySelector(".viewer");
    modal.style.display = "none"; 
}
  
const images = document.querySelectorAll("main .Gallery img");
images.forEach(image => {
    image.addEventListener("click", openModal);
});
  
const closeButton = document.querySelector(".close-viewer");
closeButton.addEventListener("click", closeModal);