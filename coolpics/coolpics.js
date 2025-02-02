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
function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }
function viewHandler(event) {
    if (event.target.tagName === "IMG") {
      const clickedImageSrc = event.target.src;
      
      const imageParts = clickedImageSrc.split("-sm");
      
      const fullImageSrc = imageParts[0] + "-full.jpeg";
  
      const altText = event.target.alt;
  
      document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImageSrc, altText));
  
      const closeButton = document.querySelector(".close-viewer");
      closeButton.addEventListener("click", closeViewer);
    }
  }
  function closeViewer() {
    const viewer = document.querySelector(".viewer");
    viewer.remove(); 
  }
const gallery = document.querySelector(".Gallery");
gallery.addEventListener("click", viewHandler);
