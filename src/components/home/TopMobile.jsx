import React, { Component, Fragment } from "react";
import SliderMenu from "./SliderMenu";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import AppURL from "../../api/AppURL";

export class TopMobile extends Component {
  constructor() {
    super();
    this.state = {
      Sliderdata:[],
    };
  }
  componentDidMount() {
  
      axios
      .get(AppURL.SlideMenu)
      .then((response) => {
        this.setState({ Sliderdata: response.data });
      })
      .catch((error) => {});
  }

  render() {
    return (
      <Fragment>
        <Container fluid={true} className="p-0 m-0 overflow-hidden">
          <Row className="p-0 m-0 overflow-hidden">
            <Col lg={12} md={12} sm={12}>
              <SliderMenu data={this.state.Sliderdata}/>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default TopMobile;
