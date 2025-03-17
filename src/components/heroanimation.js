
const heroanimation = () =>{
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
}

export default heroanimation;