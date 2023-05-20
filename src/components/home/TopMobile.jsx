import React, { Component, Fragment } from 'react'
import SliderMenu from './SliderMenu'
import { Col, Container, Row } from 'react-bootstrap'

export class TopMobile extends Component {
  render() {
    return (
        <Fragment>
        <Container fluid={true} className='p-0 m-0 overflow-hidden'>
            <Row className='p-0 m-0 overflow-hidden'>

                <Col lg={12} md={12} sm={12}>
                    <SliderMenu />
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default TopMobile