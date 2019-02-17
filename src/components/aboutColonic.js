import React from 'react'

import '../styles/about.css'
import { Row, Col } from 'react-bootstrap'

const AboutColonic = () => (
  <Row className="first-section-about">
    <Col xs={6} md={5}>
      <p className="first-section-about-header">GRAVITY METHOD COLONICS</p>
      <p className="first-section-about-colonic">
        Colonic is a <b>thorough cleansing</b> of the colon (large intestine),
        using only warm purified water. During the treatment there is a
        continuous inflow and outflow of water that doesn’t allow pressure to
        build up, which makes it for a comfortable and safe session. The
        therapist is with you during the whole session, doing firm abdominal
        massage to assure gentle and effective release. It usually takes 45 mins
        to an hour to empty out a colon
      </p>
      <div className="first-section-about-book-apt">
        <a
          className="book-apt"
          target="_blank"
          rel="noopener noreferrer"
          href="https://squareup.com/appointments/book/8bc57aaf-d0a9-46ce-8841-ea5b773419e0/0XQ3582XGB99C/date"
          rel="nofollow"
        >
          BOOK AN APPOINTMENT
        </a>
      </div>
    </Col>
    <Col xs={6} md={7}>
      <div className="first-section-about-picture" />
    </Col>
  </Row>
)

export default AboutColonic
