import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
  
document.addEventListener('DOMContentLoaded', () => {
  const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
  });
});
  