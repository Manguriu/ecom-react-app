import React, { Component, Fragment } from 'react'
import { Container, Row } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Card } from 'react-bootstrap'


class NewArrival extends Component {

  constructor(props){
    super(props);
    this.next=this.next.bind(this)
    this.previous=this.previous.bind(this)
  }
  next(){
    this.slider.slickNext();

  }
  previous(){
    this.slider.slickPrev();

  }

  render() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay:true,
      autoplaySpeed:3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <Fragment>
         <Container className="text-center" fluid={true} >
              <div className="section-title text-center mb-55">
                {/* <h2>New Arrivals &nbsp;
                  <a className='btn btn-sm ml-2 site-btn' onClick={this.previous}><i className='fa fa-angle-left'></i></a>
                  &nbsp;

                  <a className='btn btn-sm ml-2 site-btn' onClick={this.next}><i className='fa fa-angle-right'></i></a>
                </h2> */}

              <h2>
                New Arrivals &nbsp;
                <button className='btn btn-sm ml-2 site-btn' onClick={this.previous}>
                  <i className='fa fa-angle-left'></i>
                </button>
                &nbsp;
                <button className='btn btn-sm ml-2 site-btn' onClick={this.next}>
                  <i className='fa fa-angle-right'></i>
                </button>
              </h2>
                <p className=''>This are some of our New products, Amazing New Arrivals you may like.</p>
              </div>
          <Row>
          <Slider ref={c=>(this.slider=c)}{...settings}>
          <div>
          <Card className='image-box card'>
              <img className='center' alt='' src="https://m.media-amazon.com/images/I/51eOztNdCkL._AC_SY200_.jpg" />
            <Card.Body>
              <p className='product-name-on-card'> Iphone phone CX565 G5</p>
              <p className='product-price-on-card'>Price:Ksh.50000</p>
            </Card.Body>
            </Card>
          </div>
          <div>
          <Card className='image-box card'>
              <img className='center' alt='' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/330459/1.jpg?7167" />
            <Card.Body>
              <p className='product-name-on-card'> Iphone phone CX565 G5</p>
              <p className='product-price-on-card'>Price:Ksh.50000</p>
            </Card.Body>
            </Card>
          </div>
          <div>
            <Card className='image-box card'>
              <img className='center' alt='' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/8951331/1.jpg?9651" />
            <Card.Body>
              <p className='product-name-on-card'> Iphone phone CX565 G5</p>
              <p className='product-price-on-card'>Price:Ksh.50000</p>
            </Card.Body>
            </Card>
          </div>
          <div>
          <Card className='image-box card'>
              <img className='center' alt='' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/723878/1.jpg?2238" />
            <Card.Body>
              <p className='product-name-on-card'> Iphone phone CX565 G5</p>
              <p className='product-price-on-card'>Price:Ksh.50000</p>
            </Card.Body>
            </Card>
          </div>
          <div>
            <Card className='image-box card'>
              <img className='center' alt='' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/9223711/1.jpg?6894" />
            <Card.Body>
              <p className='product-name-on-card'> Iphone phone CX565 G5</p>
              <p className='product-price-on-card'>Price:Ksh.50000</p>
            </Card.Body>
            </Card>
          </div>
          <div>
            <Card className='image-box card'>
              <img className='center' alt='' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/1485511/1.jpg?3906" />
            <Card.Body>
              <p className='product-name-on-card'> Iphone phone CX565 G5</p>
              <p className='product-price-on-card'>Price:Ksh.50000</p>
            </Card.Body>
            </Card>
          </div>
          <div>
            <Card className='image-box card'>
              <img className='center' alt='' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/573668/1.jpg?3992" />
            <Card.Body>
              <p className='product-name-on-card'> Iphone phone CX565 G5</p>
              <p className='product-price-on-card'>Price:Ksh.50000</p>
            </Card.Body>
            </Card>
          </div>
          <div>
            <Card className='image-box card'>
              <img className='center'alt=''src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/158323/1.jpg?4896" />
            <Card.Body>
              <p className='product-name-on-card'> Iphone phone CX565 G5</p>
              <p className='product-price-on-card'>Price:Ksh.50000</p>
            </Card.Body>
            </Card>
          </div>
        </Slider>
          </Row>

        </Container>
      </Fragment>
    )
  }
}

export default NewArrival