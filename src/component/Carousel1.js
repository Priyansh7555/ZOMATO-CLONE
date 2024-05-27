import React from "react";
import '../Style/Detail.css';
import Carousel from 'react-bootstrap/Carousel';

function Carousel1() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div>
          <img
            className="img2"
            src="./Assets/indianfood.jpg"
            alt="Third slide"
          />
          <div className="des">
            <label for="IMG">FOOD DESCRIPTION</label>
            <p> pearl millet (bājra), rice, whole-wheat flour (aṭṭa), and a variety of lentils, such as masoor (most often red lentils), tuer (pigeon peas), urad (black gram), and moong (mung beans).</p>
          </div>
        </div>

      </Carousel.Item>
      <Carousel.Item>
        <div>
          <img
            className="img2"
            src="./Assets/punjabi.jpg"
            alt="Second slide"
          />
        </div>
        <div className="des">
          <label for="IMG">FOOD DESCRIPTION</label>
          <p>Chole bhature is a food dish popular in the northern areas of the Indian subcontinent. It is a combination of chana masala (spicy white chickpeas) and bhatura/puri, a deep-fried bread made from maida</p>
        </div>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img2"
          src="./Assets/dosa.jpg"
          alt="First slide"
        />
        <div className="des">
          <label for="IMG">FOOD DESCRIPTION</label>
          <p>A dosa is a thin, savoury crepe in South Indian cuisine made from a fermented batter of ground white gram and rice. Dosas are served hot, often with chutney and sambar a lentil-based vegetable stew.</p>
        </div>

      </Carousel.Item>
    </Carousel>
  );
}
export default Carousel1;

