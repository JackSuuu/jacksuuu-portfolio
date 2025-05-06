document.addEventListener('DOMContentLoaded', () => {
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    // Smooth scroll function
    function smoothScroll(target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  
    // Add intersection observer to detect which section is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.nav-title a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${entry.target.id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.5 });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
    // Handle navigation clicks
    document.querySelectorAll('.nav-title a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          smoothScroll(targetSection);
        }
      });
    });
  
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
      let currentIndex = -1;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          currentIndex = index;
        }
      });
  
      if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
        smoothScroll(sections[currentIndex + 1]);
      } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        smoothScroll(sections[currentIndex - 1]);
      }
    });
    // Update scroll indicator dots
    function updateScrollIndicator() {
        const dots = document.querySelectorAll('.scroll-indicator .dot');
        sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        }
        });
    }
    
    // Add scroll event listener for indicator
    window.addEventListener('scroll', updateScrollIndicator, { passive: true });
    
    // Initialize the indicator
    updateScrollIndicator();
    
    // Add click event to dots
    document.querySelectorAll('.scroll-indicator .dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
        smoothScroll(sections[index]);
        });
    });
});

