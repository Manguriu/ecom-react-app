import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.png";
import slider3 from "../../assets/images/slider3.jpg";

class SliderMenu extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img alt="" className="slider-img" src={slider1} />
          </div>
          <div>
            <img alt="" className="slider-img" src={slider2} />
          </div>
          <div>
            <img alt="" className="slider-img" src={slider3} />
          </div>
        </Slider>
      </div>
    );
  }
}

export default SliderMenu;
