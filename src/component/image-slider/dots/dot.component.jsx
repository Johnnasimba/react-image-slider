
import React from 'react'

import './dot.styles.css';

const Dots = ({currentSlide, amountSlides, nextSlide}) => {
    return (
        <div className="navigation-dots">
        {
                Array(amountSlides).fill(1).map((_, i) => (
                    <div className="single-dot" 
                    key={i} 
                    style={{background : currentSlide === i? '#eee': '#333'}}
                    onClick={() => nextSlide(i)}
                    > </div>
                ))
            }

        </div>  
    )
}

export default Dots;