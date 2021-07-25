
import React from 'react';

import './image-slider.styles.css';


const ImageSlider = () => {
    return (
        <div>
            <div className="image-slider">
                <div className="image-slider-left-button">
                    <i class="fas fa-arrow-circle-left fa-3x"></i>
                </div>
                <div className="slides-container">
                    <div className="slide-image">
                        <img src="./Images/me-and-my-father.jpg" alt="" />
                    </div>
                </div>
                <div className="image-slider-right-button">
                    <i class="fas fa-arrow-circle-right fa-3x"></i>
                </div>

            </div>
            <div class="navigation-dots">
                <div className="single-dot active"></div>
                <div className="single-dot"></div>
                <div className="single-dot"></div>
                <div className="single-dot"></div>
            </div>  

        </div>
    )
}


export default ImageSlider;
