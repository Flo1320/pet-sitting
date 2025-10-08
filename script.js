    // Theme Toggle
    function toggleTheme() {
        const body = document.body;
        const btn = document.querySelector('.theme-btn');
        const theme = body.getAttribute('data-theme');

        if (theme === 'light') {
            body.setAttribute('data-theme', 'dark');
            btn.textContent = '☀️';
        } else {
            body.setAttribute('data-theme', 'light');
            btn.textContent = '🌙';
        }
    }

    // Mobile Menu
    function toggleMenu() {
        const menu = document.getElementById('navMenu');
        const burger = document.querySelector('.burger');
        menu.classList.toggle('active');
        burger.classList.toggle('active');
    }

    function closeMenu() {
        const menu = document.getElementById('navMenu');
        const burger = document.querySelector('.burger');
        menu.classList.remove('active');
        burger.classList.remove('active');
    }

    // Page Navigation
    function showPage(pageId) {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));

        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        closeMenu();
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const menu = document.getElementById('navMenu');
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('nav');

        if (!nav.contains(e.target) && menu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.service-card, .price-card, .stat-card, .gallery-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 100) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
    });
  document.addEventListener("DOMContentLoaded", () => {
  // Récupère toutes les images de la galerie
  const galleryImages = document.querySelectorAll('.gallery-image');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  // Si on trouve des images, on leur ajoute un écouteur de clic
  galleryImages.forEach(img => {
    img.style.cursor = "zoom-in"; // ajoute un curseur visuel
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
    });
  });

  // Fermer le plein écran
  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });
});

function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').style.display = 'flex';
  }

  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  }