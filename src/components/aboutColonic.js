import React from 'react'

import '../styles/about.css'
import { Row, Col } from 'react-bootstrap'

const AboutColonic = () => (
  <Row className="first-section-about">
    <Col xs={6} md={5}>
      <p className="first-section-about-header">GRAVITY METHOD COLONICS</p>
      <p className="first-section-about-colonic">
        A colonic is a thorough cleansing of the colon (large intestine) using warm purified water. The Gravity Method, employed in my private practice, ensures a comfortable and safe session, preventing pressure build-up with its continuous water inflow and outflow. As the sole therapist, I provide personalized care throughout, incorporating firm abdominal massage for a gentle and effective release. This 45-minute to an hour-long process facilitates the swift removal of accumulated waste, allowing the body to naturally focus on rejuvenation. The Gravity Method Colonic is a non-invasive means to support your body's detoxification process and promote overall health and vitality.
      </p>
      <div className="first-section-about-book-apt">
        <a
          className="book-apt"
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="https://square.site/book/B5H65JGC5J9Y9/park-slope-colonics-brooklyn-ny"
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
