import React, { Component, Fragment } from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import ecom2 from "../../assets/images/ecom2.png";
import menu from "../../assets/images/menu.png";
import { Link, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import AllMenu from "../home/AllMenu";

class NavMenuDesktop extends Component {
  constructor() {
    super();
    this.state = {
      sideNavState: "sideNavClose",
      contentOverState: "ContentOverlayClose",
      searchkey: "",
      Searchstatus: "false",
    };
    this.SearchOnChange = this.SearchOnChange.bind(this);
    this.searchOnClick = this.searchOnClick.bind(this);
    this.SearchRedirect = this.SearchRedirect.bind(this);
  }

  SearchOnChange(event) {
    let Searchkey = event.target.value;
    this.setState({ searchkey: Searchkey });
  }

  searchOnClick() {
    if (this.state.searchkey.length >= 2) {
      this.setState({ Searchstatus: true });
    }
  }

  SearchRedirect() {
    if (this.state.Searchstatus === true) {
      return <Redirect to={"/productlistsearch/" + this.state.searchkey} />;
    }
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
        <div className="TopSectionDown bg-dark">
          <Navbar fixed={"top"} className="navbar" bg="light">
            <Container
              fluid={"true"}
              className="fixed-top shadow-sm mb-0 p-2 bg-white"
            >
              <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <img
                    src={menu}
                    alt=""
                    className="bar-imag"
                    onClick={this.menuClickHandler}
                  />

                  <Link link to="/">
                    <img className="nav-logo" src={ecom2} alt="" />
                  </Link>
                </Col>

                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <div className="input-group w-100">
                    <input
                      onChange={(event) => this.SearchOnChange(event)}
                      type="text"
                      className="form-control"
                    />
                    <Button
                      onClick={this.searchOnClick}
                      type="button"
                      className="btn site-btn"
                    >
                      <i className="fa fa-search"></i>
                    </Button>
                  </div>
                </Col>

                <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                  <Link to="/favourite" className="btn">
                    <i className="fa h4 fa-heart"></i>
                    <sup>
                      <span className="badge text-white bg-danger">2</span>
                    </sup>
                  </Link>

                  <Link to="/notify" className="btn">
                    <i className="fa h4 fa-bell"></i>
                    <sup>
                      <span className="badge text-white bg-warning">5</span>
                    </sup>
                  </Link>

                  <Link to="/login" className="h4 btn ">
                    Login
                  </Link>

                  <Link to="/register" className="h4 btn ">
                    Register
                  </Link>

                  <Link to="/cart" className="cart-btn">
                    <i className=" fa fa-shopping-cart"> 10 items</i>
                  </Link>
                </Col>
              </Row>
              {this.SearchRedirect()}
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
