import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



class SliderMenu extends Component {
  constructor() {
    super();
    this.state = {

      Sliderdata:[],
    };
  }
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

    const SliderData = this.props.data;
    const View = SliderData.map((SliderData, i) => {
      return(
        <div key={i.toString()}>
        <img alt="" className="slider-img" src={SliderData.image} />
      </div>
      )
    })
    return (
      <div>
        <Slider {...settings}>
         
          {View}
        </Slider>
      </div>
    );
  }
}

export default SliderMenu;
