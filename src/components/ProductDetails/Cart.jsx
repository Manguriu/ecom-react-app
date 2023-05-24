import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import image1 from "../../assets/images/product/image1.png";

export class Cart extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <div className="section-title text-center mb-55">
            <h2> Cart List</h2>
          </div>

          <Row>
            <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col md={3} lg={3} sm={6} xs={6}>
                      <img alt="" className="cart-product-img" src={image1} />
                    </Col>

                    <Col md={6} lg={6} sm={6} xs={6}>
                      <h5 className="product-name">
                        Sony Interactive Entertainment PS5 Playstation 5 Console
                        Standard 825GB Disc
                      </h5>
                      <h6> Quantity = 01 </h6>
                      <h6> KSh 86,590</h6>
                    </Col>

                    <Col md={3} lg={3} sm={12} xs={12}>
                      <input
                        placeholder="1"
                        className="form-control text-center"
                        type="number"
                      />
                      <Button className="btn btn-block w-100 mt-3  site-btn">
                        <i className="fa fa-trash-alt"></i> Remove{" "}
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col md={3} lg={3} sm={6} xs={6}>
                      <img alt="" className="cart-product-img" src={image1} />
                    </Col>

                    <Col md={6} lg={6} sm={6} xs={6}>
                      <h5 className="product-name">
                        Sony Interactive Entertainment PS5 Playstation 5 Console
                        Standard 825GB Disc
                      </h5>
                      <h6> Quantity = 01 </h6>
                      <h6> KSh 86,590</h6>
                    </Col>

                    <Col md={3} lg={3} sm={12} xs={12}>
                      <input
                        placeholder="1"
                        className="form-control text-center"
                        type="number"
                      />
                      <Button className="btn btn-block w-100 mt-3  site-btn">
                        <i className="fa fa-trash-alt"></i> Remove{" "}
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col md={4} lg={4} sm={6} xs={6}>
                      <h5> Total Item = 02 </h5>
                      <h5>Total Price = Ksh.200000</h5>
                      <Button className="btn btn-block w-100 mt-3  site-btn">
                        <i className="fa fa-shopping-cart"></i> CheckOut{" "}
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Cart;
