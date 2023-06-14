import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";
import parse from "html-react-parser";

export class Refund extends Component {
  constructor() {
    super();
    this.state = {
      refund: "",
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.SiteDetails)
      .then((response) => {
        let StatusCode = response.status;
        if (StatusCode === 200) {
          let jsonData = response.data[0]["refund"];
          this.setState({ refund: jsonData });
        }
      })
      .catch((error) => {});
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
              {/* <h4 className="section-title-login">Refund Policy</h4> */}
              <p className="section-title-contact">
                {parse(this.state.refund)}
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Refund;
