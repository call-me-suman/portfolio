"use client";
import { useEffect, useRef, useState } from 'react';

const ParticleSystem = ({ 
  particleCount = 100, 
  colors = ['#ec4899', '#8b5cf6', '#3b82f6'],
  formPattern = true 
}) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, isHovering: false });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Initialize particles
    class Particle {
      constructor() {
        this.reset();
        this.baseX = this.x;
        this.baseY = this.y;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      update(mouse) {
        if (formPattern && mouse.isHovering) {
          // Form pattern on hover
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 200;

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            const angle = Math.atan2(dy, dx);
            
            // Create circular pattern
            const targetX = mouse.x + Math.cos(angle) * 100;
            const targetY = mouse.y + Math.sin(angle) * 100;
            
            this.x += (targetX - this.x) * 0.05;
            this.y += (targetY - this.y) * 0.05;
            this.opacity = Math.min(1, this.opacity + 0.02);
          } else {
            // Return to base position
            this.x += (this.baseX - this.x) * 0.02;
            this.y += (this.baseY - this.y) * 0.02;
            this.opacity = Math.max(0.3, this.opacity - 0.01);
          }
        } else {
          // Normal floating behavior
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
          if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
      }

      draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // Create particles
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle());

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        particle.update(mouseRef.current);
        particle.draw(ctx);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovering = false;
    };

    // Resize handler
    const handleResize = () => {
      setCanvasSize();
      particlesRef.current.forEach(particle => {
        particle.baseX = Math.random() * canvas.width;
        particle.baseY = Math.random() * canvas.height;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [particleCount, colors, formPattern]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleSystem;
