import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true} >
        <div className="section-title text-center mb-55">
          <h2>All New Products</h2>
          <p className=''>This are some of our featured products, Amazing Products you may like.</p>
        </div>

          <Row>
          <Col className='p-1' xl={2} lg={2} md={2} sm={4} xm={6}>
            <Card className='image-box card'>
              <img className='center' alt='' src="https://m.media-amazon.com/images/I/51eOztNdCkL._AC_SY200_.jpg" />
            <Card.Body>
              <p className='product-name-on-card'> Iphone phone CX565 G5</p>
              <p className='product-price-on-card'>Price:Ksh.50000</p>
            </Card.Body>
            </Card>
            </Col>

            <Col className='p-1'  xl={2} lg={2} md={2} sm={4} xm={6}>
            <Card className='image-box card'>
              <img className='center' alt='' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg" />
            <Card.Body>
              <p className='product-name-on-card'> Iphone phone CX565 G5</p>
              <p className='product-price-on-card'>Price:Ksh.50000</p>
            </Card.Body>
            </Card>
            </Col>

            <Col className='p-1'  xl={2} lg={2} md={2} sm={4} xm={6}>
            <Card className='image-box card'>
              <img className='center' alt='' src="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg" />
            <Card.Body>
              <p className='product-name-on-card'> Iphone phone CX565 G5</p>
              <p className='product-price-on-card'>Price:Ksh.50000</p>
            </Card.Body>
            </Card>
            </Col>

            <Col className='p-1'  xl={2} lg={2} md={2} sm={4} xm={6}>
            <Card className='image-box card'>
              <img className='center' alt='' src="data:image/jpeg;base64,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" />
            <Card.Body>
              <p className='product-name-on-card'> Iphone phone CX565 G5</p>
              <p className='product-price-on-card'>Price:Ksh.50000</p>
            </Card.Body>
            </Card>
            </Col>

            <Col className='p-1' xl={2} lg={2} md={2} sm={4} xm={6}>
            <Card className='image-box card'>
              <img className='center' alt='' src="https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70" />
            <Card.Body>
              <p className='product-name-on-card'> Iphone phone CX565 G5</p>
              <p className='product-price-on-card'>Price:Ksh.50000</p>
            </Card.Body>
            </Card>
            </Col>

            <Col className='p-1'  xl={2} lg={2} md={2} sm={4} xm={6}>
            <Card className='image-box card'>
              <img className='center' alt='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYipSYVWvJWlkIPfU7Q95SBXF0zBUiJ5DxEw&usqp=CAU" />
            <Card.Body>
              <p className='product-name-on-card'> Iphone phone CX565 G5</p>
              <p className='product-price-on-card'>Price:Ksh.50000</p>
            </Card.Body>
            </Card>
            </Col>

        

            
          </Row>
        </Container>
        
      </Fragment>
    )
  }
}

export default FeaturedProducts