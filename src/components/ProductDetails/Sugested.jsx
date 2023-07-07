import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppURL from "../../api/AppURL";
import axios from "axios";

export class Sugested extends Component {
  constructor() {
    super();
    this.state = {
      ProductData: [],
    };
  }

  componentDidMount() {
    let sub_category = this.props.sub_category;

    axios
      .get(AppURL.SuggestedP(sub_category))
      .then((response) => {
        this.setState({
          ProductData: response.data,
        });
      })
      .catch((error) => {});
  }

  render() {
    const List = this.state.ProductData;
    if (List.length > 0) {
      const View = List.map((ProductList, i) => {
        if (ProductList.discount === "na") {
          return (
            <Col className="p-1" xl={2} lg={2} md={2} sm={4} xm={6}>
              <Link className="text-link" to={"/product/" + ProductList.id}>
                <Card className="image-box card">
                  <img className="center" alt="" src={ProductList.image} />
                  <Card.Body>
                    <p className="product-name-on-card">{ProductList.title}</p>
                    <p className="product-price-on-card text-success">
                      Ksh:{ProductList.price}
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        } else {
          return (
            <Col className="p-1" xl={2} lg={2} md={2} sm={4} xm={6}>
              <Link className="text-link" to={"/product/" + ProductList.id}>
                <Card className="image-box card">
                  <img className="center" alt="" src={ProductList.image} />
                  <Card.Body>
                    <p className="product-name-on-card">{ProductList.title}</p>
                    <p className="product-price-on-card text-success">
                      <strike className="text-danger">
                        Ksh:{ProductList.price}
                      </strike>
                      <br />
                      Discount:{ProductList.discount}
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        }
      }); //e

      return (
        <Fragment>
          <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55">
              <h2>Suggested Products</h2>
              <p className="">
                This are some of our Sugested products you may like, Amazing
                Products you may like.
              </p>
            </div>

            <Row>{View}</Row>
          </Container>
        </Fragment>
      );
    } else {
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>Suggested Products</h2>
            <p className="">
              This are some of our Sugested products you may like, Amazing
              Products you may like.
            </p>
          </div>

          <Row>
            <p>No Similar Products Available for Now</p>
          </Row>
        </Container>
      </Fragment>;
    }
  }
}

export default Sugested;
