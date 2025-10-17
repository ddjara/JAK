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
document.addEventListener('DOMContentLoaded', function() {
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightbox = document.getElementById('lightbox');
  
  if (lightboxClose) {
    lightboxClose.onclick = function() {
      lightbox.style.display = 'none';
    }
  }

  // Close lightbox when clicking outside image
  if (lightbox) {
    lightbox.onclick = function(event) {
      if (event.target === this) {
        this.style.display = 'none';
      }
    }
  }

  // Close lightbox with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && lightbox) {
      lightbox.style.display = 'none';
    }
  });

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function(e) {
      e.preventDefault();
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }
});