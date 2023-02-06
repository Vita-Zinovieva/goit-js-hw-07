import { galleryItems } from './gallery-items.js';
// Change code below this line

//Створення і рендер розмітки на підставі масиву даних galleryItems
//console.log(createGalleryItems());

function createGalleryItems(item) {
    return galleryItems.map(({preview, original, description}) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
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
 
//Реалізація делегування на div.gallery 
     conteinerGalleryCards.addEventListener('click', event => {
        event.preventDefault();
        if (!event.target.classList.contains === 'gallery__items') {
            return
        } 
    const selectedItemEl = event.target.getAttribute('data-source');
    //console.log(selectedItemEl);
  
    
//Вставка для модального вікна + отримання url великого зображення/
const instance = basicLightbox.create(`<img src="${selectedItemEl}" width="800" height="600">`)
instance.show();

//закриття по клавіші Escape
conteinerGalleryCards.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        instance.close()
    }
}) 
       
})

