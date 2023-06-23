import React, { Component, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import forget from "../../assets/images/forget.jpg";
import { Link } from "react-router-dom";

export class Reset extends Component {
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
              <Row className="text-center">
                <Col
                  className="d-flex justify-content-center"
                  md={6}
                  lg={6}
                  sm={12}
                  xs={12}
                >
                  <Form className="onboardForm">
                    <h4 className="section-title-login">Forgot Password</h4>
                    <h6 className="Section-sub-title">Enter email to initiate reset</h6>

                    <input
                      className="form-control m-2"
                      type="Email"
                      placeholder="Enter Email.."
                    />

                    <Button className="btn btn-block m-2 site-btn-login">
                      {" "}
                      Send..
                    </Button>
                  </Form>
                </Col>
                {/* //Mobile view */}
                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <img className="onboardBanner" src={forget} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Reset;
