import React, { Component, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import login from "../../assets/images/login.png";
import { Link } from "react-router-dom";

export class LoginUSer extends Component {
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
                    <h4 className="section-title-login"> User Sign_In</h4>
                    <h6 className="Section-sub-title">
                      User Data
                    </h6>
                    <input
                      className="form-control m-2"
                      type="Email"
                      placeholder="Enter Email.."
                    />
                    <input
                      className="form-control m-2"
                      type="Password"
                      placeholder="Enter Password.."
                    />
                    <Button className="btn btn-block m-2 site-btn-login">
                      {" "}
                      Login..
                    </Button>
                    <br></br><hr />
                    <p>
                        Dont have an Account? <Link to="/register">Register</Link>
                    </p>
                    <hr />
                    <p>
                      Password Reset:  <Link to="/reset"> Forgot Passord??..</Link>
                    </p>
                  </Form>
                </Col>
                {/* //Mobile view */}
                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <img className="onboardBanner" src={login} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default LoginUSer;
