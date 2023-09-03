import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");
const imageMarkup = createGalleryItems(galleryItems);
galleryList.insertAdjacentHTML("beforeend", imageMarkup);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(lightbox);
console.log(galleryItems);
