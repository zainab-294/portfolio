import '../styles/modren-normlize.css';
import '../styles/style.css';
import '../styles/componets/header.css';
import '../styles/componets/hero.css';
import '../styles/componets/canvas.css';
import '../styles/componets/about.css';
import '../styles/componets/skills.css';
import '../styles/componets/projects.css';
import '../styles/componets/contect.css';
import '../styles/componets/education.css';
import '../styles/componets/footer.css';
import '../styles/utilis.css';

// cursor start
const cursordot = document.querySelector("[data-cursor-dot]");
const cursoroutline = document.querySelector("[data-cursor-outline]");
window.addEventListener("mousemove",(e) =>{
  const posX = e.clientX;
  const posY = e.clientY;
  cursordot.style.left = `${posX}px`;
  cursordot.style.top = `${posY}px`;
  // cursoroutline.style.left = `${posX}px`;
  // cursoroutline.style.top =`${posY}px
  // `

  cursoroutline.animate({
    left: `${posX}px`,
    top:  `${posY}px`
  },
  {duration:500,fill:"forwards"});
});
// cursor end

// canvas start
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let w, h, icons = [];
const iconImages = [
    "/icons8-youtube-48.png",  // Correct path to the public folder
    "/icons8-x-50.png",
    "/icons8-whatsapp-48.png",
    "/icons8-tiktok-48.png",
    "/icons8-facebook-48.png",
    "/icons8-facebook-messenger-48.png",
    "/icons8-instagram-48.png",
    "/icons8-linkedin-48.png",
    "/icons8-pinterest-48.png",
    "/icons8-reddit-48.png"
  ];
const maxIcons = 17; // Maximum number of icons on the screen
function resizeCanvas() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
function createIcon() {
  const size = Math.random() * 20 + 10; // Random size between 10 and 30
  const icon = {
    x: Math.random() * w,
    y: h + size, // Start below the canvas
    size,
    speed: Math.random() * 1.5 + 0.5, // Random speed between 0.5 and 2
    opacity: 1, // Initial opacity
    fadeStart: h * 0.17, // Start fading when reaching the top 17% of the canvas
    image: new Image()
  };

  // Ensure icons are spread out evenly across the screen
  let tries = 0;
  while (
    icons.some(
      (other) =>
        Math.abs(icon.x - other.x) < icon.size * 1.5 &&
        Math.abs(icon.y - other.y) < icon.size * 1.5
    ) &&
    tries < 20 // Limit retries to avoid infinite loops
  ) {
    icon.x = Math.random() * w;
    icon.y = h + size;
    tries++;
  }

  // Randomly pick an icon image from the available options
  icon.image.src = iconImages[Math.floor(Math.random() * iconImages.length)];
  icons.push(icon);
}
function updateIcons() {
  icons.forEach((icon, index) => {
    icon.y -= icon.speed;

    // Start fading out only if the icon is in the top 17% of the canvas
    if (icon.y < icon.fadeStart) {
      icon.opacity -= 0.01; // Gradually reduce opacity
    }

    // Remove icon when it's fully transparent
    if (icon.opacity <= 0) {
      icons.splice(index, 1);
    }
  });

  // Ensure there are always `maxIcons` icons visible
  while (icons.length < maxIcons) {
    createIcon();
  }
}
function drawIcons() {
  ctx.clearRect(0, 0, w, h);
  icons.forEach(icon => {
    if (icon.image.complete) {
      ctx.globalAlpha = icon.opacity; // Set opacity
      ctx.drawImage(icon.image, icon.x, icon.y, icon.size, icon.size);
      ctx.globalAlpha = 1; // Reset opacity
    }
  });
}
function animationLoop() {
  updateIcons();
  drawIcons();
  requestAnimationFrame(animationLoop);
}
window.addEventListener("resize", resizeCanvas);
// Initialize
resizeCanvas();
for (let i = 0; i < maxIcons; i++) {
  createIcon();
}
animationLoop();
// canvas end


// nav popup start
const navbtn = document.querySelector(".header--bars");
const navx = document.querySelector(".nav-x");
const navpopup = document.querySelector(".mobile-nav");
navbtn.addEventListener("click", () => {
  navpopup.style.display = "flex";
});
navx.addEventListener("click", () => {
  navpopup.style.display = "none";
});
// nav popup end


// about popup start
const aboutbtn = document.querySelector(".hero--btn");
const aboutclose = document.querySelector(".x");
const aboutpopup = document.querySelector(".about");

aboutbtn.addEventListener("click", () => {
  aboutpopup.classList.add("aboutvisible");  // Show the popup with open animation
});

aboutclose.addEventListener("click", (event) => {
  event.preventDefault();  // Prevent page reload
  aboutpopup.classList.add("aboutclosing");  // Apply closing animation

  // After the animation ends, remove visibility
  aboutpopup.addEventListener('animationend', () => {
    aboutpopup.classList.remove("aboutvisible", "aboutclosing");
  },{ once: true });
});
// about popup end

// to top start
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
// to top end
