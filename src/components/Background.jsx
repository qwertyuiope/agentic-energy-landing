import React, { useEffect, useRef } from 'react';

const Background = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Firefly particles
        const particles = [];
        const particleCount = 60; // Number of fireflies

        class Particle {
            constructor() {
                this.reset();
                // Start at random positions
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 100; // Start slightly below
                this.vx = (Math.random() - 0.5) * 0.5; // Slow horizontal drift
                this.vy = -Math.random() * 0.5 - 0.2; // Slow upward float
                this.radius = Math.random() * 2 + 1; // Size 1-3px
                this.alpha = Math.random() * 0.5 + 0.1; // Initial opacity
                this.fadeSpeed = Math.random() * 0.01 + 0.002;
                this.fadingIn = true;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Fade in/out
                if (this.fadingIn) {
                    this.alpha += this.fadeSpeed;
                    if (this.alpha >= 0.8) this.fadingIn = false;
                } else {
                    this.alpha -= this.fadeSpeed;
                    if (this.alpha <= 0.1) this.fadingIn = true;
                }

                // Reset if off screen
                if (this.y < -10) {
                    this.reset();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(100, 200, 255, ${this.alpha})`; // Bright blue glow
                ctx.shadowBlur = 10;
                ctx.shadowColor = "rgba(0, 163, 255, 0.8)";
                ctx.fill();
                ctx.shadowBlur = 0; // Reset shadow for performance
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw background gradient
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#020408'); // Deep dark blue/black top
            gradient.addColorStop(1, '#050a14'); // Slightly lighter bottom
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw subtle light beams (optional, keep simple for now)

            // Update and draw particles
            particles.forEach(p => {
                p.update();
                p.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1, // Behind everything
                pointerEvents: 'none',
            }}
        />
    );
};

export default Background;
