import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

export class Categories extends Component {
  render() {
    return (
      <Fragment>
          <Container className="text-center" fluid={true} >
        <div className="section-title text-center mb-55">
          <h2>Products</h2>
          <p className=''>This are some of our featured products Categories</p>
        </div>
          <Row>
            <Col xl={6} lg={6} md={2} sm={12} xs={12}>
              <Row>
              <Col className='p-0'  xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className='h-100 w-100 text-center'>
                  <Card.Body>
                    <img className='center' alt='' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/5704321/1.jpg?0167" />
                     <h5 className='category-name'>Phones</h5>
                       <p className='product-name-on-card'>Mobile Phones</p>
                  </Card.Body>
               </Card>
              </Col>

              <Col className='p-0'  xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className='h-100 w-100 text-center'>
                  <Card.Body>
                    <img className='center' alt='' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/8788211/1.jpg?1376" />
                     <h5 className='category-name'>Laptops</h5>
                       <p className='product-name-on-card'>Mobile Phones</p>
                  </Card.Body>
               </Card>
              </Col>

              <Col className='p-0'  xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className='h-100 w-100 text-center'>
                  <Card.Body>
                    <img className='center' alt='' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/33/787346/1.jpg?3451" />
                     <h5 className='category-name'>Headphones</h5>
                       <p className='product-name-on-card'>Core i-5</p>
                  </Card.Body>
               </Card>
              </Col>

              <Col className='p-0'  xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className='h-100 w-100 text-center'>
                  <Card.Body>
                    <img className='center' alt='' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/551685/1.jpg?1753" />
                     <h5 className='category-name'>Groceries</h5>
                       <p className='product-name-on-card'>Mobile Phones</p>
                  </Card.Body>
               </Card>
              </Col>


              </Row>
            </Col>

            <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
              <Row>
              <Col className='p-0'  xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className='h-100 w-100 text-center'>
                  <Card.Body>
                    <img className='center' alt='' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/360454/1.jpg?1646" />
                     <h5 className='category-name'>Fashion</h5>
                       <p className='product-name-on-card'>Mobile Phones</p>
                  </Card.Body>
               </Card>
              </Col>

              <Col className='p-0'  xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className='h-100 w-100 text-center'>
                  <Card.Body>
                    <img className='center' alt='' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/196649/1.jpg?9259" />
                     <h5 className='category-name'>Appliances</h5>
                       <p className='product-name-on-card'>Mobile Phones</p>
                  </Card.Body>
               </Card>
              </Col>

              <Col className='p-0'  xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className='h-100 w-100 text-center'>
                  <Card.Body>
                    <img className='center' alt='' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/5016511/1.jpg?3923" />
                     <h5 className='category-name'>Headphones</h5>
                       <p className='product-name-on-card'>Mobile Phones</p>
                  </Card.Body>
               </Card>
              </Col>

              <Col className='p-0'  xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className='h-100 w-100 text-center'>
                  <Card.Body>
                    <img className='center' alt='' src="https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/747148/1.jpg?0731" />
                     <h5 className='category-name'>Kitchen</h5>
                       <p className='product-name-on-card'>Mobile Phones</p>
                  </Card.Body>
               </Card>
              </Col>


              </Row>
            </Col>



          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Categories