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
                <Col xs={12} md={6} className="recommendations">
                  <p>Something about colonics</p>
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
