// IMMEDIATE DEBUG: Check if script is loading
console.log('🚀 SCRIPT.JS IS LOADING!');
console.log('📅 Current time:', new Date().toLocaleTimeString());

/***********************************
Cursor
************************************/

let curs = document.querySelector(".cursor");

let curX = 0, curY = 0, targetX = 0, targetY = 0;

document.addEventListener("mousemove", (e) => {
  targetX = e.pageX - 15;
  targetY = e.pageY - 15;
});

function animateCursor() {
  if (curs) {
    curX += (targetX - curX) / 12;
    curY += (targetY - curY) / 12;
    curs.style.transform = `translate(${curX}px, ${curY}px)`;
  }
  requestAnimationFrame(animateCursor);
}

if (curs) {
  animateCursor();
} else {
  console.log('⚠️ Cursor element not found - custom cursor disabled');
}

/***********************************
Timer
************************************/

var h = document.getElementById('h'),
    m = document.getElementById('m'),
    s = document.getElementById('s'),
    textProp = h && h.textContent !== undefined ? 'textContent' : 'innerText';

function tick() {
    var date = new Date(),
        hours = date.getHours(),
        mins = date.getMinutes(),
        secs = date.getSeconds();
    
    // Only update if elements exist
    if (h) h[textProp] = hours < 10 ? '0'+hours : hours;
    if (m) m[textProp] = mins < 10 ? '0'+mins : mins;
    if (s) s[textProp] = secs < 10 ? '0'+secs : secs;
}

// Only start timer if elements exist
if (h && m && s) {
    tick();
    setInterval(tick, 1000);
} else {
    console.log('⚠️ Timer elements (h, m, s) not found - timer disabled');
}

/***********************************
Annime.js filter SVG
************************************/
/*
var timeline = anime.timeline({
  duration: 1200,
  easing: 'linear',
  autoplay: true,
  loop:true,
  direction:'alternate',
  easing:'easeInOutQuad'
});

timeline.add({
  targets: ['feTurbulence', 'feMorphology'],
  // baseFrequency: ['0.014 0.014', '0.023 0.023'],
  radius: [14, 8, 20, 8, 14]
  // seed: [4, 8, 20, 8, 4]
});
*/



/***********************************
Year Roman Numerals
************************************/

function convertToRomanNumerals(num) {
            const values = [
                { value: 1000, symbol: 'M' },
                { value: 900, symbol: 'CM' },
                { value: 500, symbol: 'D' },
                { value: 400, symbol: 'CD' },
                { value: 100, symbol: 'C' },
                { value: 90, symbol: 'XC' },
                { value: 50, symbol: 'L' },
                { value: 40, symbol: 'XL' },
                { value: 10, symbol: 'X' },
                { value: 9, symbol: 'IX' },
                { value: 5, symbol: 'V' },
                { value: 4, symbol: 'IV' },
                { value: 1, symbol: 'I' }
            ];
            
            let result = '';
            for (const { value, symbol } of values) {
                while (num >= value) {
                    result += symbol;
                    num -= value;
                }
            }
            return result;
        }

        function displayYearInRomanNumerals() {
            const currentYear = new Date().getFullYear();
            const yearInRoman = convertToRomanNumerals(currentYear);
            const yearElement = document.getElementById("year");
            if (yearElement) {
                yearElement.innerHTML = yearInRoman;
            } else {
                console.log('⚠️ Year element not found - year display disabled');
            }
        }
        window.onload = displayYearInRomanNumerals;
//document.getElementById("year").innerHTML = new Date().getFullYear();


/***********************************
Switch CSS Colors
************************************/

const toggleThemeBtn = document.querySelector('#toggle-theme');

if (toggleThemeBtn) {
    toggleThemeBtn.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'grey' : currentTheme === 'grey' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
    });
} else {
    console.log('⚠️ Toggle theme button not found - theme switching disabled');
}



/***********************************
Switch Fullscreen
************************************/

function toggleFullscreen(elem) {
 elem = elem || document.documentElement;  
 if (!document.fullscreenElement && !document.mozFullScreenElement &&
     !document.webkitFullscreenElement && !document.msFullscreenElement) {        
  if (elem.requestFullscreen) {
   elem.requestFullscreen();
  } else if (elem.msRequestFullscreen) {
   elem.msRequestFullscreen();
  } else if (elem.mozRequestFullScreen) {
   elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
   elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  }
 } else {
  if (document.exitFullscreen) {
   document.exitFullscreen();
  } else if (document.msExitFullscreen) {
   document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
   document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
   document.webkitExitFullscreen();
  }
 }
}

const fullscreenBtn = document.getElementById('fullscreen-mode');
if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', function() {
        toggleFullscreen();
    });
} else {
    console.log('⚠️ Fullscreen button not found - fullscreen feature disabled');
}


/***********************************
Activity
************************************/

var timeoutID;

function setup() {
  this.addEventListener("mousemove", resetTimer, false);
  this.addEventListener("mousedown", resetTimer, false);
  this.addEventListener("keypress", resetTimer, false);
  this.addEventListener("DOMMouseScroll", resetTimer, false);
  this.addEventListener("mousewheel", resetTimer, false);
  this.addEventListener("touchmove", resetTimer, false);
  this.addEventListener("MSPointerMove", resetTimer, false);

  startTimer();
}
setup();

function startTimer() {
  timeoutID = window.setTimeout(goInactive, 12000);
}

function resetTimer(e) {
  window.clearTimeout(timeoutID);

  goActive();
}

function goInactive() {
  gsap.to(".activity", { 
    duration: 5, 
    autoAlpha: 1,
    ease: "power4.out(2)", 
    delay:0 
  });
}

function goActive() {
  gsap.to(".activity", { 
    duration: 0, 
    autoAlpha: 0, 
    ease: "power4.out(2)", 
    delay:0 
  });
  startTimer();
}

document.addEventListener('DOMContentLoaded', () => {
  const interBubble = document.querySelector('.interactive');
  
  if (interBubble) {
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    };

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
  } else {
    console.log('⚠️ Interactive bubble element not found - interactive effect disabled');
  }
});

/***********************************
Smooth Scrolling
************************************/

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Use GSAP for smoother scrolling animation
        gsap.to(window, {
          duration: 1.2,
          scrollTo: {
            y: targetElement,
            offsetY: 0
          },
          ease: "power3.out"
        });
      }
    });
  });
});

/***********************************
Studio Section Display Manager
************************************/

document.addEventListener('DOMContentLoaded', () => {
  // Get studio section and cards container
  const studioSection = document.getElementById('studio');
  const studioContent = studioSection?.querySelector('.section-content');
  const cardsContainer = studioSection?.querySelector('.cards-container');
  
  if (!studioSection || !cardsContainer) return;
  
  // Function to adjust studio section display
  function adjustStudioSection() {
    // Get the total height of all cards
    const cardsHeight = cardsContainer.scrollHeight;
    const headerHeight = 100; // Approximate height for headers/titles
    const totalHeight = cardsHeight + headerHeight;
    
    // If we're on mobile
    if (window.innerWidth <= 500) {
      // Make studio section height fit all content
      studioSection.style.height = 'auto';
      studioSection.style.minHeight = '100vh';
      
      // Update cards container styles
      cardsContainer.style.maxHeight = 'none';
      cardsContainer.style.height = 'auto';
      cardsContainer.style.overflowY = 'visible';
      
      // Make studio content fit all cards
      if (studioContent) {
        studioContent.style.height = 'auto';
        studioContent.style.position = 'relative';
        studioContent.style.overflow = 'visible';
      }
      
      // Temporarily disable scroll snap on the section for smoother scrolling
      studioSection.style.scrollSnapAlign = 'none';
    } else {
      // Reset for desktop
      studioSection.style.height = '100vh';
      studioSection.style.scrollSnapAlign = 'start';
    }
  }
  
  // Run on load
  adjustStudioSection();
  
  // Run on resize
  window.addEventListener('resize', adjustStudioSection);
  
  // Create an intersection observer to detect when studio section enters viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && window.innerWidth <= 500) {
        // When section is in view
        document.documentElement.style.scrollSnapType = 'none';
        adjustStudioSection();
      } else if (!entry.isIntersecting && window.innerWidth <= 500) {
        // When section is not in view
        document.documentElement.style.scrollSnapType = 'y mandatory';
      }
    });
  }, { threshold: 0.1 });
  
  // Start observing
  observer.observe(studioSection);
});

/***********************************
Easter Egg - 打飞机游戏 (Triple Space Activation)
************************************/

// Triple space activation easter egg
let spaceClickCount = 0;
let spaceClickTimeout;

// Track space key presses for activation
document.addEventListener('keydown', (e) => {
  // ESC key to exit game if active
  if (e.key === 'Escape' && gameActive) {
    console.log('🚪 ESC pressed - exiting game');
    exitGame();
    return;
  }
  
  // Space key activation (only when game is not active)
  if (e.key === ' ' && !gameActive) {
    e.preventDefault(); // Prevent page scroll
    
    spaceClickCount++;
    console.log(`🚀 Space press ${spaceClickCount}/3`);
    
    // Clear existing timeout
    if (spaceClickTimeout) {
      clearTimeout(spaceClickTimeout);
    }
    
    // Check if we have 3 space presses
    if (spaceClickCount >= 3) {
      console.log('🎉 Triple space detected! Activating easter egg!');
      activateEasterEgg();
      spaceClickCount = 0;
      return;
    }
    
    // Reset space count after 2 seconds if not completed
    spaceClickTimeout = setTimeout(() => {
      console.log('⏰ Space click timeout - resetting');
      spaceClickCount = 0;
    }, 2000);
  }
});

// Function to exit the game and return to main interface
function exitGame() {
  gameActive = false;
  const overlay = document.getElementById('mini-game-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    console.log('✅ Returned to main interface');
  }
  
  // Reset game state
  if (canvas && ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  
  // Reset variables
  score = 0;
  lives = 3;
  gameSpeed = 2;
  bullets = [];
  enemies = [];
  particles = [];
  scorePopups = [];
  
  console.log('🔄 Game state reset');
}

// Debug: Log when the script loads
console.log('🎮 Triple space easter egg loaded!');
console.log('💡 Press SPACE 3 times quickly to activate the game!');
console.log('🚪 Press ESC during the game to exit back to main interface');

// Setup function for the easter egg
function setupEasterEgg() {
  try {
    console.log('🚀 Setting up triple space easter egg system...');
    console.log('⌨️ Space key listener active');
    console.log('🚪 ESC key listener active for game exit');
    console.log('� Tip: Press SPACE 3 times quickly to activate!');
    
    return true;
  } catch (error) {
    console.error('❌ Error setting up easter egg:', error);
    return false;
  }
}

function handleTouchStart(e) {
  if (isAtTop) {
    pullStartY = e.touches[0].clientY;
    lastTouchY = pullStartY;
    isPulling = true;
  }
}

function handleTouchMove(e) {
  if (!isPulling || !isAtTop) return;
  
  e.preventDefault();
  const currentY = e.touches[0].clientY;
  const deltaY = currentY - pullStartY;
  
  if (deltaY > 0) {
    pullDistance = Math.min(deltaY, maxPull);
    updatePullInterface();
  }
}

function handleTouchEnd(e) {
  if (isPulling) {
    isPulling = false;
    checkPullActivation();
  }
}

function handleMouseStart(e) {
  if (isAtTop) {
    pullStartY = e.clientY;
    isPulling = true;
  }
}

function handleMouseMove(e) {
  if (!isPulling || !isAtTop) return;
  
  const deltaY = e.clientY - pullStartY;
  if (deltaY > 0) {
    pullDistance = Math.min(deltaY, maxPull);
    updatePullInterface();
  }
}

function handleMouseEnd(e) {
  if (isPulling) {
    isPulling = false;
    checkPullActivation();
  }
}

function handleWheel(e) {
  if (!isAtTop) return;
  
  if (e.deltaY < 0) { // Scrolling up
    e.preventDefault();
    pullDistance = Math.min(pullDistance + Math.abs(e.deltaY) * 0.5, maxPull);
    updatePullInterface();
    
    // Auto-release after a short delay
    setTimeout(() => {
      if (!isPulling) {
        checkPullActivation();
      }
    }, 100);
  }
}

function updatePullInterface() {
  if (!pullInterface) return;
  
  const progress = Math.min(pullDistance / pullThreshold, 1) * 100;
  const pullRatio = pullDistance / maxPull;
  
  // Show interface
  if (!pullInterface.classList.contains('visible')) {
    console.log('🎯 Pull interface now visible!');
  }
  pullInterface.classList.add('visible');
  pullInterface.style.transform = `translateY(${Math.min(pullDistance, maxPull)}px)`;
  
  // Update progress bar
  if (progressBar) {
    progressBar.style.width = `${progress}%`;
  }
  
  // Update text and animations based on progress
  if (pullDistance >= pullThreshold * 0.7) {
    if (thresholdText) {
      thresholdText.classList.add('visible');
    }
    if (pullIcon) {
      pullIcon.style.transform = `scale(${1 + pullRatio * 0.3}) rotate(${pullRatio * 360}deg)`;
    }
  }
  
  // Change interface appearance when near threshold
  if (pullDistance >= pullThreshold) {
    pullInterface.classList.add('activated');
    if (pullIcon) {
      pullIcon.innerHTML = '🚀';
    }
    console.log('🔥 Pull threshold reached! Release to activate!');
  } else {
    pullInterface.classList.remove('activated');
    if (pullIcon) {
      pullIcon.innerHTML = '🎮';
    }
  }
  
  console.log(`⬇️ Pull distance: ${pullDistance.toFixed(1)}px / ${pullThreshold}px (${progress.toFixed(1)}%)`);
}

function checkPullActivation() {
  if (pullDistance >= pullThreshold) {
    console.log('🎉 Pull threshold reached! Activating easter egg!');
    activatePullEasterEgg();
  } else {
    console.log('📉 Pull not enough, releasing interface');
    hidePullInterface();
  }
}

function activatePullEasterEgg() {
  // Add success animation
  if (pullInterface) {
    pullInterface.style.background = 'linear-gradient(135deg, rgba(76, 175, 80, 0.95), rgba(139, 195, 74, 0.95))';
    pullInterface.style.transform = 'translateY(0px) scale(1.05)';
    
    setTimeout(() => {
      activateEasterEgg();
      hidePullInterface();
    }, 500);
  } else {
    activateEasterEgg();
  }
}

function hidePullInterface() {
  if (!pullInterface) return;
  
  pullInterface.classList.remove('visible', 'activated');
  pullInterface.style.transform = 'translateY(0px) scale(1)';
  
  if (thresholdText) {
    thresholdText.classList.remove('visible');
  }
  
  if (pullIcon) {
    pullIcon.style.transform = 'scale(1) rotate(0deg)';
    pullIcon.innerHTML = '🎮';
  }
  
  if (progressBar) {
    progressBar.style.width = '0%';
  }
  
  pullDistance = 0;
  
  setTimeout(() => {
    if (pullInterface) {
      pullInterface.style.background = 'linear-gradient(135deg, rgba(76, 175, 80, 0.95), rgba(33, 150, 243, 0.95))';
    }
  }, 300);
}

// Add scroll event listener with throttling for performance
let scrollTimeout;
window.addEventListener('scroll', () => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
  scrollTimeout = setTimeout(handleModernScroll, 16); // ~60fps
});

// Debug: Log when the script loads
console.log('🎮 Modern pull-to-activate easter egg loaded!');
console.log('� Go to the top of the page and pull down to activate!');

// Try multiple ways to ensure the event listener is attached
function setupEasterEgg() {
  try {
    console.log('🚀 Setting up modern easter egg system...');
    initPullInterface();
    initPullEvents();
    console.log('� Pull interface and events are active');
    console.log('💡 Tip: Scroll to the very top, then pull down!');
    
    // Test scroll immediately
    console.log('📊 Current scroll position:', window.pageYOffset);
    console.log('📊 Document scroll top:', document.documentElement.scrollTop);
    
    return true;
  } catch (error) {
    console.error('❌ Error setting up easter egg:', error);
    return false;
  }
}

// Initialize immediately and also on DOM ready
console.log('🔄 Initializing easter egg...');
setupEasterEgg();

// Also try on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('🔄 DOM loaded, re-initializing easter egg...');
  setupEasterEgg();
});

// And try on window load as final fallback
window.addEventListener('load', () => {
  console.log('🔄 Window loaded, final easter egg check...');
  setupEasterEgg();
});

// Test function you can call manually from console
window.testEasterEgg = function() {
  console.log('🧪 Manual test function called!');
  console.log('📊 Scroll position:', window.pageYOffset);
  console.log('📊 Variables state:', {
    scrollUpCount,
    lastScrollTop,
    isAtTop
  });
  activateEasterEgg();
};

// Also expose activate function for manual testing
window.activateEasterEgg = function() {
  console.log('🎮 Manually activating easter egg...');
  const overlay = document.getElementById('mini-game-overlay');
  if (overlay) {
    overlay.classList.add('active');
    initGame();
    console.log('✅ Game activated successfully!');
  } else {
    console.error('❌ Game overlay not found!');
  }
};

console.log('🔧 Test functions added to window object:');
console.log('   - testEasterEgg() - Test the easter egg system');
console.log('   - activateEasterEgg() - Manually activate the game');

// Try multiple ways to ensure it runs
document.addEventListener('DOMContentLoaded', setupEasterEgg);

// Fallback in case DOMContentLoaded already fired
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupEasterEgg);
} else {
  setupEasterEgg();
}

// Game variables
let gameActive = false;
let canvas, ctx;
let player, bullets, enemies, particles;
let score = 0;
let lives = 3;
let gameSpeed = 2;
let enemySpawnRate = 0.02;

// Game objects
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
    this.speed = 6;
    this.color = '#FFFFFF'; // White color for black/white theme
    this.trail = [];
    this.maxTrailLength = 10;
    this.maxHealth = 100;
    this.health = 100;
  }
  
  update() {
    // Add trail effect
    this.trail.push({ x: this.x + this.width/2, y: this.y + this.height/2 });
    if (this.trail.length > this.maxTrailLength) {
      this.trail.shift();
    }
    
    // Boundary checks
    if (this.x < 0) this.x = 0;
    if (this.x + this.width > canvas.width) this.x = canvas.width - this.width;
    if (this.y < 0) this.y = 0;
    if (this.y + this.height > canvas.height) this.y = canvas.height - this.height;
  }
  
  draw() {
    // Draw trail in grayscale
    ctx.globalAlpha = 0.3;
    for (let i = 0; i < this.trail.length; i++) {
      const alpha = i / this.trail.length * 0.5;
      const size = (i / this.trail.length) * 8;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = '#CCCCCC'; // Light gray for trail
      ctx.beginPath();
      ctx.arc(this.trail[i].x, this.trail[i].y, size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    
    // Draw main aircraft body in black and white
    ctx.fillStyle = '#FFFFFF'; // White body
    ctx.fillRect(this.x + 8, this.y + 8, this.width - 16, this.height - 8);
    
    // Draw aircraft nose (pointed front) in black
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(this.x + this.width/2, this.y);
    ctx.lineTo(this.x + 6, this.y + 12);
    ctx.lineTo(this.x + this.width - 6, this.y + 12);
    ctx.closePath();
    ctx.fill();
    
    // Draw wings in gray
    ctx.fillStyle = '#808080';
    ctx.fillRect(this.x, this.y + 16, this.width, 8);
    
    // Draw engine glow in white
    ctx.shadowColor = '#FFFFFF';
    ctx.shadowBlur = 10;
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(this.x + 12, this.y + 28, 8, 6);
    ctx.shadowBlur = 0;
    
    // Draw health bar above the player
    this.drawHealthBar();
  }
  
  drawHealthBar() {
    const barWidth = this.width;
    const barHeight = 4;
    const barX = this.x;
    const barY = this.y - 10;
    
    // Background (black)
    ctx.fillStyle = '#000000';
    ctx.fillRect(barX, barY, barWidth, barHeight);
    
    // Health bar (white)
    const healthWidth = (this.health / this.maxHealth) * barWidth;
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(barX, barY, healthWidth, barHeight);
    
    // Border (gray)
    ctx.strokeStyle = '#808080';
    ctx.lineWidth = 1;
    ctx.strokeRect(barX, barY, barWidth, barHeight);
  }
  
  takeDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      this.health = 0;
      return true; // Player died
    }
    return false;
  }
}

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 6;
    this.height = 12;
    this.speed = 10;
    this.color = '#FFFFFF'; // White bullets for black/white theme
    this.trail = [];
    this.maxTrailLength = 5;
  }
  
  update() {
    this.y -= this.speed;
    
    // Add trail effect
    this.trail.push({ x: this.x + this.width/2, y: this.y + this.height });
    if (this.trail.length > this.maxTrailLength) {
      this.trail.shift();
    }
  }
  
  draw() {
    // Draw trail in grayscale
    for (let i = 0; i < this.trail.length; i++) {
      const alpha = (i / this.trail.length) * 0.6;
      const size = (i / this.trail.length) * 3;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = '#CCCCCC'; // Gray trail
      ctx.beginPath();
      ctx.arc(this.trail[i].x, this.trail[i].y, size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    
    // Draw bullet in black and white
    ctx.shadowColor = '#FFFFFF';
    ctx.shadowBlur = 8;
    ctx.fillStyle = '#FFFFFF'; // White bullet
    ctx.fillRect(this.x, this.y, this.width, this.height);
    
    // Add bright core
    ctx.fillStyle = '#000000'; // Black core
    ctx.fillRect(this.x + 1, this.y + 2, this.width - 2, this.height - 4);
    ctx.shadowBlur = 0;
  }
}

class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 28;
    this.height = 28;
    this.speed = gameSpeed * (0.8 + Math.random() * 0.4);
    this.color = '#000000'; // Black enemies for black/white theme
    this.health = 1;
    this.type = Math.random() < 0.2 ? 'boss' : 'normal';
    
    if (this.type === 'boss') {
      this.width = 40;
      this.height = 40;
      this.health = 3;
      this.speed *= 0.7;
    }
  }
  
  update() {
    this.y += this.speed;
  }
  
  draw() {
    if (this.type === 'boss') {
      // Draw boss enemy in black and white
      ctx.fillStyle = '#000000'; // Black boss
      ctx.fillRect(this.x + 4, this.y + 4, this.width - 8, this.height - 8);
      
      // Boss glow effect in white
      ctx.shadowColor = '#FFFFFF';
      ctx.shadowBlur = 15;
      ctx.fillStyle = '#808080'; // Gray core for boss
      ctx.fillRect(this.x + 8, this.y + 8, this.width - 16, this.height - 16);
      ctx.shadowBlur = 0;
      
      // Health indicator in black and white
      ctx.fillStyle = this.health > 2 ? '#FFFFFF' : this.health > 1 ? '#808080' : '#000000';
      ctx.fillRect(this.x, this.y - 6, (this.width * this.health / 3), 2);
      
    } else {
      // Draw normal enemy in black and white
      ctx.fillStyle = '#000000'; // Black enemy
      ctx.fillRect(this.x + 2, this.y + 2, this.width - 4, this.height - 4);
    }
    
    // Draw enemy aircraft nose (pointed down) in gray
    ctx.fillStyle = '#808080';
    ctx.beginPath();
    ctx.moveTo(this.x + this.width/2, this.y + this.height);
    ctx.lineTo(this.x + 6, this.y + this.height - 8);
    ctx.lineTo(this.x + this.width - 6, this.y + this.height - 8);
    ctx.closePath();
    ctx.fill();
  }
}

class Particle {
  constructor(x, y, type = 'explosion') {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 8;
    this.vy = (Math.random() - 0.5) * 8;
    this.life = 40;
    this.maxLife = 40;
    this.size = Math.random() * 4 + 2;
    this.type = type;
    
    if (type === 'explosion') {
      // Random grayscale for explosions
      const gray = Math.floor(Math.random() * 255);
      this.color = `rgb(${gray}, ${gray}, ${gray})`;
    } else if (type === 'star') {
      this.color = '#FFFFFF';
      this.vy = Math.random() * 2 + 1;
      this.vx = 0;
      this.life = 200;
      this.maxLife = 200;
    }
  }
  
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.life--;
    
    if (this.type === 'explosion') {
      this.vx *= 0.98;
      this.vy *= 0.98;
      this.size *= 0.96;
    }
  }
  
  draw() {
    const alpha = this.life / this.maxLife;
    ctx.globalAlpha = alpha;
    
    if (this.type === 'star') {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillStyle = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }
    
    ctx.globalAlpha = 1;
  }
}

// Game controls
const keys = {};

document.addEventListener('keydown', (e) => {
  if (gameActive) {
    // Handle ESC key to exit game
    if (e.key === 'Escape') {
      exitGame();
      return;
    }
    
    keys[e.key.toLowerCase()] = true;
    
    if (e.key === ' ') {
      e.preventDefault();
      shootBullet();
    }
  }
});

document.addEventListener('keyup', (e) => {
  if (gameActive) {
    keys[e.key.toLowerCase()] = false;
  }
});

function activateEasterEgg() {
  const overlay = document.getElementById('mini-game-overlay');
  overlay.classList.add('active');
  initGame();
}

function initGame() {
  canvas = document.getElementById('game-canvas');
  ctx = canvas.getContext('2d');
  
  // Initialize game objects
  player = new Player(canvas.width / 2 - 15, canvas.height - 50);
  bullets = [];
  enemies = [];
  particles = [];
  
  // Reset game state
  score = 0;
  lives = 3;
  gameSpeed = 2;
  gameActive = true;
  
  updateUI();
  gameLoop();
  
  // Load high score
  const savedHighScore = localStorage.getItem('sgh-airplane-highscore');
  if (savedHighScore) {
    document.getElementById('high-score').textContent = savedHighScore;
  }
}

function updateUI() {
  document.getElementById('score').textContent = score;
  document.getElementById('lives').textContent = lives;
  if (player && document.getElementById('health')) {
    document.getElementById('health').textContent = Math.max(0, Math.floor(player.health));
  }
}

function shootBullet() {
  bullets.push(new Bullet(player.x + player.width/2 - 2, player.y));
}

function spawnEnemy() {
  if (Math.random() < enemySpawnRate) {
    const x = Math.random() * (canvas.width - 40);
    enemies.push(new Enemy(x, -40));
  }
}

function spawnStars() {
  // Add background stars
  if (Math.random() < 0.3) {
    particles.push(new Particle(Math.random() * canvas.width, -5, 'star'));
  }
}

function checkCollisions() {
  // Bullet-enemy collisions
  for (let i = bullets.length - 1; i >= 0; i--) {
    for (let j = enemies.length - 1; j >= 0; j--) {
      if (bullets[i] && enemies[j] && 
          bullets[i].x < enemies[j].x + enemies[j].width &&
          bullets[i].x + bullets[i].width > enemies[j].x &&
          bullets[i].y < enemies[j].y + enemies[j].height &&
          bullets[i].y + bullets[i].height > enemies[j].y) {
        
        // Reduce enemy health
        enemies[j].health--;
        
        // Create explosion particles
        const particleCount = enemies[j].type === 'boss' ? 15 : 10;
        for (let k = 0; k < particleCount; k++) {
          particles.push(new Particle(
            enemies[j].x + enemies[j].width/2, 
            enemies[j].y + enemies[j].height/2, 
            'explosion'
          ));
        }
        
        bullets.splice(i, 1);
        
        // Remove enemy if health depleted
        if (enemies[j].health <= 0) {
          const scoreBonus = enemies[j].type === 'boss' ? 50 : 10;
          score += scoreBonus;
          enemies.splice(j, 1);
          
          // Show score popup
          showScorePopup(enemies[j]?.x || 200, enemies[j]?.y || 200, `+${scoreBonus}`);
        }
        
        // Increase difficulty
        if (score % 200 === 0) {
          gameSpeed += 0.3;
          enemySpawnRate += 0.003;
        }
        
        updateUI();
        break;
      }
    }
  }
  
  // Player-enemy collisions
  for (let i = enemies.length - 1; i >= 0; i--) {
    if (enemies[i].x < player.x + player.width &&
        enemies[i].x + enemies[i].width > player.x &&
        enemies[i].y < player.y + player.height &&
        enemies[i].y + enemies[i].height > player.y) {
      
      // Create explosion particles
      for (let k = 0; k < 15; k++) {
        particles.push(new Particle(player.x + player.width/2, player.y + player.height/2, 'explosion'));
      }
      
      enemies.splice(i, 1);
      
      // Damage player health instead of losing lives immediately
      const playerDied = player.takeDamage(25);
      if (playerDied) {
        lives--;
        player.health = player.maxHealth; // Reset health for next life
      }
      
      updateUI();
      
      // Screen shake effect
      canvas.style.transform = 'translate(2px, 2px)';
      setTimeout(() => {
        canvas.style.transform = 'translate(-2px, -2px)';
        setTimeout(() => {
          canvas.style.transform = 'translate(0px, 0px)';
        }, 50);
      }, 50);
      
      if (lives <= 0) {
        gameOver();
      }
    }
  }
}

let scorePopups = [];

function showScorePopup(x, y, text) {
  scorePopups.push({
    x: x,
    y: y,
    text: text,
    life: 60,
    maxLife: 60
  });
}

function updateScorePopups() {
  for (let i = scorePopups.length - 1; i >= 0; i--) {
    const popup = scorePopups[i];
    popup.y -= 1;
    popup.life--;
    
    const alpha = popup.life / popup.maxLife;
    ctx.globalAlpha = alpha;
    ctx.fillStyle = '#4CAF50';
    ctx.font = 'bold 16px Inter';
    ctx.textAlign = 'center';
    ctx.fillText(popup.text, popup.x, popup.y);
    ctx.globalAlpha = 1;
    
    if (popup.life <= 0) {
      scorePopups.splice(i, 1);
    }
  }
}

function gameLoop() {
  if (!gameActive) return;
  
  // Clear canvas with black and white gradient background
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#FFFFFF'); // White at top
  gradient.addColorStop(0.5, '#C0C0C0'); // Light gray in middle
  gradient.addColorStop(1, '#808080'); // Dark gray at bottom
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Update player movement
  if (keys['a'] && player.x > 0) player.x -= player.speed;
  if (keys['d'] && player.x < canvas.width - player.width) player.x += player.speed;
  if (keys['w'] && player.y > 0) player.y -= player.speed;
  if (keys['s'] && player.y < canvas.height - player.height) player.y += player.speed;
  
  // Update player
  player.update();
  player.draw();
  
  // Update bullets
  for (let i = bullets.length - 1; i >= 0; i--) {
    bullets[i].update();
    bullets[i].draw();
    
    if (bullets[i].y < 0) {
      bullets.splice(i, 1);
    }
  }
  
  // Spawn and update enemies
  spawnEnemy();
  spawnStars();
  
  for (let i = enemies.length - 1; i >= 0; i--) {
    enemies[i].update();
    enemies[i].draw();
    
    if (enemies[i].y > canvas.height) {
      enemies.splice(i, 1);
    }
  }
  
  // Update particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].draw();
    
    if (particles[i].life <= 0) {
      particles.splice(i, 1);
    }
  }
  
  // Update score popups
  updateScorePopups();
  
  checkCollisions();
  requestAnimationFrame(gameLoop);
}

function gameOver() {
  gameActive = false;
  
  // Save high score
  const currentHighScore = parseInt(document.getElementById('high-score').textContent);
  if (score > currentHighScore) {
    localStorage.setItem('sgh-airplane-highscore', score);
    document.getElementById('high-score').textContent = score;
  }
  
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = '#fff';
  ctx.font = '24px Inter';
  ctx.textAlign = 'center';
  ctx.fillText('Game Over!', canvas.width/2, canvas.height/2 - 20);
  ctx.font = '16px Inter';
  ctx.fillText(`Final Score: ${score}`, canvas.width/2, canvas.height/2 + 10);
  ctx.fillText('Click Restart to play again', canvas.width/2, canvas.height/2 + 35);
}

// Event listeners for game controls
document.getElementById('close-game').addEventListener('click', () => {
  gameActive = false;
  document.getElementById('mini-game-overlay').classList.remove('active');
});

document.getElementById('restart-game').addEventListener('click', () => {
  initGame();
});
