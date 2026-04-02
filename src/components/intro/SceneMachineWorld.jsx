import { useEffect, useRef } from 'react';

export default function SceneMachineWorld({ onComplete }) {
    useEffect(() => {
        const timer = setTimeout(onComplete, 4500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    const towers = [
        { width: 60, height: 320, delay: 0.0 },
        { width: 40, height: 200, delay: 0.1 },
        { width: 90, height: 420, delay: 0.0 },
        { width: 50, height: 280, delay: 0.2 },
        { width: 130, height: 500, delay: 0.0 },
        { width: 45, height: 240, delay: 0.15 },
        { width: 100, height: 380, delay: 0.05 },
        { width: 55, height: 300, delay: 0.1 },
        { width: 80, height: 350, delay: 0.2 },
        { width: 40, height: 180, delay: 0.25 },
        { width: 110, height: 460, delay: 0.0 },
        { width: 50, height: 220, delay: 0.3 },
        { width: 70, height: 310, delay: 0.1 },
        { width: 35, height: 160, delay: 0.35 },
        { width: 95, height: 390, delay: 0.05 },
    ];

    const streamTexts = [
        '01001101010011000010101',
        '10110100101001010110100',
        '11001010100110101001010',
        '01010011010110100100101',
    ];

    return (
        <div className="machine-world">
            <div className="machine-sky" />
            <div className="machine-grid" />

            {/* Red text streams on sides */}
            {streamTexts.map((txt, i) => (
                <div
                    key={i}
                    className="machine-text-stream"
                    style={{
                        left: `${8 + i * 25}%`,
                        animationDelay: `${i * 0.8}s`,
                        animationDuration: `${5 + i}s`,
                    }}
                >
                    {txt}
                </div>
            ))}

            {/* Machine towers */}
            <div className="machine-towers">
                {towers.map((t, i) => (
                    <div
                        key={i}
                        className="tower"
                        style={{
                            width: t.width,
                            height: t.height,
                            animationDelay: `${t.delay}s`,
                        }}
                    >
                        {/* Steam vents */}
                        <div className="steam-vent" style={{ animationDelay: `${1 + i * 0.3}s` }} />
                    </div>
                ))}
            </div>

            {/* Center text */}
            <div className="scene1-title">
                <h1>THE MACHINE WORLD</h1>
            </div>

            {/* Skip */}
            <button className="scene1-skip" onClick={onComplete}>
                SKIP ▶
            </button>
        </div>
    );
}
