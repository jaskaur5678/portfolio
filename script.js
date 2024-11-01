// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu Controls
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation when menu button is clicked
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden"; // Prevent background scroll
  scrollBtn.style.pointerEvents = "none";
};

// Helper function to close side navigation
const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto"; // Restore background scroll
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation when cancel button is clicked
cancelBtn.onclick = hideNavMenu;

// Close side navigation when any menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

// Animation on Scroll
// Adds CSS animation classes on elements when scrolled into view
const animatedElements = document.querySelectorAll(".animate-on-scroll");

// Checks if element is in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Adds animation class if element is in viewport
function animateOnScroll() {
  animatedElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("animate");
    }
  });
}

// Scroll event to trigger animations
window.addEventListener("scroll", animateOnScroll);

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Initial call to apply animations when page loads
animateOnScroll();