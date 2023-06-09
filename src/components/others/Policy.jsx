import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";
import parse from "html-react-parser";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

export class Policy extends Component {
  constructor() {
    super();
    this.state = {
      privacy: "",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.SiteDetails)
      .then((response) => {
        let StatusCode = response.status;
        if (StatusCode === 200) {
          let jsonData = response.data[0]["privacy"];
          this.setState({ privacy: jsonData });
        }
      })
      .catch((error) => {});
  }
  render() {
    return (
      <Fragment>
        <Container>
        <div className="Bread-crub">
          <Breadcrumb>
            <Breadcrumb.Item><Link to="/"> Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/policy">Policy</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          </div>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}>
              <h4 className="section-title-login">Private Policy</h4>
              <p className="section-title-contact">
                {parse(this.state.privacy)}
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Policy;
