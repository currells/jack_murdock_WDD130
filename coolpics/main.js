const menuButton = document.querySelector(".menu-button");
const gallery = document.querySelector(".gallery");

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();

function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <span class="close-viewer">X</span>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function closeViewer() {
  document.querySelector(".viewer")?.remove();
}

function viewHandler(event) {
  const target = event.target;
  console.dir(target);
  const imgSrc = event.target.src.split("-");
  const newSrc = imgSrc[0] + "-full.jpeg";
  document.body.insertAdjacentHTML(
    "afterbegin",
    viewerTemplate(newSrc, target.alt)
  );
  // add listener to close modal
  document
    .querySelector(".close-viewer")
    .addEventListener("click", closeViewer);
  //   document.querySelector("main").addEventListener("click", closeViewer);
}

menuButton.addEventListener("click", toggleMenu);
gallery.addEventListener("click", viewHandler);
window.addEventListener("resize", handleResize);
