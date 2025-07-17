import React, { useEffect, useRef } from 'react';

const SynchronizedSlider = ({ 
    leftContent, 
    rightContent, 
    speed = 30, 
    className = "",
    containerClassName = ""
}) => {
    const leftSliderRef = useRef(null);
    const rightSliderRef = useRef(null);

    useEffect(() => {
        const leftSlider = leftSliderRef.current;
        const rightSlider = rightSliderRef.current;

        if (!leftSlider || !rightSlider) return;

        let leftAnimationId;
        let rightAnimationId;
        let leftPosition = 0;
        let rightPosition = 0;

        const animate = () => {
            // Left slider moves left to right
            leftPosition += speed / 60; // Convert to per-frame movement
            if (leftPosition >= leftSlider.scrollWidth / 2) {
                leftPosition = 0;
            }
            leftSlider.style.transform = `translateX(-${leftPosition}px)`;

            // Right slider moves right to left (opposite direction)
            rightPosition -= speed / 60; // Negative for opposite direction
            if (rightPosition <= -rightSlider.scrollWidth / 2) {
                rightPosition = 0;
            }
            rightSlider.style.transform = `translateX(-${rightPosition}px)`;

            leftAnimationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (leftAnimationId) cancelAnimationFrame(leftAnimationId);
            if (rightAnimationId) cancelAnimationFrame(rightAnimationId);
        };
    }, [speed]);

    return (
        <div className={`w-full overflow-hidden ${containerClassName}`}>
            {/* Left to Right Slider */}
            <div className={`relative ${className}`}>
                <div 
                    ref={leftSliderRef}
                    className="flex whitespace-nowrap transition-transform duration-1000 ease-linear"
                    style={{ willChange: 'transform' }}
                >
                    {leftContent}
                    {leftContent} {/* Duplicate for seamless loop */}
                </div>
            </div>

            {/* Right to Left Slider */}
            <div className={`relative ${className}`}>
                <div 
                    ref={rightSliderRef}
                    className="flex whitespace-nowrap transition-transform duration-1000 ease-linear"
                    style={{ willChange: 'transform' }}
                >
                    {rightContent}
                    {rightContent} {/* Duplicate for seamless loop */}
                </div>
            </div>
        </div>
    );
};

export default SynchronizedSlider; 