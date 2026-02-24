/**
 * Canvas-based particle background.
 * Replaces the old CSS-div particle approach for smoothness.
 */
export function initParticles(canvas) {
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const particles = [];
  const COUNT = 18;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function randomBetween(a, b) { return a + Math.random() * (b - a); }

  function createParticle() {
    return {
      x: randomBetween(0, canvas.width),
      y: randomBetween(0, canvas.height),
      r: randomBetween(2, 5),
      dx: randomBetween(-0.3, 0.3),
      dy: randomBetween(-0.4, -0.1),
      opacity: randomBetween(0.3, 0.7),
      color: Math.random() > 0.5 ? '#ff0080' : '#00e5ff',
      pulse: randomBetween(0, Math.PI * 2),
      pulseSpeed: randomBetween(0.005, 0.02),
    };
  }

  resize();
  for (let i = 0; i < COUNT; i++) particles.push(createParticle());

  window.addEventListener('resize', resize, { passive: true });

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.pulse += p.pulseSpeed;
      const pulseFactor = 0.6 + 0.4 * Math.sin(p.pulse);
      const alpha = p.opacity * pulseFactor;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = alpha;
      ctx.fill();
      ctx.globalAlpha = 1;

      p.x += p.dx;
      p.y += p.dy;

      // Wrap around edges
      if (p.y < -10) { p.y = canvas.height + 10; p.x = randomBetween(0, canvas.width); }
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;
    });

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}
