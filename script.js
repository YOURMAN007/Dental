// ============================================
// CYAN DENTAL - COMPLETE JAVASCRIPT
// ============================================

// --- MOBILE MENU LOGIC ---
function toggleMobileMenu() {
  const navLinks = document.getElementById('nav-links');
  const icon = document.querySelector('.menu-toggle i');
  
  navLinks.classList.toggle('active');
  
  if(navLinks.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    const icon = document.querySelector('.menu-toggle i');
    navLinks.classList.remove('active');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  });
});

// --- HERO SLIDER LOGIC ---
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}
// Auto-play slider every 5 seconds
setInterval(nextSlide, 5000);

// --- SCROLL FUNCTIONS ---
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function scrollToServices() {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
}

// ============================================
// FANCY FORM SUBMISSION WITH POPUP
// ============================================
function submitForm(event) {
  event.preventDefault();
  
  const name = event.target.querySelector('input[type="text"]').value;
  const submitBtn = event.target.querySelector('.submit-btn');
  const originalText = submitBtn.textContent;
  
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  setTimeout(() => {
    createSuccessPopup(name);
    event.target.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 1500);
}

// Fancy Success Popup
function createSuccessPopup(name) {
  const overlay = document.createElement('div');
  overlay.className = 'popup-overlay';
  overlay.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 188, 212, 0.9); backdrop-filter: blur(10px);
    z-index: 9999; display: flex; align-items: center; justify-content: center;
    animation: fadeIn 0.3s ease;
  `;

  const popup = document.createElement('div');
  popup.className = 'success-popup';
  popup.innerHTML = `
    <div class="popup-icon" style="font-size:4rem; margin-bottom:1rem;">✅</div>
    <h2 style="color:#033; font-size:2rem; margin-bottom:1rem;">Thank You, ${name}!</h2>
    <p style="color:#666; margin-bottom:2rem;">Your appointment request has been sent successfully. We'll contact you within 24 hours.</p>
    <button onclick="closePopup()" style="padding:12px 30px; background:#00bcd4; color:white; border:none; border-radius:50px; cursor:pointer; font-size:1.1rem; font-weight:600;">Great!</button>
  `;
  
  popup.style.cssText = `
    background: white; border-radius: 24px; padding: 3rem 2.5rem; text-align: center;
    max-width: 450px; width: 90%; box-shadow: 0 30px 80px rgba(0,0,0,0.2);
  `;

  overlay.appendChild(popup);
  document.body.appendChild(overlay);
}

function closePopup() {
  const overlay = document.querySelector('.popup-overlay');
  if (overlay) overlay.remove();
}

// ============================================
// NAVBAR SCROLL EFFECTS
// ============================================
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
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
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
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
    link.style.fontWeight = '500';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.fontWeight = '700';
    }
  });
});
