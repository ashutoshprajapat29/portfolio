import React, { useEffect, useRef } from 'react';

interface ParticleCanvasProps {
  darkMode: boolean;
}

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
}

export const ParticleCanvas: React.FC<ParticleCanvasProps> = ({ darkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetMouseX = e.touches[0].clientX;
        targetMouseY = e.touches[0].clientY;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Create 3D particles
    const particleCount = Math.min(Math.floor(window.innerWidth / 14), 75);
    const particles: Particle[] = [];

    const colors = darkMode
      ? ['rgba(45, 212, 191, ', 'rgba(99, 102, 241, ', 'rgba(168, 85, 247, ', 'rgba(6, 182, 212, ']
      : ['rgba(13, 148, 136, ', 'rgba(79, 70, 229, ', 'rgba(147, 51, 234, ', 'rgba(8, 145, 178, '];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 800 + 200,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const fov = 400;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation for 3D camera pan
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      const rotY = ((mouseX - width / 2) / width) * 0.3;
      const rotX = -((mouseY - height / 2) / height) * 0.3;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Projected points for line connections
      const projected: { x: number; y: number; scale: number; alpha: number; color: string }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Boundary wrap
        if (p.x < -width) p.x = width;
        if (p.x > width) p.x = -width;
        if (p.y < -height) p.y = height;
        if (p.y > height) p.y = -height;
        if (p.z < 100) p.z = 900;
        if (p.z > 900) p.z = 100;

        // 3D rotation
        // Rotate around Y
        let x1 = p.x * cosY + p.z * sinY;
        let z1 = -p.x * sinY + p.z * cosY;

        // Rotate around X
        let y1 = p.y * cosX - z1 * sinX;
        let z2 = p.y * sinX + z1 * cosX;

        if (z2 <= 10) continue;

        const scale = fov / (fov + z2);
        const projX = x1 * scale + width / 2;
        const projY = y1 * scale + height / 2;

        const alpha = Math.min(Math.max((1 - z2 / 1000) * 0.7, 0.1), 0.85);

        projected.push({
          x: projX,
          y: projY,
          scale,
          alpha,
          color: p.color
        });

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(projX, projY, p.size * scale * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${alpha})`;
        ctx.shadowBlur = 10 * scale;
        ctx.shadowColor = `${p.color}0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw connecting lines between nearby particles in 3D space
      const maxDist = 120;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * Math.min(p1.alpha, p2.alpha) * 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = darkMode 
              ? `rgba(94, 234, 212, ${lineAlpha})` 
              : `rgba(13, 148, 136, ${lineAlpha})`;
            ctx.lineWidth = 0.8 * Math.min(p1.scale, p2.scale);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none -z-10 w-full h-full opacity-60 dark:opacity-45"
    />
  );
};
