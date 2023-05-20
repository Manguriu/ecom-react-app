import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ecom2 from "../../assets/images/ecom2.png";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import MegaMenuPhone from '../home/MegaMenuPhone';

 class NavMenuMobile extends Component {

  constructor(){
    super();
    this.state={
      sideNavState:"sideNavClose",
      contentOverState: "ContentOverlayClose"
    }

  }
  menuClickHandler=()=>{
    this.sideNavOpenclose();

  }

  OverlayClickHandler=()=>{
    this.sideNavOpenclose();
  }


  sideNavOpenclose=()=>{

   
    let contentOverState =this.state.contentOverState;
    let sideNavState =this.state.sideNavState;
    
    if (sideNavState === "sideNavOpen"){
      this.setState({sideNavState:"sideNavClose",contentOverState:"ContentOverlayClose"})

    }else{
      this.setState({sideNavState:"sideNavOpen",contentOverState:"ContentOverlayOpen"})
    }

  }


  render() {

    return (
      <Fragment>

        <div className='TopSectionDown'>
                <Container fluid={"true"} className='fixed-top shadow-sm mb-0 p-2 bg-white'>
                  <Row>
                    <Col  lg={4} md={4} sm={12} xs={12}>

                    <Button onClick={this.menuClickHandler} className='btn'>
                        <i className=' fa fa-bars'></i>
                      </Button>

                    <Link link to="/"> <img className="nav-logo{" src={ecom2} alt=''  /></Link>
                    
                    <Button className='cart-btn'>
                        <i className=' fa fa-shopping-cart'> 10 items</i>
                      </Button>
                    </Col>

                    
                
                  </Row>
                </Container>

                <div className={this.state.sideNavState}>
                  <MegaMenuPhone />
                
               
                </div>


                <div onClick={this.OverlayClickHandler} className={this.state.contentOverState}>

                </div>
        </div>

      </Fragment>
    )
  }
}

export default NavMenuMobile