import React, { Component, Fragment } from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import ecom2 from "../../assets/images/ecom2.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import AllMenu from "../home/AllMenu";

class NavMenuDesktop extends Component {
  constructor() {
    super();
    this.state = {
      sideNavState: "sideNavClose",
      contentOverState: "ContentOverlayClose",
    };
  }
  menuClickHandler = () => {
    this.sideNavOpenclose();
  };

  OverlayClickHandler = () => {
    this.sideNavOpenclose();
  };

  sideNavOpenclose = () => {
    //eslint
    // let contentOverState = this.state.contentOverState;
    let sideNavState = this.state.sideNavState;

    if (sideNavState === "sideNavOpen") {
      this.setState({
        sideNavState: "sideNavClose",
        contentOverState: "ContentOverlayClose",
      });
    } else {
      this.setState({
        sideNavState: "sideNavOpen",
        contentOverState: "ContentOverlayOpen",
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Navbar fixed={"top"} className="navbar" bg="light">
            <Container
              fluid={"true"}
              className="fixed-top shadow-sm mb-0 p-2 bg-white"
            >
              <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Button onClick={this.menuClickHandler} className="btn">
                    <i className=" fa fa-bars"></i>
                  </Button>
                  <Link link to="/">
                    <img className="nav-logo{" src={ecom2} alt="" />
                  </Link>
                </Col>

                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <div className="input-group w-100">
                    <input type="text" className="form-control" />
                    <Button type="button" className="btn site-btn">
                      <i className="fa fa-search"></i>
                    </Button>
                  </div>
                </Col>

                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <button href="/" className="btn">
                    <i className="fa h4 fa-heart"></i>
                    <sup>
                      <span className="badge text-white bg-danger">2</span>
                    </sup>
                  </button>
                  <button href="/" className="btn">
                    <i className="fa h4 fa-bell"></i>
                    <sup>
                      <span className="badge text-white bg-warning">5</span>
                    </sup>
                  </button>

                  <button className="btn">
                    <i className="fa h4 fa-mobile-alt"></i>
                  </button>

                  <button href="/" className="h4 btn">
                    Login
                  </button>

                  <Button className="cart-btn">
                    <i className=" fa fa-shopping-cart"> 10 items</i>
                  </Button>
                </Col>
              </Row>
            </Container>
          </Navbar>
        </div>

        <div className={this.state.sideNavState}>
          <AllMenu />
        </div>

        <div
          onClick={this.OverlayClickHandler}
          className={this.state.contentOverState}
        ></div>
      </Fragment>
    );
  }
}

export default NavMenuDesktop;
