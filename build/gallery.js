// image gallery script

const lightBox = document.querySelector("#lightbox");
const lightBoxImg = document.querySelector(".lightbox-img");
const gallery = document.querySelector(".gallery");
const closeBtn = document.querySelector(".close-btn");

const addImg = (e) => {
  for (let i = 1; i <= 10; i++) {
    const int = Math.floor(Math.random() * 100);
    const image = document.createElement("img");
    image.src = `https://picsum.photos/id/${int}/1080/1920`;
    image.classList.add("gallery-img");
    image.alt = `Gallery Image ${i}`;

    // gallery.insertAdjacentElement("beforeend", image);
    gallery.appendChild(image);
  }

  imageView(gallery);
};

window.addEventListener("DOMContentLoaded", addImg);

const imageView = (gallery) => {
  const images = gallery.querySelectorAll(".gallery-img");
  images.forEach((img) => {
    img.addEventListener("click", (e) => {
      lightBox.classList.add("open");
      lightBoxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", (e) => {
    lightBox.classList.remove("open");
  });
};
