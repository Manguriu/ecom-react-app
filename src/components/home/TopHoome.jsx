import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import SliderMenu from "./SliderMenu";
import axios from "axios";
import AppURL from "../../api/AppURL";
import Slider from "../placeholder/Slider";

export class TopHoome extends Component {
  constructor() {
    super();
    this.state = {
      Menudata: [],
      Sliderdata:[],
      isLoading: "",
      mainDiv: "d-none"
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.AllCategory)
      .then((response) => {
        this.setState({ Menudata: response.data });
      })
      .catch((error) => {});
      axios
      .get(AppURL.SlideMenu)
      .then((response) => {
        this.setState({ Sliderdata: response.data,isLoading:"d-none" ,mainDiv:""});
      })
      .catch((error) => {});
  }

  render() {
    return (
      <Fragment>
        <Slider isLoading={this.state.isLoading}/>


        <div className={this.state.mainDiv}>
        <Container fluid={true} className="p-0 m-0 overflow-hidden">
          <Row>
            <Col lg={3} md={3} sm={12}>
              <MegaMenu data={this.state.Menudata} />
            </Col>

            <Col lg={9} md={9} sm={12}>
              <SliderMenu  data={this.state.Sliderdata}/>
            </Col>
          </Row>
        </Container>
        </div>
      </Fragment>
    );
  }
}

export default TopHoome;
