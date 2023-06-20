import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { Link } from "react-router-dom";
import Productsloading from "../placeholder/Productsloading";

export class Categories extends Component {
  constructor() {
    super();
    this.state = {
      Menudata: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.AllCategory)
      .then((response) => {
        this.setState({ Menudata: response.data, isLoading: "d-none", mainDiv: "" });
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
          xs={6}
        >
          <Link to={"/categorylist/" + Datalist.category_name}>
            <Card className="h-100 w-100 text-center">
              <Card.Body>
                <img className="center" alt="" src={Datalist.category_image} />
                <h5 className="category-name">{Datalist.category_name}</h5>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    });

    return (
      <Fragment>
        <Productsloading isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
          <Container className="text-center" fluid={true}>
            <div className="section-title text-center mb-55">
              <h2>Products</h2>
              <p className="">
                This are some of our featured products Categories
              </p>
            </div>
            <Row>{View}</Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Categories;
