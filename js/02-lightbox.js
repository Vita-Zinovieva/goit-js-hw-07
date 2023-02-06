import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//Створення розмітки на підставі масиву даних galleryItems.
function createGalleryItems(item) {
    return galleryItems.map(({preview, original, description}) => {
      return `
    <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </div>
  ` 
    }).join('');    
}
//Pендер розмітки в index.html
const conteinerGalleryCards = document.querySelector(".gallery");

const cardsMarcup = createGalleryItems();
conteinerGalleryCards.insertAdjacentHTML('beforeend', cardsMarcup);

//Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery
var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionPosition: 'bottom', captionsData: 'alt' });

 