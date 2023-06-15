import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import SliderMenu from "./SliderMenu";
import axios from "axios";
import AppURL from "../../api/AppURL";

export class TopHoome extends Component {
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
    return (
      <Fragment>
        <Container fluid={true} className="p-0 m-0 overflow-hidden">
          <Row>
            <Col lg={3} md={3} sm={12}>
              <MegaMenu data={this.state.Menudata} />
            </Col>

            <Col lg={9} md={9} sm={12}>
              <SliderMenu />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default TopHoome;
