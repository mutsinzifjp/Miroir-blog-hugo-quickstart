// Custom JavaScript for enhanced features - Managed by Netlify CMS

(function() {
  'use strict';

  // Configuration from design.yml (will be injected by Hugo)
  const config = {
    animations: {
      enabled: true,
      page_transitions: true,
      hover_effects: true,
      scroll_animations: true,
      loading_animations: true,
      speed: 'normal',
      parallax: false
    },
    features: {
      dark_mode: true,
      reading_progress: true,
      back_to_top: true,
      social_sharing: true,
      reading_time: true,
      toc: true,
      search: true
    }
  };

  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    initializeFeatures();
  });

  function initializeFeatures() {
    if (config.features.reading_progress) {
      initReadingProgress();
    }
    
    if (config.features.back_to_top) {
      initBackToTop();
    }
    
    if (config.animations.scroll_animations) {
      initScrollAnimations();
    }
    
    if (config.animations.parallax) {
      initParallax();
    }
    
    if (config.features.social_sharing) {
      initSocialSharing();
    }
    
    initThemeToggle();
    initLayoutSwitcher();
    initImageLightbox();
    initSearchFunctionality();
  }

  // Reading Progress Bar
  function initReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.innerHTML = '<div class="reading-progress-bar"></div>';
    document.body.appendChild(progressBar);

    const bar = progressBar.querySelector('.reading-progress-bar');
    
    window.addEventListener('scroll', function() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      
      bar.style.width = Math.min(progress, 100) + '%';
    });
  }

  // Back to Top Button
  function initBackToTop() {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.innerHTML = '↑';
    button.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(button);

    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        button.classList.add('visible');
      } else {
        button.classList.remove('visible');
      }
    });

    button.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Scroll Animations
  function initScrollAnimations() {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements with animation classes
    document.querySelectorAll('.animate-fade, .animate-slide, .animate-zoom').forEach(function(el) {
      observer.observe(el);
    });
  }

  // Parallax Effects
  function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(function(element) {
        const speed = element.dataset.speed || 0.5;
        const offset = scrolled * speed;
        element.style.transform = `translateY(${offset}px)`;
      });
    });
  }

  // Social Sharing
  function initSocialSharing() {
    const shareButtons = document.querySelectorAll('.share-button');
    
    shareButtons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const platform = this.dataset.platform;
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        
        let shareUrl = '';
        
        switch(platform) {
          case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            break;
          case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
          case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            break;
          case 'email':
            shareUrl = `mailto:?subject=${title}&body=${url}`;
            break;
        }
        
        if (shareUrl) {
          window.open(shareUrl, '_blank', 'width=600,height=400');
        }
      });
    });
  }

  // Theme Toggle
  function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;

    themeToggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  // Layout Switcher
  function initLayoutSwitcher() {
    const layoutButtons = document.querySelectorAll('.layout-switcher button');
    const contentContainer = document.querySelector('.content-container');
    
    layoutButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const layout = this.dataset.layout;
        
        // Remove existing layout classes
        contentContainer.className = contentContainer.className.replace(/layout-\w+/g, '');
        
        // Add new layout class
        contentContainer.classList.add(`layout-${layout}`);
        
        // Update active button
        layoutButtons.forEach(function(btn) {
          btn.classList.remove('active');
        });
        this.classList.add('active');
        
        // Save preference
        localStorage.setItem('layout', layout);
      });
    });

    // Load saved layout
    const savedLayout = localStorage.getItem('layout') || 'list';
    contentContainer.classList.add(`layout-${savedLayout}`);
    document.querySelector(`[data-layout="${savedLayout}"]`)?.classList.add('active');
  }

  // Image Lightbox
  function initImageLightbox() {
    const images = document.querySelectorAll('article img, .gallery img');
    
    images.forEach(function(img) {
      img.addEventListener('click', function() {
        createLightbox(this.src, this.alt);
      });
      
      img.style.cursor = 'pointer';
    });
  }

  function createLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <img src="${src}" alt="${alt}">
        <button class="lightbox-close">&times;</button>
      </div>
    `;
    
    document.body.appendChild(lightbox);
    
    // Close on click outside or close button
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        document.body.removeChild(lightbox);
      }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        document.body.removeChild(lightbox);
      }
    });
  }

  // Search Functionality
  function initSearchFunctionality() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) return;
    
    let searchIndex = [];
    
    // Load search index
    fetch('/index.json')
      .then(response => response.json())
      .then(data => {
        searchIndex = data;
      })
      .catch(error => {
        console.log('Search index not available');
      });
    
    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase().trim();
      
      if (query.length < 2) {
        hideSearchResults();
        return;
      }
      
      const results = searchIndex.filter(function(item) {
        return item.title.toLowerCase().includes(query) ||
               item.content.toLowerCase().includes(query) ||
               (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query)));
      });
      
      showSearchResults(results);
    });
  }

  function showSearchResults(results) {
    let resultsContainer = document.querySelector('.search-results');
    
    if (!resultsContainer) {
      resultsContainer = document.createElement('div');
      resultsContainer.className = 'search-results';
      document.querySelector('.search-input').parentNode.appendChild(resultsContainer);
    }
    
    if (results.length === 0) {
      resultsContainer.innerHTML = '<p>No results found</p>';
      return;
    }
    
    resultsContainer.innerHTML = results.slice(0, 5).map(function(result) {
      return `
        <div class="search-result">
          <h4><a href="${result.permalink}">${result.title}</a></h4>
          <p>${result.content.substring(0, 150)}...</p>
        </div>
      `;
    }).join('');
    
    resultsContainer.style.display = 'block';
  }

  function hideSearchResults() {
    const resultsContainer = document.querySelector('.search-results');
    if (resultsContainer) {
      resultsContainer.style.display = 'none';
    }
  }

  // Add lightbox styles
  const lightboxStyles = `
    .lightbox {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      animation: fadeIn 0.3s ease;
    }
    
    .lightbox-content {
      position: relative;
      max-width: 90%;
      max-height: 90%;
    }
    
    .lightbox img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
    
    .lightbox-close {
      position: absolute;
      top: -40px;
      right: 0;
      background: none;
      border: none;
      color: white;
      font-size: 2rem;
      cursor: pointer;
      padding: 0;
      line-height: 1;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = lightboxStyles;
  document.head.appendChild(styleSheet);

})();