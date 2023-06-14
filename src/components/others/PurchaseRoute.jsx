import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";
import parse from "html-react-parser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class PurchaseRoute extends Component {
  constructor() {
    super();
    this.state = {
      purchase: "",
      loaderDiv: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    //save in site for no reload
    let SiteInfoPurchase = sessionStorage.getItem("SiteDetails");

    if (SiteInfoPurchase === null) {
      axios
        .get(AppURL.SiteDetails)
        .then((response) => {
          let StatusCode = response.status;
          if (StatusCode === 200) {
            let jsonData = response.data[0]["purchase"];
            this.setState({
              purchase: jsonData,
              loaderDiv: "d-none",
              mainDiv: "",
            });

            sessionStorage.setItem("SiteInfoPurchase", jsonData);
          } else {
            toast.error("something`s not adding up", {
              position: "bottom-center",
            });
          }
        })
        .catch((error) => {
          toast.error("something`s not adding up", {
            position: "bottom-center",
          });
        });
    } else {
      this.setState({ purchase: SiteInfoPurchase });
    }
  }

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
              <div className={this.state.loaderDiv}>
                <div class="ph-item">
                  <div class="ph-col-12">
                    <div class="ph-picture"></div>
                    <div class="ph-row">
                      <div class="ph-col-6 big"></div>
                      <div class="ph-col-4 empty big"></div>
                      <div class="ph-col-2 big"></div>
                      <div class="ph-col-4"></div>
                      <div class="ph-col-8 empty"></div>
                      <div class="ph-col-6"></div>
                      <div class="ph-col-6 empty"></div>
                      <div class="ph-col-12"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={this.state.mainDiv}>
                <h4 className="section-title-login">Purchase Page</h4>
                <p className="section-title-contact">
                  {parse(this.state.purchase)}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default PurchaseRoute;
