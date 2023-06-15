import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import axios from "axios";
import AppURL from "../../api/AppURL";

export class Categories extends Component {
  constructor() {
    super();
    this.state = {
      Menudata: [],
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.AllCategory)
      .then((response) => {
        this.setState({ Menudata: response.data });
      })
      .catch((error) => {});
  }
  render() {
    const Datalist = this.state.Menudata;

    const View = Datalist.map((Datalist, i) => {
      return (
        <Col
          key={i.toString()}
          className="p-0"
          xl={2}
          lg={2}
          md={2}
          sm={6}
          xs={6}>
          <Card className="h-100 w-100 text-center">
            <Card.Body>
              <img className="center" alt="" src={Datalist.category_image} />
              <h5 className="category-name">{Datalist.category_name}</h5>
              <p className="product-name-on-card">Mobile Phones</p>
            </Card.Body>
          </Card>
        </Col>
      );
    });

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>Products</h2>
            <p className="">
              This are some of our featured products Categories
            </p>
          </div>
          <Row>{View}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default Categories;
