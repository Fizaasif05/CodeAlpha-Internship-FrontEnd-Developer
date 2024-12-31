// Select DOM elements
const gallery = document.getElementById('gallery');
const searchInput = document.getElementById('search');
const filterSelect = document.getElementById('filter');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.querySelector('.close');

// Event Listeners
searchInput.addEventListener('input', filterGallery);
filterSelect.addEventListener('change', filterGallery);
gallery.addEventListener('click', openLightbox);
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

// Filter Gallery Function
function filterGallery() {
    const searchText = searchInput.value.toLowerCase();
    const category = filterSelect.value;

    document.querySelectorAll('.gallery-item').forEach((item) => {
        const title = item.dataset.title.toLowerCase();
        const matchesSearch = title.includes(searchText);
        const matchesCategory = category === 'all' || item.classList.contains(category);

        if (matchesSearch && matchesCategory) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Open Lightbox
function openLightbox(e) {
    if (e.target.tagName === 'IMG') {
        lightboxImage.src = e.target.src;
        lightboxCaption.textContent = e.target.alt;
        lightbox.style.display = 'flex';
    }
}

// Close Lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}
