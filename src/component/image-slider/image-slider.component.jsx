
import React from 'react';

import './image-slider.styles.css';


const ImageSlider = () => {
    return (
        <div>
            <div className="image-slider">
                <div className="image-slider-left-button">
                    left button
                </div>
                <div className="slides-container">
                    <div className="slide-image">
                        <img src="./Images/me-and-my-father.jpg" alt="" />
                    </div>
                </div>
                <div className="image-slider-right-button">
                    left button
                </div>

            </div>
            <div class="navigation-dots">
            </div>  

        </div>
    )
}


export default ImageSlider;
