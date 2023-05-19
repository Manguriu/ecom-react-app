import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'


class Collection extends Component {
  render() {
    return (
      <Fragment>
       <Container className="text-center" fluid={true} >
         <div className="section-title text-center mb-55">
          <h2>Collection Products</h2>
          <p className=''>This are some of our  products collection, Amazing Products you may like.</p>
        </div>
        <Row>
          <Col className='p-0'  xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className='image-box card w-100 '>
              <img className='center w-75' alt='' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/036575/1.jpg?6795" />
            <Card.Body>
              <p className='product-name-on-card'> Fashion Mens</p>
              <p className='product-price-on-card'>Price:Ksh.50000</p>
            </Card.Body>
            </Card>
          </Col>

          <Col className='p-0'  xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className='image-box card w-100 '>
              <img className='center w-75' alt='' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/964468/1.jpg?2345" />
            <Card.Body>
              <p className='product-name-on-card'> Fashion Mens</p>
              <p className='product-price-on-card'>Price:Ksh.50000</p>
            </Card.Body>
            </Card>
          </Col>

          <Col className='p-0'  xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className='image-box card w-100 '>
              <img className='center w-75' alt='' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/2476411/1.jpg?9639" />
            <Card.Body>
              <p className='product-name-on-card'> Fashion Mens</p>
              <p className='product-price-on-card'>Price:Ksh.50000</p>
            </Card.Body>
            </Card>
          </Col>

          <Col className='p-0'  xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className='image-box card w-100 '>
              <img className='center w-75' alt='' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/27/152507/1.jpg?1790" />
            <Card.Body>
              <p className='product-name-on-card'> Fashion Mens</p>
              <p className='product-price-on-card'>Price:Ksh.50000</p>
            </Card.Body>
            </Card>
          </Col>

          <Col className='p-0'  xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className='image-box card w-100 '>
              <img className='center w-75' alt='' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/206033/1.jpg?0812" />
            <Card.Body>
              <p className='product-name-on-card'> Fashion Mens</p>
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

export default Collection