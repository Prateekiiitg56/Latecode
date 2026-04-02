import { useState } from 'react';

export default function SceneMorpheus({ onPillChoice }) {
    const [showIllusionTerminal, setShowIllusionTerminal] = useState(false);

    return (
        <div className="morpheus-scene">
            {/* Real Hand Background Image */}
            <div className="morpheus-hands-bg" style={{ backgroundImage: "url('/hand.png')" }} />

            {/* Absolutely Positioned Interactive CSS Pills over the palms */}
            <div className="pill-container-overlay">

                {/* Left hand (Red Pill) */}
                <button className="pill-btn pill-btn-left" onClick={() => onPillChoice('red')}>
                    <div className="pill-capsule pill-red" />
                    <div className="pill-hover-info">
                        <span className="pill-label red">RED PILL</span>
                        <span className="pill-desc">See how deep the rabbit hole goes</span>
                    </div>
                </button>

                {/* Right hand (Blue Pill) */}
                <button className="pill-btn pill-btn-right" onClick={() => setShowIllusionTerminal(true)}>
                    <div className="pill-capsule pill-blue" />
                    <div className="pill-hover-info">
                        <span className="pill-label blue">BLUE PILL</span>
                        <span className="pill-desc">The story ends here</span>
                    </div>
                </button>
            </div>

            {/* Illusion Terminal Overlay (When Blue Pill is clicked) */}
            {showIllusionTerminal && (
                <div className="illusion-overlay relative flex items-center justify-center h-full w-full">
                    <div className="illusion-box">
                        <h2>THE ILLUSION TERMINAL</h2>
                        <p>
                            Bro, this practice terminal is currently under development. <br /><br />
                            Please go back and choose the Red Capsule to enter the core DSA Matrix Engine.
                        </p>
                        <button
                            className="illusion-btn"
                            onClick={() => setShowIllusionTerminal(false)}
                        >
                            ← RETURN TO CHOICE
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
