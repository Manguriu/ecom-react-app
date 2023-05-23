import React, { Component, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export class PurchaseRoute extends Component {
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
              <h4 className="section-title-login">Purchase Page</h4>
              <p className="section-title-contact">
                Nairobi is Kenyas capital city. In addition to its urban core,
                the city has Nairobi National Park, a large game reserve known
                for breeding endangered.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default PurchaseRoute;
