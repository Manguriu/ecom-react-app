import React, { Component, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import login from "../../assets/images/login.png";
import { Link, Redirect } from "react-router-dom";
import AppURL from "../../api/AppURL";
import axios from "axios";

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      message: "",
      loggedIn: false,
    };
  }

  //login form submit method
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    };

    axios
      .post(AppURL.UserRegister, data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        this.setState({ loggedIn: true });
        this.props.setUser(response.data.user);
      })
      .catch((error) => {});
  };

  render() {
    //what happens after login
    if (this.state.loggedIn) {
      return <Redirect to={"/userprofile"} />;
    }
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
                    <h4 className="section-title-login">
                      New User Registration
                    </h4>
                    <h6 className="Section-sub-title">New User Data</h6>
                    <input
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter Name.."
                      onChange={(e) => {
                        this.setState({ name: e.target.value });
                      }}
                    />
                    <input
                      className="form-control m-2"
                      type="Email"
                      placeholder="Enter Email.."
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                    />
                    <input
                      className="form-control m-2"
                      type="Password"
                      placeholder="Enter Password.."
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                    />

                    <input
                      className="form-control m-2"
                      type="Password"
                      placeholder="Confirm Password.."
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
                      Register..
                    </Button>
                    <hr></hr>
                    <p>
                      Already have an Account? <Link to="/login">Login..</Link>
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

export default Register;
