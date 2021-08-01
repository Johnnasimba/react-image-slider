
import React, { useState, useEffect} from 'react';
import Dots from './dots/dot.component';

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
            <Dots currentSlide={currentSlide} amountSlides = {images.length} nextSlide={nextSlide} />
          

        </div>
    )
}


export default ImageSlider;
