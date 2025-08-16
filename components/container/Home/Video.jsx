import React, { useEffect, useState } from 'react'

const Video = ({id}) => {
    const [isAtTop, setIsAtTop] = useState(false)

    useEffect(() => {
        if(typeof window !== 'undefined'){
            const video = document.querySelector('video')
            if (video) {
                video.play()
            }
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const videoContainer = document.querySelector('.video-container')
            if (videoContainer) {
                const rect = videoContainer.getBoundingClientRect()
                // Check if the top of the container is at or near the top of the viewport
                const isContainerAtTop = rect.top <= 50 && rect.bottom > 0
                
                if (isContainerAtTop) {
                    setIsAtTop(true)
                    console.log('video section at top')
                } else {
                    setIsAtTop(false)
                    console.log('video section not at top')
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        
        // Call once on mount to set initial state
        handleScroll()
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div id={id} className={`video-container mt-12 md:mt-14 lg:mt-16 transition-all duration-500 ease-in-out flex items-center justify-center mx-auto h-[105vh] relative overflow-hidden ${
            isAtTop ? 'w-full' : 'w-[80%]'
        }`}>
            <video 
                src="/video/video1.mp4" 
                autoPlay 
                muted 
                loop 
                className='h-full w-full object-cover' 
            />
            <div className='absolute top-0 left-0 w-full h-full bg-secondary/40 z-10 ' />
            <div className='absolute bottom-0 flex flex-col items-center justify-center left-0 w-full h-full bg-secondary/0 z-10 '>
                <h3 className='text-white text-5xl lg:text-7xl font-bold text-center max-w-[800px]'>
                Shining a Light on the Web’s Best.
                </h3>
                <p className='text-white text-base lg:text-lg text-center max-w-[700px] mx-auto mt-4'>
                Brightly Soft curates and showcases the most innovative, beautifully crafted websites—empowering brands to stand out with brilliance and style
                </p>
            </div>
        </div>
    )
}

export default Video