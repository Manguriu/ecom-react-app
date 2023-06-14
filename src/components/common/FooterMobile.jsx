import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import apple from "../../assets/images/apple.png";
import google from "../../assets/images/google.png";
import AppURL from "../../api/AppURL";
import axios from "axios";

class FooterMobile extends Component {
  constructor() {
    super();
    this.state = {
      copyright: "",
      address: "",
      android_app: "",
      ios_app: "",
      facebook: "",
      twitter: "",
      instagram: "",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.SiteDetails)
      .then((response) => {
        let StatusCode = response.status;
        if (StatusCode === 200) {
          let jsonData = response.data[0];
          this.setState({
            copyright: jsonData["copyright"],
            address: jsonData["address"],
            android_app: jsonData["android_app"],
            ios_app: jsonData["ios_app"],
            facebook: jsonData["facebook"],
            twitter: jsonData["twitter"],
            instagram: jsonData["instagram"],
          });
        }
      })
      .catch((error) => {});
  }

  render() {
    return (
      <Fragment>
        <div className="footerback m-0 mt-5 pt-5  shadow-sm">
          <Container className="text-center">
            <Row className="px-0 my-5">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">Office Address</h5>
                <p>{this.state.address}</p>
                <br></br>
                <h6>Email:</h6> Customerserv@ecomshop.com &nbsp;
                <h5 className="footer-menu-title">Social Link</h5>
                <a href={this.state.facebook}>
                  <i className="fab m-1 h4 fa-facebook"></i>
                </a>
                <a href={this.state.instagram}>
                  <i className="fab m-1 h4 fa-instagram"></i>
                </a>
                <a href={this.state.instagram}>
                  <i className="fab m-1 h4 fa-twitter"></i>
                </a>
              </Col>

              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">App Download</h5>
                <Link link to="/">
                  <img src={apple} alt="" />
                </Link>{" "}
                &nbsp;
                <Link link to="/">
                  <img className="mt-2" src={google} alt="" />
                </Link>
              </Col>
            </Row>
          </Container>
          <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
            <Container>
              <Row>
                <h6 className="text-white">
                  <i className="fa fa-copyright" aria-hidden="true">
                    {this.state.copyright}
                  </i>
                </h6>
              </Row>
            </Container>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default FooterMobile;
