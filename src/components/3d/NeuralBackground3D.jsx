import React, { useEffect, useRef } from 'react';

export const NeuralBackground3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking for 3D gravity field
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 180,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 3D Particles / Neural Nodes
    const particleCount = Math.min(Math.floor((width * height) / 14000), 75);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 500 + 50, // 3D depth layer
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        vz: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1.5,
        color: Math.random() > 0.4 ? '#00F2FE' : Math.random() > 0.5 ? '#7F00FF' : '#10B981',
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.03 + Math.random() * 0.02,
      });
    }

    // Animation Loop
    const render = () => {
      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Dark cyber background fill
      ctx.fillStyle = 'rgba(7, 10, 18, 0.25)';
      ctx.fillRect(0, 0, width, height);

      // Render ambient 3D perspective grid lines
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.03)';
      ctx.lineWidth = 1;

      const horizonY = height * 0.5;
      const fov = 300;

      // Draw perspective grid floor
      for (let x = -width; x < width * 2; x += 120) {
        ctx.beginPath();
        ctx.moveTo(x, height);
        ctx.lineTo((x - width / 2) * 0.2 + width / 2, horizonY);
        ctx.stroke();
      }

      for (let y = horizonY; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update & Draw 3D Synaptic Connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move 3D position
        p1.x += p1.vx;
        p1.y += p1.vy;
        p1.z += p1.vz;
        p1.pulse += p1.pulseSpeed;

        // Bounce 3D boundaries
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;
        if (p1.z < 10 || p1.z > 600) p1.vz *= -1;

        // Mouse interaction (gravity attraction field)
        const dx = mouse.x - p1.x;
        const dy = mouse.y - p1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p1.x -= (dx / dist) * force * 1.5;
          p1.y -= (dy / dist) * force * 1.5;
        }

        // Project 3D to 2D screen coordinates
        const scale = fov / (fov + p1.z);
        const projectedRadius = p1.radius * scale * (1 + Math.sin(p1.pulse) * 0.3);

        // Draw connections to nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx2 = p1.x - p2.x;
          const dy2 = p1.y - p2.y;
          const dz2 = p1.z - p2.z;
          const dist2D = Math.sqrt(dx2 * dx2 + dy2 * dy2 + dz2 * dz2);

          if (dist2D < 160) {
            const opacity = (1 - dist2D / 160) * 0.35 * scale;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, p1.color);
            gradient.addColorStop(1, p2.color);

            ctx.strokeStyle = gradient;
            ctx.globalAlpha = opacity;
            ctx.lineWidth = 1 * scale;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }

        // Draw 3D Neural Node particle
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, projectedRadius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.shadowColor = p1.color;
        ctx.shadowBlur = 10 * scale;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80 transition-opacity duration-1000"
    />
  );
};

export default NeuralBackground3D;
