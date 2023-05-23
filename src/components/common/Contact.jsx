import React, { Component, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export class Contact extends Component {
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
                    <h4 className="section-title-login">Contact us</h4>
                    <h6 className="Section-sub-title">Contact Company</h6>
                    <input
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter Phone Number.."
                    />
                    <input
                      className="form-control m-2"
                      type="email"
                      placeholder="Enter Email.."
                    />
                    <textarea
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter Message.."
                    />
                    <Button className="btn btn-block m-2 site-btn-login">
                      {" "}
                      Send Message
                    </Button>
                  </Form>
                </Col>
                {/* //Mobile view */}
                <Col
                  className="p-0 Desktop m-0 mt-5"
                  md={6}
                  lg={6}
                  sm={6}
                  xs={6}
                >
                  <p className="section-title-contact">
                    kenya Nairobi moi ave 88899
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510564.6510794761!2d36.517748885751416!3d-1.3031873880220497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1684834998790!5m2!1sen!2ske"
                    width="600"
                    height="450"
                    styles="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Contact;
