import React, { Component, Fragment } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Category extends Component {
  render() {
    const Categorylist = this.props.ProductData;
    const Category = this.props.category;
    const MyView = Categorylist.map((Categorylist, i) => {
        if (Categorylist.discount === "na") {
          return (
            <Col className="p-1" xl={3} lg={3} md={3} sm={6} xm={6}>
              <Link to="/product">
                <Card className="image-box card">
                  <img className="center" alt="" src={Categorylist.image} />
                  <Card.Body>
                    <p className="product-name-on-card">{Categorylist.title}</p>
                    <p className="product-price-on-card text-success">Ksh:{Categorylist.price}</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        } else {
          return (
            <Col className="p-1" xl={3} lg={3} md={3} sm={6} xm={6}>
              <Link to="/product">
                <Card className="image-box card">
                  <img className="center" alt="" src={Categorylist.image} />
                  <Card.Body>
                    <p className="product-name-on-card">{Categorylist.title}</p>
                    <p className="product-price-on-card text-success">
                      <strike className="text-danger">Ksh:{Categorylist.price}</strike>
                      <br />
                      Discount:{Categorylist.discount}
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        }
      });



    return (
     <Fragment>

<Container className="text-center" fluid={true} >
         <div className="section-title text-center mb-55">
          <h2>{Category}</h2>
          <p className=''>This are some of our  products collection, Amazing Products you may like.</p>
        </div>
        <Row>
          {MyView}
        </Row>
        </Container>

     </Fragment>
    )
  }
}

export default Category