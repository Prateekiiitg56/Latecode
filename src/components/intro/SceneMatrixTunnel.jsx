import { useEffect, useRef } from 'react';

const CHARS = 'アイウエオカキクケコサシスセソタチツテトABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$@#%&';

export default function SceneMatrixTunnel({ onComplete }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        let frame = 0;

        // Rings of characters forming a tunnel
        const NUM_RINGS = 18;
        const rings = Array.from({ length: NUM_RINGS }, (_, i) => ({
            z: (i / NUM_RINGS) * 1200,
            chars: Array.from({ length: 20 }, () => CHARS[Math.floor(Math.random() * CHARS.length)]),
            radius: 200 + i * 10,
            rotOffset: (i * Math.PI * 2) / NUM_RINGS,
        }));

        let animId;
        const draw = () => {
            ctx.fillStyle = 'rgba(0,0,0,0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            frame++;
            const speed = 5;

            rings.forEach(ring => {
                ring.z -= speed;
                if (ring.z < 10) {
                    ring.z = 1200;
                    ring.chars = ring.chars.map(() => CHARS[Math.floor(Math.random() * CHARS.length)]);
                }

                const perspective = 600;
                const scale = perspective / (perspective + ring.z);
                const screenRadius = ring.radius * scale * 3;
                const alpha = Math.max(0, Math.min(1, 1 - ring.z / 1200)) * 0.9;
                const fontSize = Math.max(8, 14 * scale * 2.5);

                ctx.font = `${fontSize}px "Share Tech Mono"`;

                const numChars = ring.chars.length;
                ring.chars.forEach((char, i) => {
                    const angle = (i / numChars) * Math.PI * 2 + ring.rotOffset + frame * 0.003;
                    const x = cx + Math.cos(angle) * screenRadius;
                    const y = cy + Math.sin(angle) * screenRadius;

                    // Mutate characters randomly
                    if (Math.random() < 0.02) {
                        ring.chars[i] = CHARS[Math.floor(Math.random() * CHARS.length)];
                    }

                    const distFromCenter = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
                    const glow = Math.max(0, 1 - distFromCenter / (canvas.width * 0.7));
                    const brightness = Math.floor(100 + glow * 155);

                    ctx.fillStyle = `rgba(0, ${brightness}, ${Math.floor(brightness * 0.25)}, ${alpha})`;
                    ctx.shadowBlur = glow * 15;
                    ctx.shadowColor = `rgba(0, 255, 65, ${glow * alpha})`;
                    ctx.fillText(char, x, y);
                });
            });

            // Center vanishing point glow
            const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, 120);
            gradient.addColorStop(0, 'rgba(0,255,65,0.15)');
            gradient.addColorStop(1, 'rgba(0,255,65,0)');
            ctx.fillStyle = gradient;
            ctx.shadowBlur = 0;
            ctx.fillRect(cx - 120, cy - 120, 240, 240);

            animId = requestAnimationFrame(draw);
        };

        draw();
        const timer = setTimeout(onComplete, 3000);

        return () => {
            cancelAnimationFrame(animId);
            clearTimeout(timer);
        };
    }, [onComplete]);

    return (
        <div className="tunnel-scene">
            <canvas ref={canvasRef} className="tunnel-canvas" />
            <div className="tunnel-text" style={{ pointerEvents: 'none' }}>
                <h2>ENTERING THE MATRIX</h2>
            </div>
        </div>
    );
}
