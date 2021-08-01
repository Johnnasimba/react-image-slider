
import React, { useState, useEffect} from 'react';

import './image-slider.styles.css';


const ImageSlider = ({ images=[], autoPlayTime = 5000, ...props}) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    // Change slide
    const nextSlide = (slideIndex = currentSlide + 1) => {
        const newSlideIndex = slideIndex >= images.length?0 : slideIndex;
        setCurrentSlide(newSlideIndex)
    }

    useEffect(() => {
        // move to next slide on timeout

        const timer = setTimeout(()=>{
            nextSlide()
        }, autoPlayTime)
        
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <div className="image-slider-wrapper">               
                    {
                        images.map((imageUrl, index) => (
                            <div 
                                className="slide-image"
                                key={index}
                                style={{
                                    backgroundImage: "green",
                                    marginLeft: index === 0 ? `-${currentSlide * 100}%`: undefined
                                }}>
                                <img src={imageUrl} alt="Outside work" />
                            </div>
                        ))
                    }
            </div>



            <div className="navigation-dots">
                <div className="single-dot active"></div>
                <div className="single-dot"></div>
                <div className="single-dot"></div>
                <div className="single-dot"></div>
            </div>  

        </div>
    )
}


export default ImageSlider;
