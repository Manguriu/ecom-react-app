import React, { Component } from "react";
import { Container } from "react-bootstrap";

export class Featuredloading extends Component {
  render() {
    let isLoading = this.props.isLoading;
    return (
      <div className={isLoading}>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>All New Products</h2>
            <p className="">
              This are some of our featured products, Amazing Products you may
              like.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
              <a href="" className="card image-box h-100 w-100">
                <div className="ph-picture"></div>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-12 small" />
                      <div className="ph-col-12 small" />
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
              <a href="" className="card image-box h-100 w-100">
                <div className="ph-picture"></div>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-12 small" />
                      <div className="ph-col-12 small" />
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
              <a href="" className="card image-box h-100 w-100">
                <div className="ph-picture"></div>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-12 small" />
                      <div className="ph-col-12 small" />
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
              <a href="" className="card image-box h-100 w-100">
                <div className="ph-picture"></div>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-12 small" />
                      <div className="ph-col-12 small" />
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
              <a href="" className="card image-box h-100 w-100">
                <div className="ph-picture"></div>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-12 small" />
                      <div className="ph-col-12 small" />
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-2 col-md-2 col-sm-4 col-6 p-1">
              <a href="" className="card image-box h-100 w-100">
                <div className="ph-picture"></div>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-12 small" />
                      <div className="ph-col-12 small" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Featuredloading;
