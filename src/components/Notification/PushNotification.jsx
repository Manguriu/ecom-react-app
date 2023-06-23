import React, { Component, Fragment } from "react";
import AppURL from "../../api/AppURL";
import axios from "axios";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

export class PushNotification extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      NotifData:[],
      isLoading:"",
      mainDiv:"d-none",
      Notifmsg:"",
      Notiftitle:"",
      Notifdate:""
      
    };
  }

    componentDidMount(){
      axios.get(AppURL.NoftHistory).then(response =>{
        this.setState({NotifData:response.data,isLoading:"d-none",mainDiv:""})
      }).catch(error=>{

      });
    }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = (event) => {
    this.setState({ show: true });
    let Msg = event.target.getAttribute("data-message")
    let Ttl = event.target.getAttribute("data-title")
    let Dte = event.target.getAttribute("data-date")
    this.setState({Notifmsg:Msg,Notiftitle:Ttl,Notifdate:Dte})
  };
  render() {

    const Notlist = this.state.NotifData;
    const view = Notlist.map((Notlist,i)=>{
      return(
        <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
              <Card  className="notification-card">
                <Card.Body>
                  <h6> {Notlist.title}</h6>
                  <p className="py-1  px-0 text-primary m-0">
                    <i className="fa  fa-bell"></i> Date: {Notlist.date} | Status:
                    Unread
                  </p>
                  <Button onClick={this.handleShow} data-title={Notlist.title} data-date={Notlist.date} data-message={Notlist.message}className='btn btn-succes '>Read Message</Button>
                </Card.Body>
              </Card>
            </Col>
      )
    })


    return (
      <Fragment>
        <Container className="TopSection">
          <Row>
           {view}
          </Row>
        </Container>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <h6>
              <i className="fa fa-bell"></i> Date:{this.state.Notifdate}
            </h6>
          </Modal.Header>
          <Modal.Body>
            <h6>{this.state.Notiftitle}</h6>
            <p>
              {this.state.Notifmsg}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Done
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default PushNotification;
