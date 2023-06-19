import React, { Component, Fragment } from "react";
import { Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";
import { Link } from "react-router-dom";

class NewArrival extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductData: [],
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  componentDidMount() {
    axios
      .get(AppURL.AllProductsremark("New"))
      .then((response) => {
        this.setState({ ProductData: response.data });
      })
      .catch((error) => {});
  }

  render() {
    const Newlist = this.state.ProductData;

    const MyView = Newlist.map((Newlist, i) => {
      if (Newlist.discount === "na") {
        return (
          <div>
            <Card className="image-box card">
              <img className="center" alt="" src={Newlist.image} />
              <Card.Body>
                <p className="product-name-on-card">{Newlist.title}</p>
                <p className="product-price-on-card">{Newlist.price}</p>
              </Card.Body>
            </Card>
          </div>
        );
      } else {
        return (
          <div>
            <Card className="image-box card">
              <img className="center" alt="" src={Newlist.image} />
              <Card.Body>
                <p className="product-name-on-card">{Newlist.title}</p>
                <p className="product-price-on-card">
                  Ksh.<strike>{Newlist.price}</strike>
                  <br />
                  Discount:{Newlist.discount}
                </p>
              </Card.Body>
            </Card>
          </div>
        );
      }
    });

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
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
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>
              New Arrivals &nbsp;
              <button
                className="btn btn-sm ml-2 site-btn"
                onClick={this.previous}
              >
                <i className="fa fa-angle-left"></i>
              </button>
              &nbsp;
              <button className="btn btn-sm ml-2 site-btn" onClick={this.next}>
                <i className="fa fa-angle-right"></i>
              </button>
            </h2>
            <p className="">
              This are some of our New products, Amazing New Arrivals you may
              like.
            </p>
          </div>
          <Row>
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              {MyView}
            </Slider>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default NewArrival;
