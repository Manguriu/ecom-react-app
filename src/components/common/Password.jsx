import React, { Component, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import forget from "../../assets/images/forget.jpg";
import AppURL from "../../api/AppURL";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class Password extends Component {
  constructor() {
    super();
    this.state = {
      token: "",
      email: "",
      password: "",
      password_confirmation: "",
      message: "",
    };
  }

  //password reset form submit method
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      token: this.state.token,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    };

    axios
      .post(AppURL.PassReset, data)
      .then((response) => {
        this.setState({ message: response.data.message });

        toast.success(this.state.message, {
          position: "top-right",
        });
        document.getElementById("freset").reset();
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
                  <Form
                    onSubmit={this.formSubmit}
                    id="freset"
                    className="onboardForm">
                    <h4 className="section-title-login">Password Reset</h4>
                    <h6 className="Section-sub-title">Reset password</h6>

                    <input
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter email.."
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                    />
                    <input
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter code.."
                      onChange={(e) => {
                        this.setState({ token: e.target.value });
                      }}
                    />
                    <input
                      className="form-control m-2"
                      type="password"
                      placeholder="Enter New Password.."
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                    />
                    <input
                      className="form-control m-2"
                      type="password"
                      placeholder="Confirm New password.."
                      onChange={(e) => {
                        this.setState({
                          password_confirmation: e.target.value,
                        });
                      }}
                    />

                    <Button
                      type="submit"
                      className="btn btn-block m-2 site-btn-login">
                      {" "}
                      Change..
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

export default Password;
