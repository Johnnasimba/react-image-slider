
import React from 'react';

import './image-slider.styles.css';


const ImageSlider = () => {
    return (
        <div>
            <div className="image-slider-wrapper">               
                    <div className="slide-image">
                        <img src="./images/school-life.jpg" alt="" />
                    </div>
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
