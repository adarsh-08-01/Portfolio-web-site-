// Interactive Animations & Card Dynamics for Adarsh Kashyap Portfolio

document.addEventListener('DOMContentLoaded', () => {
  initStickerTilt();
  initScrollAnimations();
  initDoodleSparks();
  initCardScrollStackParallax();
  initNameTypingAnimation();
  initTypingAnimation();
});

// Typewriter Animation for Main Name Title Box (ADARSH)
function initNameTypingAnimation() {
  const nameElement = document.querySelector('.robin-name-text');
  if (!nameElement) return;

  const fullName = "ADARSH";
  nameElement.innerHTML = `<span class="name-typewriter-text"></span><span class="name-typewriter-cursor">|</span>`;
  const textContainer = nameElement.querySelector('.name-typewriter-text');
  const cursor = nameElement.querySelector('.name-typewriter-cursor');

  let i = 0;
  function typeName() {
    if (i < fullName.length) {
      textContainer.textContent += fullName.charAt(i);
      i++;
      setTimeout(typeName, 110);
    } else {
      setTimeout(() => {
        if (cursor) cursor.style.display = 'none';
      }, 1500);
    }
  }

  setTimeout(typeName, 250);
}

// Typewriter Text Animation for Hero Tagline
function initTypingAnimation() {
  const target = document.querySelector('.robin-tagline-text');
  if (!target) return;

  const phrases = [
    "I build native SwiftUI iOS apps. 📱",
    "I craft high-impact video edits. 🎬",
    "I design software that gets out of your way. ✨"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 65;

  target.innerHTML = `<span class="typewriter-text"></span><span class="typewriter-cursor">|</span>`;
  const textContainer = target.querySelector('.typewriter-text');

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      charIndex--;
      typingSpeed = 35;
    } else {
      charIndex++;
      typingSpeed = 65;
    }

    textContainer.textContent = currentPhrase.substring(0, charIndex);

    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 2200; // Pause at full phrase
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400; // Pause before next phrase
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// Sticker & Polaroid 3D Tilt on Hover
function initStickerTilt() {
  const tiltElements = document.querySelectorAll('.tilt-card, .polaroid-card, .skill-pair, .framed-screenshot-wrapper');
  
  tiltElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}

// 3D Deck-of-Cards Scroll Stacking Parallax & Depth Scale Animation
function initCardScrollStackParallax() {
  const cards = document.querySelectorAll('.project-block-stacked');
  if (!cards.length) return;

  function updateCardTransforms() {
    const topThreshold = 120;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const nextCard = cards[index + 1];

      if (nextCard) {
        const nextRect = nextCard.getBoundingClientRect();
        // If next card is sliding up over current card
        if (nextRect.top <= topThreshold + 100 && nextRect.top >= 0) {
          const progress = (topThreshold + 100 - nextRect.top) / 100;
          const scale = Math.max(0.93, 1 - progress * 0.07);
          const opacity = Math.max(0.85, 1 - progress * 0.15);
          card.style.transform = `scale(${scale})`;
          card.style.filter = `brightness(${1 - progress * 0.1})`;
        } else if (nextRect.top < 0) {
          card.style.transform = `scale(0.93)`;
          card.style.filter = `brightness(0.9)`;
        } else {
          card.style.transform = `scale(1)`;
          card.style.filter = `brightness(1)`;
        }
      }
    });
  }

  window.addEventListener('scroll', updateCardTransforms, { passive: true });
  updateCardTransforms();
}

// Scroll Intersection Reveal Animation
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// Doodle Sparks Effect on Click
function initDoodleSparks() {
  document.addEventListener('click', (e) => {
    if (e.target.closest('button, a, input, textarea')) return;
    
    const spark = document.createElement('div');
    spark.className = 'click-spark';
    spark.innerHTML = `
      <svg viewBox="0 0 40 40" width="24" height="24">
        <path d="M20 2 L23 15 L36 12 L26 21 L34 32 L20 25 L8 34 L14 21 L2 14 L15 14 Z" fill="var(--ca-yellow)" stroke="var(--ca-ink)" stroke-width="1.5" />
      </svg>
    `;
    spark.style.left = `${e.clientX - 12}px`;
    spark.style.top = `${e.clientY - 12}px`;
    document.body.appendChild(spark);

    setTimeout(() => {
      spark.remove();
    }, 600);
  });
}
