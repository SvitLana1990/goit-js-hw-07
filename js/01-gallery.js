import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");
const imageMarkup = createGalleryItems(galleryItems);
galleryList.insertAdjacentHTML("beforeend", imageMarkup);

galleryList.addEventListener("click", onImageClick);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item js-item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

function onImageClick(event) {
  event.preventDefault();
  const { target } = event;
  if (!target.classList.contains("gallery__image")) {
    return;
  }
  const originalImageSrc = target.dataset.source;
  const imageDescription = target.alt;
  const instance = basicLightbox.create(
    `<div class="modal"><img class="gallery__image"
        src="${originalImageSrc}"
        alt="${imageDescription}"
      /></div>
  `,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            instance.close();
          }
        });
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            instance.close();
          }
        });
      },
    }
  );
  instance.show();
}
