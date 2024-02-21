const canvas = document.querySelector("canvas#chain");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "/assets/chain/chain.png";

const PARTICLE_DIAMETER = 4;
const particles = [];
const darkeningFactor = 0.9; // This will darken the color by 20%

img.addEventListener("load", () => {
  // making canvas size same as image
  canvas.width = img.width;
  canvas.height = img.height;

  // drawing image on canvas
  ctx.drawImage(img, 0, 0);

  // getting image data

  // 0,0 are top-left coordinates on the canvas
  const imageData = ctx.getImageData(0, 0, img.width, img.height).data;

  const numRows = Math.round(img.height / PARTICLE_DIAMETER);
  const numColumns = Math.round(img.width / PARTICLE_DIAMETER);

  for (let row = 0; row < numRows; row++) {
    for (let column = 0; column < numColumns; column++) {
      const pixelIndex =
        (row * PARTICLE_DIAMETER * img.width + column * PARTICLE_DIAMETER) * 4;

      const red = imageData[pixelIndex];
      const green = imageData[pixelIndex + 1];
      const blue = imageData[pixelIndex + 2];
      const alpha = imageData[pixelIndex + 3];

      if (Math.random() > 0.2) {
        particles.push({
          x: Math.floor(Math.random() * numColumns * PARTICLE_DIAMETER),
          y: Math.floor(Math.random() * numRows * PARTICLE_DIAMETER),
          originX: column * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
          originY: row * PARTICLE_DIAMETER + PARTICLE_DIAMETER / 2,
          // color: `rgba(${67}, ${46}, ${100}, ${alpha / 255})`,
          color: `rgba(${red * darkeningFactor}, ${green * darkeningFactor}, ${
            blue * darkeningFactor
          }, ${alpha / 255})`,
          //   color: `#381B82`,
        });
      }
    }
  }

  drawParticles();
});

function drawParticles() {
  updateParticles();
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, PARTICLE_DIAMETER / 2, 0, Math.PI * 2);
    ctx.fillStyle = particle.color;
    ctx.fill();
  });

  requestAnimationFrame(drawParticles);
}

let mouseX = Infinity;
let mouseY = Infinity;

canvas.addEventListener("mousemove", function (event) {
  mouseX = event.offsetX;
  mouseY = event.offsetY;
});

canvas.addEventListener("mouseleave", function () {
  mouseX = Infinity;
  mouseY = Infinity;
});

function updateParticles() {
  const REPEL_RADIUS = 60;
  const REPEL_SPEED = 10;
  const REPEL_RETURN_SPEED = 0.05;
  const DISPLACEMENT_AMOUNT = 1.5; // Adjust this value as needed

  particles.forEach((particle) => {
    const distanceFromMouseX = mouseX - particle.x;
    const distanceFromMouseY = mouseY - particle.y;
    const distanceFromMouse = Math.sqrt(
      distanceFromMouseX ** 2 + distanceFromMouseY ** 2
    );

    if (distanceFromMouse < REPEL_RADIUS) {
      const angle = Math.atan2(distanceFromMouseY, distanceFromMouseX);
      const force = (REPEL_RADIUS - distanceFromMouse) / REPEL_RADIUS;

      // Invert the direction of movement
      const moveX = -Math.cos(angle) * force;
      const moveY = -Math.sin(angle) * force;

      particle.x += moveX * REPEL_SPEED; // Use addition instead of subtraction
      particle.y += moveY * REPEL_SPEED; // Use addition instead of subtraction
    } else if (
      particle.x !== particle.originX ||
      particle.y !== particle.originY
    ) {
      const distanceFromOriginX = particle.originX - particle.x;
      const distanceFromOriginY = particle.originY - particle.y;

      const distanceFromOrigin = Math.sqrt(
        distanceFromOriginX ** 2 + distanceFromOriginY ** 2
      );

      const angle = Math.atan2(distanceFromOriginY, distanceFromOriginX);
      const moveX = Math.cos(angle) * distanceFromOrigin * REPEL_RETURN_SPEED;
      const moveY = Math.sin(angle) * distanceFromOrigin * REPEL_RETURN_SPEED;

      particle.x += moveX;
      particle.y += moveY;

      // Add small random displacement when returning to original position
      particle.x += (Math.random() - 0.5) * DISPLACEMENT_AMOUNT;
      particle.y += (Math.random() - 0.5) * DISPLACEMENT_AMOUNT;
    }
  });
}
