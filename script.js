// ============================================
// CYAN DENTAL - COMPLETE JAVASCRIPT
// ============================================

// Smooth scrolling functions
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

function scrollToServices() {
  document.getElementById("services").scrollIntoView({
    behavior: "smooth"
  });
}

// ============================================
// FANCY FORM SUBMISSION WITH POPUP
// ============================================
function submitForm(event) {
  event.preventDefault();
  
  // Get form data
  const formData = new FormData(event.target);
  const name = event.target.querySelector('input[type="text"]').value;
  
  // Simulate form submission
  const submitBtn = event.target.querySelector('.submit-btn');
  const originalText = submitBtn.textContent;
  
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  setTimeout(() => {
    // Create fancy popup
    createSuccessPopup(name);
    
    // Reset form
    event.target.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 1500);
}

// Fancy Success Popup
function createSuccessPopup(name) {
  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'popup-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 188, 212, 0.9);
    backdrop-filter: blur(10px);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.3s ease;
  `;

  // Create popup
  const popup = document.createElement('div');
  popup.className = 'success-popup';
  popup.innerHTML = `
    <div class="popup-icon">✅</div>
    <h2>Thank You, ${name}!</h2>
    <p>Your appointment request has been sent successfully.</p>
    <p>We'll contact you within 24 hours to schedule your visit.</p>
    <div class="popup-buttons">
      <button onclick="closePopup()" class="popup-btn primary">Great!</button>
    </div>
  `;
  
  popup.style.cssText = `
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    border-radius: 24px;
    padding: 3rem 2.5rem;
    text-align: center;
    max-width: 450px;
    width: 90%;
    box-shadow: 0 30px 80px rgba(0, 188, 212, 0.4);
    transform: scale(0.7);
    animation: popupSlideIn 0.4s ease 0.1s both;
  `;

  // Add popup animations CSS
  const style = document.createElement('style');
  style.id = 'popup-styles';
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes popupSlideIn {
      to { transform: scale(1); }
    }
    @keyframes popupBounce {
      0%, 60%, 100% { transform: scale(1); }
      30%, 50% { transform: scale(1.05); }
    }
    .popup-icon {
      font-size: 4rem;
      margin-bottom: 1.5rem;
      animation: popupBounce 0.6s ease;
    }
    .success-popup h2 {
      color: #033;
      font-size: 2rem;
      margin-bottom: 1rem;
      background: linear-gradient(45deg, #00bcd4, #0097a7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .success-popup p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }
    .popup-buttons {
      margin-top: 2rem;
    }
    .popup-btn {
      padding: 12px 30px;
      border: none;
      border-radius: 50px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 1rem;
      margin: 0 0.5rem;
    }
    .popup-btn.primary {
      background: linear-gradient(45deg, #00bcd4, #0097a7);
      color: white;
      box-shadow: 0 10px 30px rgba(0, 188, 212, 0.4);
    }
    .popup-btn.primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(0, 188, 212, 0.6);
    }
    @media (max-width: 480px) {
      .success-popup {
        margin: 2rem;
        padding: 2rem 1.5rem;
      }
      .success-popup h2 { font-size: 1.5rem; }
    }
  `;
  
  // Append to body
  document.head.appendChild(style);
  overlay.appendChild(popup);
  document.body.appendChild(overlay);
  
  // Close on overlay click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closePopup();
  });
}

// Close popup function
function closePopup() {
  const overlay = document.querySelector('.popup-overlay');
  if (overlay) {
    overlay.style.animation = 'fadeIn 0.3s ease reverse';
    setTimeout(() => {
      overlay.remove();
      const style = document.getElementById('popup-styles');
      if (style) style.remove();
    }, 300);
  }
}

// ============================================
// NAVBAR SCROLL EFFECTS
// ============================================
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(0, 188, 212, 0.98)';
    header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
  } else {
    header.style.background = 'rgba(0, 188, 212, 0.95)';
    header.style.boxShadow = 'none';
  }
});

// ============================================
// SCROLL ANIMATIONS (FADE-IN)
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
});

// ============================================
// HERO ANIMATIONS
// ============================================
window.addEventListener('load', () => {
  document.querySelector('.hero h1').style.animation = 'slideInUp 1s ease';
  document.querySelector('.hero p').style.animation = 'slideInUp 1s ease 0.2s both';
  document.querySelector('.hero-buttons').style.animation = 'slideInUp 1s ease 0.4s both';
});

// ============================================
// SERVICE CARDS STAGGERED ANIMATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });
});

// ============================================
// SMOOTH SCROLLING FOR ALL LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============================================
// ACTIVE NAV LINK HIGHLIGHTING
// ============================================
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section[id]');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Add active link styles
const activeStyle = document.createElement('style');
activeStyle.textContent = `
  .nav-links a.active {
    color: #fff !important;
    font-weight: 700 !important;
  }
`;
document.head.appendChild(activeStyle);

// ============================================
// PARALLAX HERO EFFECT
// ============================================
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  const speed = scrolled * 0.5;
  if (hero) {
    hero.style.transform = `translateY(${speed}px)`;
  }
});

// ============================================
// ESCAPE KEY FOR POPUP
// ============================================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closePopup();
  }
});

// ============================================
// MOBILE MENU (FUTURE PROOF)
// ============================================
function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('mobile-menu');
}

// Mobile menu styles (auto-added)
const mobileStyle = document.createElement('style');
mobileStyle.id = 'mobile-styles';
mobileStyle.textContent = `
  @media (max-width: 768px) {
    .nav-links {
      position: fixed;
      top: 80px;
      left: 0;
      width: 100%;
      background: rgba(0, 188, 212, 0.98);
      flex-direction: column;
      padding: 2rem;
      transform: translateY(-100%);
      opacity: 0;
      transition: all 0.3s ease;
    }
    .nav-links.mobile-menu {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(mobileStyle);