// Add preloader style to the head immediately in a <script> tag before any other content loads
(function() {
  // Create style element and add it to head immediately
  const preloaderStyle = document.createElement('style');
  preloaderStyle.textContent = `
    body {
      visibility: hidden;
      overflow: hidden;
    }
    
    #initial-loader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      z-index: 10000;
      visibility: visible;
    }
  `;
  document.head.appendChild(preloaderStyle);
  
  // Create initial loader element
  const initialLoader = document.createElement('div');
  initialLoader.id = 'initial-loader';
  
  // Add it to body as soon as body is available
  if (document.body) {
    document.body.appendChild(initialLoader);
  } else {
    window.addEventListener('DOMContentLoaded', function() {
      document.body.appendChild(initialLoader);
    });
  }
})();

// Regular loading animation
document.addEventListener('DOMContentLoaded', function() {
  // Make body visible once we're controlling the animation
  document.body.style.visibility = 'visible';
  
  // Remove initial loader as it's no longer needed
  const initialLoader = document.getElementById('initial-loader');
  if (initialLoader) {
    initialLoader.remove();
  }
  
  // Create loading animation elements
  const loadingOverlay = document.createElement('div');
  loadingOverlay.className = 'loading-overlay';
  
  // Add percentage counter element with tech styling
  const percentCounter = document.createElement('div');
  percentCounter.className = 'percent-counter';
  percentCounter.innerHTML = '<span>0</span>%';
  loadingOverlay.appendChild(percentCounter);
  
  // Add the subtitle text with more tech-oriented phrasing
  const subtitleText = document.createElement('div');
  subtitleText.className = 'subtitle-text';
  subtitleText.innerHTML = "INITIALIZING NEURAL INTERFACE <span class='blink'>_</span>";
  loadingOverlay.appendChild(subtitleText);
  
  // Add scan line effect for tech feel
  const scanline = document.createElement('div');
  scanline.className = 'scanline';
  loadingOverlay.appendChild(scanline);
  
  document.body.appendChild(loadingOverlay);

  // Add loading animation style with tech aesthetics
  const loadingStyle = document.createElement('style');
  loadingStyle.textContent = `
    .loading-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      z-index: 9999;
      transform: translateX(0);
      transition: transform 1.5s cubic-bezier(0.86, 0, 0.07, 1);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: 'Courier New', monospace;
      box-shadow: inset 0 0 150px 5px rgba(255, 255, 255, 0.25);
    }
    
    .percent-counter {
      font-family: serif;
      font-size: 14vw;
      color:rgb(255, 255, 255);
      font-weight: bold;
      text-shadow: 0 0 15px rgba(241, 217, 255, 0.8);
      transition: opacity 0.5s ease;
      margin-bottom: 15px;
      letter-spacing: -1px;
    }
    
    .subtitle-text {
      font-size: 2.5vw;
      color: #fff;
      opacity: 0.9;
      transition: opacity 0.5s ease;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    
    .blink {
      animation: blink 1s infinite;
    }
    
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    
    .scanline {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: rgba(255, 255, 255, 0.5);
      opacity: 0.7;
      animation: scan 3s linear infinite;
      pointer-events: none;
    }
    
    @keyframes scan {
      0% { transform: translateY(0); }
      100% { transform: translateY(100vh); }
    }
    
    .loading-complete {
      transform: translateX(-100%);
    }
    
    .text-fade {
      opacity: 0;
    }
    
    body {
      overflow: hidden;
    }
  `;
  document.head.appendChild(loadingStyle);

  // Animate percentage from 0 to 100 with smooth transitions
  let percent = 0;
  const percentInterval = setInterval(() => {
    percent += 1;
    percentCounter.innerHTML = `<span>${percent}</span>%`;
    
    // Add random technical messages at specific percentages
    if (percent === 25) {
      subtitleText.innerHTML = "ESTABLISHING CONNECTION <span class='blink'>_</span>";
    } else if (percent === 50) {
      subtitleText.innerHTML = "LOADING NEURAL PATHWAYS <span class='blink'>_</span>";
    } else if (percent === 75) {
      subtitleText.innerHTML = "CALIBRATING INTERFACE <span class='blink'>_</span>";
    } else if (percent === 95) {
      subtitleText.innerHTML = "ACCESS GRANTED <span class='blink'>_</span>";
    }
    
    if (percent >= 100) {
      clearInterval(percentInterval);
      // Fade out the text first, then slide the overlay away
      setTimeout(() => {
        percentCounter.classList.add('text-fade');
        subtitleText.classList.add('text-fade');
        
        setTimeout(() => {
          loadingOverlay.classList.add('loading-complete');
          setTimeout(() => {
            loadingOverlay.remove();
            document.body.style.overflow = 'auto';
          }, 1600); // Remove after animation completes
        }, 600); // Wait for text to fade before sliding
      }, 200);
    }
  }, 25); // Adjusted for slightly faster loading

  // Get the headline element
  const headline = document.querySelector('.headline.centered');
  
  // Split the text into individual letters and wrap each in a span
  headline.innerHTML = headline.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  // Create a smoother, more natural wave animation
  function animateWave() {
    anime({
      targets: '.headline .letter',
      translateY: function(el, i) {
        return Math.sin(i * 0.1) * 15; // Gentler wave with reduced amplitude and frequency
      },
      duration: 2000,
      easing: 'easeInOutQuad', // Smoother easing function
      delay: function(el, i) {
        return i * 30; // Reduced delay between letters for more cohesive movement
      },
      loop: true,
      direction: 'alternate', // Creates a natural back-and-forth motion
      elasticity: 500 // Adds a slight bounce/elasticity to the animation
    });
  }

  // Start the wave animation
  animateWave();
  
  // Add CSS for better visualization
  const style = document.createElement('style');
  style.textContent = `
    .headline .letter {
      display: inline-block;
      line-height: 1em;
      will-change: transform;
      transition: transform 0.1s; /* Add a slight transition for smoother motion */
    }
    
    .headline {
      perspective: 1000px;
    }
  `;
  document.head.appendChild(style);
});
