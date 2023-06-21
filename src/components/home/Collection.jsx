import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Collectionloading from '../placeholder/Collectionloading';


class Collection extends Component {

  constructor() {
    super();
    this.state = {
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.AllProductsremark("Collection"))
      .then((response) => {
        this.setState({ ProductData: response.data,isLoading: "d-none", mainDiv: "" });
      })
      .catch((error) => {});
  }


  render() {

    const Collectionlist = this.state.ProductData;

    const MyView = Collectionlist.map((Collectionlist, i) => {
      if (Collectionlist.discount === "na") {
        return (
          <Col className="p-1" xl={3} lg={3} md={3} sm={6} xm={6}>
             <Link className="text-link" to={"/product/"+Collectionlist.id}>
              <Card className="image-box card">
                <img className="center" alt="" src={Collectionlist.image} />
                <Card.Body>
                  <p className="product-name-on-card">{Collectionlist.title}</p>
                  <p className="product-price-on-card text-success">Ksh:{Collectionlist.price}</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      } else {
        return (
          <Col className="p-1" xl={3} lg={3} md={3} sm={6} xm={6}>
            <Link className="text-link" to={"/product/"+Collectionlist.id}>
              <Card className="image-box card">
                <img className="center" alt="" src={Collectionlist.image} />
                <Card.Body>
                  <p className="product-name-on-card">{Collectionlist.title}</p>
                  <p className="product-price-on-card text-success">
                    <strike className="text-danger">Ksh:{Collectionlist.price}</strike>
                    <br />
                    Discount:{Collectionlist.discount}
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
        <Collectionloading isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
       <Container className="text-center" fluid={true} >
         <div className="section-title text-center mb-55">
          <h2>Collection Products</h2>
          <p className=''>This are some of our  products collection, Amazing Products you may like.</p>
        </div>
        <Row>
          {MyView}
        </Row>
        </Container>
        </div>
      </Fragment>
    )
  }
}

export default Collection