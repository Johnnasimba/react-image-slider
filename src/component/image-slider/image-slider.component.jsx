
import React from 'react';

import './image-slider.styles.css';


const ImageSlider = ({
    images=[]
}) => {
    console.log(images)
    return (
        <div>
            <div className="image-slider-wrapper">               
                    {
                        images.map((imageUrl, index) => (
                            <div 
                                className="slide-image"
                                key={index}
                                style={{backgroundImage: "green"}}

                            
                            >
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
