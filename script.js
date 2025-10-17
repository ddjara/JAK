// Lightbox functionality
function openLightbox(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  
  lightbox.style.display = 'block';
  lightboxImg.src = img.src;
  caption.innerHTML = img.alt;
}

// Close lightbox
document.querySelector('.lightbox-close').onclick = function() {
  document.getElementById('lightbox').style.display = 'none';
}

// Close lightbox when clicking outside image
document.getElementById('lightbox').onclick = function(event) {
  if (event.target === this) {
    this.style.display = 'none';
  }
}

// Close lightbox with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    document.getElementById('lightbox').style.display = 'none';
  }
});

// Mobile menu toggle
document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});