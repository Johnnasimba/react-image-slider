import './App.css';
import ImageSlider from './component/image-slider/image-slider.component';

import image1 from './assets/slide-images/image1.jpg';
import image2 from './assets/slide-images/image2.jpg';
import image3 from './assets/slide-images/image3.jpg';
import image4 from './assets/slide-images/image4.jpg';

function App() {
  return (
    <div className="App">
        <div className="image-slider-main-container">
          <ImageSlider images={[image1, image2, image3, image4 ]} />
        </div>
    </div>
  );
}

export default App;
