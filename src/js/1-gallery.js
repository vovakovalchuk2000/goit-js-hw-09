import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Массив данных для галереи
const images = [
  {
    preview: 'path-to-preview-image1.jpg',
    original: 'path-to-original-image1.jpg',
    description: 'Image 1 Description',
  },
  {
    preview: 'path-to-preview-image2.jpg',
    original: 'path-to-original-image2.jpg',
    description: 'Image 2 Description',
  },
  // Добавьте остальные изображения...
];

// Ссылка на контейнер галереи
const galleryContainer = document.querySelector('.gallery');

// Функция для создания разметки галереи
const createGalleryMarkup = images => {
  return images
    .map(
      ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
  `
    )
    .join('');
};

// Добавляем разметку в DOM
galleryContainer.innerHTML = createGalleryMarkup(images);

// Инициализация SimpleLightbox
const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', // Подписи из атрибута alt
  captionDelay: 250, // Задержка перед появлением подписи
});
