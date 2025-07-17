import React from 'react';
import SynchronizedSlider from './SynchronizedSlider';

const SliderExample = () => {
    // Sample content for the left-to-right slider
    const leftContent = (
        <>
            <div className="flex-shrink-0 mx-4 bg-blue-500 text-white px-6 py-3 rounded-lg">
                Item 1
            </div>
            <div className="flex-shrink-0 mx-4 bg-green-500 text-white px-6 py-3 rounded-lg">
                Item 2
            </div>
            <div className="flex-shrink-0 mx-4 bg-purple-500 text-white px-6 py-3 rounded-lg">
                Item 3
            </div>
            <div className="flex-shrink-0 mx-4 bg-orange-500 text-white px-6 py-3 rounded-lg">
                Item 4
            </div>
            <div className="flex-shrink-0 mx-4 bg-red-500 text-white px-6 py-3 rounded-lg">
                Item 5
            </div>
        </>
    );

    // Sample content for the right-to-left slider
    const rightContent = (
        <>
            <div className="flex-shrink-0 mx-4 bg-yellow-500 text-black px-6 py-3 rounded-lg">
                Element A
            </div>
            <div className="flex-shrink-0 mx-4 bg-pink-500 text-white px-6 py-3 rounded-lg">
                Element B
            </div>
            <div className="flex-shrink-0 mx-4 bg-indigo-500 text-white px-6 py-3 rounded-lg">
                Element C
            </div>
            <div className="flex-shrink-0 mx-4 bg-teal-500 text-white px-6 py-3 rounded-lg">
                Element D
            </div>
            <div className="flex-shrink-0 mx-4 bg-gray-500 text-white px-6 py-3 rounded-lg">
                Element E
            </div>
        </>
    );

    return (
        <div className="py-8 space-y-8">
            <h2 className="text-2xl font-bold text-center mb-6">
                Synchronized Sliders
            </h2>
            
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">
                    Top Slider (Left to Right)
                </h3>
                <SynchronizedSlider
                    leftContent={leftContent}
                    rightContent={rightContent}
                    speed={50}
                    className="h-16"
                    containerClassName="bg-gray-100 p-4 rounded-lg"
                />
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">
                    Bottom Slider (Right to Left)
                </h3>
                <SynchronizedSlider
                    leftContent={rightContent}
                    rightContent={leftContent}
                    speed={40}
                    className="h-16"
                    containerClassName="bg-gray-100 p-4 rounded-lg"
                />
            </div>
        </div>
    );
};

export default SliderExample; 