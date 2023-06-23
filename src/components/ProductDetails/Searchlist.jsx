import React, { Component, Fragment } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";


export class Searchlist extends Component {
  render() {
    const Categorylist = this.props.ProductData;
    const searchkey = this.props.searchkey;
    const MyView = Categorylist.map((Categorylist, i) => {
      if (Categorylist.discount === "na") {
        return (
          <Col className="p-1" xl={3} lg={3} md={3} sm={6} xm={6}>
            <Link className="text-link" to={"/product/" + Categorylist.id}>
              <Card className="image-box card">
                <img className="center" alt="" src={Categorylist.image} />
                <Card.Body>
                  <p className="product-name-on-card">{Categorylist.title}</p>
                  <p className="product-price-on-card text-success">
                    Ksh:{Categorylist.price}
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      } else {
        return (
          <Col className="p-1" xl={3} lg={3} md={3} sm={6} xm={6}>
            <Link className="text-link" to={"/product/" + Categorylist.id}>
              <Card className="image-box card">
                <img className="center" alt="" src={Categorylist.image} />
                <Card.Body>
                  <p className="product-name-on-card">{Categorylist.title}</p>
                  <p className="product-price-on-card text-success">
                    <strike className="text-danger">
                      Ksh:{Categorylist.price}
                    </strike>
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
        <div className="Bread-crub mt-2">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/"> Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={"/categorylist/"+searchkey }>{searchkey}</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55 mt-1">
            <h2>You Searched for: {searchkey}</h2>
            <p className="">
              Some Products you Searched For,
            </p>
          </div>
          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default Searchlist