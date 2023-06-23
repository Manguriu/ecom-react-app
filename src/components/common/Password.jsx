import React, { Component, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import forget from "../../assets/images/forget.jpg";
import { Link } from "react-router-dom";

export class Password extends Component {
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
                    <h4 className="section-title-login">Password Reset</h4>
                    <h6 className="Section-sub-title">Reset password</h6>

                    <input
                      className="form-control m-2"
                      type="Email"
                      placeholder="Enter Email.."
                    />
                     <input
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter code.."
                    />
                     <input
                      className="form-control m-2"
                      type="passord"
                      placeholder="Enter New Password.."
                    />
                     <input
                      className="form-control m-2"
                      type="passord"
                      placeholder="Confirm New password.."
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
    )
  }
}

export default Password