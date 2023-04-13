import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'

export function Slider() {
  return (
    <Carousel className='cen'>

      <Carousel.Item>
        <img
          className="slider"
          src="flash.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="slider"
          src="ambedkar park.jpg.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
        <img
          className="slider"
          src="rajya.jpg.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider"
          src="morcha.jpg.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider"
          src="maya.jpg.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>

          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

  