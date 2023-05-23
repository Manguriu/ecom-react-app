import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export class About extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <h4 className="section-title-login">About Company</h4>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default About;
