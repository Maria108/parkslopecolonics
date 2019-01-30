import React from 'react'

import '../styles/about.css'
import { Row, Col, Grid } from 'react-bootstrap'

const Benefits = () => (
  <Grid>
    <div className="main-div-colon picture-about">
      <div className="opacity-dive">
        <Row>
          <Col xs={12} md={6}>
            <div className="white-bckgrnd-about">
              <Row>
                <Col xs={12} md={12} className="about-colonic">
                  <p>
                    Colonic is a thorough cleansing of the colon ( large
                    intestine), using only warm purified water. During the
                    treatment there is a continuous inflow and outflow of water
                    that doesn’t allow pressure to build up, witch makes it for
                    a comfortable and safe session. The therapist is with you
                    during the whole session, doing firm abdominal massage to
                    assure gentle and effective release. It usually takes 45
                    mins to an hour to empty out a colon
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </Grid>
)

export default Benefits
