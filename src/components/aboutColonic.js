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
        to an hour to empty out a colon. Gravity method colonic gently detoxifies and cleanses your system by moving the accumulated waste out of your body quickly, giving your body a chance to naturally refocus on rejuvenating itself. It will assist the body to eliminate pounds of unwanted toxic fecal matter and help to restore health and vitality to your entire body.
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
