import React, { Component, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import forget from "../../assets/images/forget.jpg";

import axios from "axios";
import AppURL from "../../api/AppURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class Reset extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      message: "",
    };
  }

  // Forget Password Form Submit Method
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
    };

    axios
      .post(AppURL.UserForget, data)
      .then((response) => {
        // console.log(response);
        this.setState({ message: response.data.message });

        toast.success(this.state.message, {
          position: "top-right",
        });
      })
      .catch((error) => {
        // console.log(error);
        this.setState({ message: error.response.data.message });
        toast.error(this.state.message, {
          position: "top-right",
        });
      });
  };

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
              xs={12}>
              <Row className="text-center">
                <Col
                  className="d-flex justify-content-center"
                  md={6}
                  lg={6}
                  sm={12}
                  xs={12}>
                  <Form onSubmit={this.formSubmit} className="onboardForm">
                    <h4 className="section-title-login">Forgot Password</h4>
                    <h6 className="Section-sub-title">
                      Enter email to initiate reset
                    </h6>

                    <input
                      className="form-control m-2"
                      type="Email"
                      placeholder="Enter Email.."
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                    />

                    <Button
                      type="submit"
                      className="btn btn-block m-2 site-btn-login">
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
        <ToastContainer />
      </Fragment>
    );
  }
}

export default Reset;
