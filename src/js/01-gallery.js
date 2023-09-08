// Add imports above this line
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);


const gallery = document.querySelector('.gallery');

let itemsPhoto = '';

for (let obj of galleryItems) {
  itemsPhoto += `<li class='gallery__item'>
        <a class='gallery__link' href='${obj.preview}' onclick='return false'>
            <img class='gallery__image' src='${obj.preview}' data-source='${obj.original}' atl='${obj.description}'>
        </a>
    </li>`;
}
gallery.insertAdjacentHTML('beforeend', itemsPhoto);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'atl',
  captionDelay: 250,
  captionPosition: 'bottom',
});