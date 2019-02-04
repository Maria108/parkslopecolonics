import React from 'react'

import '../styles/about.css'
import { Row, Col, Grid } from 'react-bootstrap'

const Benefits = () => (
  <Grid>
    <Row className="first-section-about">
      <Col xs={12} md={6}>
        <p className="how-you-know">GRAVITY METHOD COLONICS</p>
        <p className="about-colonic">
          Colonic is a <b>thorough cleansing</b> of the colon (large intestine),
          using only warm purified water. During the treatment there is a
          continuous inflow and outflow of water that doesn’t allow pressure to
          build up, witch makes it for a comfortable and safe session. The
          therapist is with you during the whole session, doing firm abdominal
          massage to assure gentle and effective release. It usually takes 45
          mins to an hour to empty out a colon
        </p>
      </Col>
      <Col xs={12} md={6}>
        <div className="main-div-colon picture-about" />
      </Col>
    </Row>
  </Grid>
)

export default Benefits
