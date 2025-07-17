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
        <div id={id} className={`video-container mt-12 md:mt-14 lg:mt-16 transition-all duration-500 ease-in-out flex items-center justify-center mx-auto h-[150vh] relative overflow-hidden ${
            isAtTop ? 'w-full' : 'w-[80%]'
        }`}>
            <video 
                src="/video/video1.mp4" 
                autoPlay 
                muted 
                loop 
                className='h-full w-full object-cover' 
            />
        </div>
    )
}

export default Video